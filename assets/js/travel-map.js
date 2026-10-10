(function () {
  var COORDS = {
    "Durham|USA": [35.9940, -78.8986],
    "Nashville|USA": [36.1627, -86.7816],
    "Seattle|USA": [47.6062, -122.3321],
    "Beijing|China": [39.9042, 116.4074],
    "Columbus|USA": [39.9612, -82.9988],
    "Upton|USA": [40.8640, -72.8870],
    "Berkeley|USA": [37.8715, -122.2730],
    "Los Angeles|USA": [34.0522, -118.2437],
    "Tokyo|Japan": [35.6762, 139.6503],
    "Nagasaki|Japan": [32.7503, 129.8777],
    "Whistler|Canada": [50.1163, -122.9574],
    "Shanghai|China": [31.2304, 121.4737],
    "Guangzhou|China": [23.1291, 113.2644],
    "Qingdao|China": [36.0671, 120.3826],
    "Dalian|China": [38.9140, 121.6147],
    "Stony Brook|USA": [40.9257, -73.1409],
    "Houston|USA": [29.7604, -95.3698],
    "Santa Barbara|USA": [34.4208, -119.6982],
    "Wuhan|China": [30.5928, 114.3055],
    "Tsukuba|Japan": [36.0825, 140.1110],
    "Hiroshima|Japan": [34.3853, 132.4553],
    "Krakow|Poland": [50.0647, 19.9450],
    "Montreal|Canada": [45.5017, -73.5673],
    "Arlington|USA": [38.8816, -77.0910],
    "Knoxville|USA": [35.9606, -83.9207],
    "Raleigh|USA": [35.7796, -78.6382],
    "Detroit|USA": [42.3314, -83.0458],
    "College Station|USA": [30.6280, -96.3344],
    "Trento|Italy": [46.0748, 11.1217],
    "Venice|Italy": [45.4408, 12.3155]
  };

  var map = L.map("travelMap", { center: [25, 10], zoom: 2, minZoom: 1 });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var markers = L.markerClusterGroup({ showCoverageOnHover: false, maxClusterRadius: 60 });
  map.addLayer(markers);

  var allRows = [];

  function parseTsv(text) {
    var lines = text.trim().split(/\r?\n/);
    var headers = lines[0].split("\t");
    return lines.slice(1).map(function (line) {
      var cols = line.split("\t");
      var obj = {};
      headers.forEach(function (h, i) { obj[h] = (cols[i] || "").trim(); });
      return obj;
    });
  }

  function yearFromDate(d) {
    return (d || "").slice(0, 4);
  }

  function humanize(value) {
    var text = (value || "").replace(/[_-]+/g, " ");
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
  }

  function formatStatus(value) {
    var labels = {
      given: "Presented",
      attended: "Attended",
      declined: "Declined",
      lecturer: "Lecturer",
      ta: "Teaching assistant"
    };
    return labels[value] || humanize(value);
  }

  function renderStatus(row) {
    var label = escapeHtml(formatStatus(row.status || ""));
    var note = row.status_note || "";
    return note
      ? label + '<span class="travel-table__status-note"><em>' + escapeHtml(note) + "</em></span>"
      : label;
  }

  function isOnline(row) {
    return row.online === "yes" || row.city === "Online" || row.country === "Online";
  }

  function redact(row) {
    return row.privacy_redacted === "yes";
  }

  function keyForCoords(row) {
    return row.city + "|" + row.country;
  }

  function displayTitle(row) {
    if (redact(row)) {
      return (row.city || row.location_display || "Unknown location") + " (" + yearFromDate(row.sort_date) + ")";
    }

    if (row.record_type === "presentation") {
      if (row.presentation_title) {
        return row.presentation_title;
      }
      return row.display_title || "Presentation";
    }

    return row.display_title || "Event";
  }

  function conciseEventName(row) {
    if (row.event_short_name) return row.event_short_name;

    var name = row.display_title || "";
    var familiarName = name.match(/(?:Hard Probes|Quark Matter|CPOD|ATHIC)\s+\d{4}/i);
    return familiarName ? familiarName[0] : name;
  }

  function displayLocation(row) {
    if (redact(row)) {
      return (row.city || "Unknown city") + ", " + (row.country || "") + " (" + yearFromDate(row.sort_date) + ")";
    }
    return row.location_display || "";
  }

  function formatType(row) {
    if (row.record_type === "presentation") {
      return row.presentation_type || "presentation";
    }
    return row.category || "event";
  }

  function formatDateRange(row) {
    var start = row.sort_date || "";
    if (row.date_precision === "year") return yearFromDate(start);
    if (row.record_type === "event") {
      var end = row.end_date || start;
      return end !== start ? formatDate(start) + " – " + formatDate(end) : formatDate(start);
    }
    return formatDate(start);
  }

  function formatDate(value) {
    var parts = (value || "").split("-");
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (parts.length !== 3) return value || "";
    return months[Number(parts[1]) - 1] + " " + Number(parts[2]) + ", " + parts[0];
  }

  function escapeHtml(s) {
    return (s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function safeUrl(value) {
    return /^https?:\/\//i.test(value || "") ? value : "";
  }

  function searchText(row) {
    return [
      row.display_title,
      row.event_short_name,
      row.presentation_title,
      row.presentation_type,
      row.category,
      row.location_display,
      row.city,
      row.country,
      row.status,
      row.status_note
    ].join(" ").toLowerCase();
  }

  function populateSelect(select, values, formatter) {
    values.forEach(function (value) {
      var option = document.createElement("option");
      option.value = value;
      option.textContent = formatter ? formatter(value) : value;
      select.appendChild(option);
    });
  }

  function setupFilterOptions(rows) {
    var years = Array.from(new Set(rows.map(function (row) {
      return yearFromDate(row.sort_date);
    }).filter(Boolean))).sort().reverse();
    var statuses = Array.from(new Set(rows.map(function (row) {
      return row.status;
    }).filter(Boolean))).sort();

    populateSelect(document.getElementById("presentationYear"), years);
    populateSelect(document.getElementById("presentationStatus"), statuses, formatStatus);
  }

  function renderResources(row) {
    var links = [];
    var eventUrl = safeUrl(row.event_url);
    var resourceUrl = safeUrl(row.resource_url);

    if (row.record_type === "event" && eventUrl) {
      links.push('<a href="' + escapeHtml(eventUrl) + '" target="_blank" rel="noopener noreferrer">Event</a>');
    }
    if (row.record_type === "presentation" && resourceUrl && resourceUrl !== eventUrl) {
      links.push('<a href="' + escapeHtml(resourceUrl) + '" target="_blank" rel="noopener noreferrer">' +
        'Presentation</a>');
    }
    return links.length ? links.join(" · ") : '<span class="travel-muted">—</span>';
  }

  function render(rows) {
    var selectedType = document.querySelector("input[name='recordType']:checked").value;
    var includeOnline = document.getElementById("includeOnline").checked;
    var selectedYear = document.getElementById("presentationYear").value;
    var selectedStatus = document.getElementById("presentationStatus").value;
    var query = document.getElementById("presentationSearch").value.trim().toLowerCase();

    var filtered = rows.filter(function (r) {
      if (selectedType !== "all" && r.record_type !== selectedType) return false;
      if (!includeOnline && isOnline(r)) return false;
      if (selectedYear !== "all" && yearFromDate(r.sort_date) !== selectedYear) return false;
      if (selectedStatus !== "all" && r.status !== selectedStatus) return false;
      if (query && searchText(r).indexOf(query) === -1) return false;
      return true;
    });

    markers.clearLayers();

    filtered.forEach(function (row) {
      if (isOnline(row)) return;
      var coords = COORDS[keyForCoords(row)];
      if (!coords) return;

      var popup = "<strong>" + escapeHtml(displayTitle(row)) + "</strong><br>" +
        escapeHtml(displayLocation(row)) + "<br>" +
        escapeHtml(formatDateRange(row)) + " · " + escapeHtml(formatType(row));

      var marker = L.marker(coords, { title: displayTitle(row) });
      marker.bindPopup(popup);
      markers.addLayer(marker);
    });

    var publicRows = filtered.filter(function (row) {
      return !redact(row);
    });

    var tbody = document.querySelector("#travelTable tbody");
    tbody.innerHTML = publicRows.map(function (row) {
      var title = displayTitle(row);
      var loc = displayLocation(row);
      var type = formatType(row);
      var eventName = conciseEventName(row);
      var locationCell = loc ? escapeHtml(loc) : '<span class="travel-muted">—</span>';
      var context = row.record_type === "presentation" && eventName && eventName !== title
        ? '<span class="travel-table__context">At ' + escapeHtml(eventName) + '</span>'
        : "";
      return "<tr>" +
        "<td>" + escapeHtml(formatDateRange(row)) + "</td>" +
        '<td><span class="travel-table__kind">' + escapeHtml(humanize(row.record_type)) + '</span>' +
          '<span class="travel-table__subtype">' + escapeHtml(type) + "</span></td>" +
        '<td><span class="travel-table__title">' + escapeHtml(title) + "</span>" + context + "</td>" +
        "<td>" + locationCell + "</td>" +
        "<td>" + renderStatus(row) + "</td>" +
        '<td class="travel-table__resources">' + renderResources(row) + "</td>" +
      "</tr>";
    }).join("") || '<tr><td colspan="6" class="travel-empty">No activities match these filters.</td></tr>';

    var places = new Set(publicRows.filter(function (r) { return !isOnline(r) && COORDS[keyForCoords(r)]; }).map(function (r) {
      return keyForCoords(r);
    }));

    var presentations = publicRows.filter(function (row) { return row.record_type === "presentation"; }).length;
    var events = publicRows.filter(function (row) { return row.record_type === "event"; }).length;

    document.getElementById("travelStats").textContent =
      "Showing " + publicRows.length + " activities across " + places.size + " mapped locations: " +
      presentations + " presentations and " + events + " events.";
  }

  function bindControls() {
    document.querySelectorAll("input[name='recordType']").forEach(function (el) {
      el.addEventListener("change", function () { render(allRows); });
    });
    document.getElementById("includeOnline").addEventListener("change", function () { render(allRows); });
    document.getElementById("presentationYear").addEventListener("change", function () { render(allRows); });
    document.getElementById("presentationStatus").addEventListener("change", function () { render(allRows); });
    document.getElementById("presentationSearch").addEventListener("input", function () { render(allRows); });
  }

  fetch(window.TRAVEL_TIMELINE_TSV_URL)
    .then(function (r) { return r.text(); })
    .then(function (text) {
      allRows = parseTsv(text);
      setupFilterOptions(allRows);
      bindControls();
      render(allRows);
    })
    .catch(function () {
      document.getElementById("travelStats").textContent = "Failed to load travel timeline data.";
    });
})();
