---
layout: single
title: "Presentations"
permalink: /presentations/
redirect_from:
  - /travel/
  - /travel-map/
published: true
author_profile: true
excerpt: "Academic presentations, conferences, workshops, seminars, and schools attended by Lipei Du."
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin="" />
<link rel="stylesheet" href="{{ '/talkmap/leaflet_dist/MarkerCluster.css' | relative_url }}" />
<link rel="stylesheet" href="{{ '/talkmap/leaflet_dist/MarkerCluster.Default.css' | relative_url }}" />
<link rel="stylesheet" href="{{ '/assets/css/travel-map.css' | relative_url }}" />

<div class="travel-map-intro">
  <p>Explore my academic presentations and the conferences, workshops, seminars, and schools connected to them.</p>
</div>

<div class="travel-map-controls" aria-label="Presentation filters">
  <label class="travel-search" for="presentationSearch">
    <span>Search</span>
    <input id="presentationSearch" type="search" placeholder="Conference, topic, or location" autocomplete="off">
  </label>
  <label for="presentationYear">
    <span>Year</span>
    <select id="presentationYear"><option value="all">All years</option></select>
  </label>
  <label for="presentationStatus">
    <span>Status</span>
    <select id="presentationStatus"><option value="all">All statuses</option></select>
  </label>
  <fieldset class="travel-record-types">
    <legend>Record type</legend>
    <label><input type="radio" name="recordType" value="all" checked> All</label>
    <label><input type="radio" name="recordType" value="presentation"> Presentations</label>
    <label><input type="radio" name="recordType" value="event"> Events</label>
  </fieldset>
  <label class="travel-online-toggle"><input type="checkbox" id="includeOnline" checked> Include online activities</label>
</div>

<div id="travelMap" class="travel-map"></div>
<div id="travelStats" class="travel-stats"></div>

<div class="travel-table-wrap">
  <table id="travelTable" class="travel-table">
    <caption>Academic presentations and related events, newest first</caption>
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Record</th>
        <th scope="col">Details</th>
        <th scope="col">Location</th>
        <th scope="col">Status</th>
        <th scope="col">Resources</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""></script>
<script src="{{ '/talkmap/leaflet_dist/leaflet.markercluster-src.js' | relative_url }}"></script>
<script>
  window.TRAVEL_TIMELINE_TSV_URL = "{{ '/assets/travel_timeline.tsv' | relative_url }}?v=20261001-4";
</script>
<script src="{{ '/assets/js/travel-map.js' | relative_url }}?v=20261001-4"></script>
