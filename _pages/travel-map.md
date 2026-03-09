---
layout: single
title: "Travel"
permalink: /travel/
redirect_from:
  - /travel-map/
published: true
author_profile: true
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin="" />
<link rel="stylesheet" href="{{ '/talkmap/leaflet_dist/MarkerCluster.css' | relative_url }}" />
<link rel="stylesheet" href="{{ '/talkmap/leaflet_dist/MarkerCluster.Default.css' | relative_url }}" />
<link rel="stylesheet" href="{{ '/assets/css/travel-map.css' | relative_url }}" />

<div class="travel-map-intro">
  <p>This page tracks academic events and presentations in one timeline (newest to oldest).</p>
</div>

<div class="travel-map-controls">
  <label><input type="radio" name="recordType" value="all" checked> All</label>
  <label><input type="radio" name="recordType" value="event"> Events</label>
  <label><input type="radio" name="recordType" value="presentation"> Presentations</label>
  <label><input type="checkbox" id="includeOnline" checked> Include online records</label>
</div>

<div id="travelMap" class="travel-map"></div>
<div id="travelStats" class="travel-stats"></div>

<div class="travel-table-wrap">
  <table id="travelTable" class="travel-table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Type</th>
        <th>Title / Topic</th>
        <th>Location</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""></script>
<script src="{{ '/talkmap/leaflet_dist/leaflet.markercluster-src.js' | relative_url }}"></script>
<script>
  window.TRAVEL_TIMELINE_TSV_URL = "{{ '/assets/travel_timeline.tsv' | relative_url }}";
</script>
<script src="{{ '/assets/js/travel-map.js' | relative_url }}"></script>
