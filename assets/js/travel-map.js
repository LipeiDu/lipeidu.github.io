(function () {
  var COORDS = {
    "Durham|USA": [35.9940, -78.8986],
    "Seattle|USA": [47.6062, -122.3321],
    "Beijing|China": [39.9042, 116.4074],
    "Columbus|USA": [39.9612, -82.9988],
    "Upton|USA": [40.8640, -72.8870],
    "Berkeley|USA": [37.8715, -122.2730],
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

  function escapeHtml(s) {
    return (s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function render(rows) {
    var selectedType = document.querySelector("input[name='recordType']:checked").value;
    var includeOnline = document.getElementById("includeOnline").checked;

    var filtered = rows.filter(function (r) {
      if (selectedType !== "all" && r.record_type !== selectedType) return false;
      if (!includeOnline && isOnline(r)) return false;
      return true;
    });

    markers.clearLayers();

    filtered.forEach(function (row) {
      if (isOnline(row)) return;
      var coords = COORDS[keyForCoords(row)];
      if (!coords) return;

      var popup = "<strong>" + escapeHtml(displayTitle(row)) + "</strong><br>" +
        escapeHtml(displayLocation(row)) + "<br>" +
        escapeHtml(row.sort_date) + " · " + escapeHtml(formatType(row));

      var marker = L.marker(coords, { title: displayTitle(row) });
      marker.bindPopup(popup);
      markers.addLayer(marker);
    });

    var tbody = document.querySelector("#travelTable tbody");
    tbody.innerHTML = filtered.map(function (row) {
      var title = displayTitle(row);
      var loc = displayLocation(row);
      var type = formatType(row);
      var status = row.status || "";
      var muted = redact(row) ? " class='travel-muted'" : "";
      return "<tr>" +
        "<td>" + escapeHtml(row.sort_date) + "</td>" +
        "<td>" + escapeHtml(type) + "</td>" +
        "<td" + muted + ">" + escapeHtml(title) + "</td>" +
        "<td>" + escapeHtml(loc) + "</td>" +
        "<td>" + escapeHtml(status) + "</td>" +
      "</tr>";
    }).join("");

    var places = new Set(filtered.filter(function (r) { return !isOnline(r) && COORDS[keyForCoords(r)]; }).map(function (r) {
      return keyForCoords(r);
    }));

    document.getElementById("travelStats").textContent =
      filtered.length + " records shown · " + places.size + " mapped locations";
  }

  function bindControls() {
    document.querySelectorAll("input[name='recordType']").forEach(function (el) {
      el.addEventListener("change", function () { render(allRows); });
    });
    document.getElementById("includeOnline").addEventListener("change", function () { render(allRows); });
  }

  fetch(window.TRAVEL_TIMELINE_TSV_URL)
    .then(function (r) { return r.text(); })
    .then(function (text) {
      allRows = parseTsv(text);
      bindControls();
      render(allRows);
    })
    .catch(function () {
      document.getElementById("travelStats").textContent = "Failed to load travel timeline data.";
    });
})();
