"use strict"

function initMap() {
   let map = new google.maps.Map(document.getElementById('map'), {
     center: { lat: 48.2921, lng: 25.9352 },
     zoom: 13
   });
 
 }
 
 document.getElementById('map').addEventListener('click', function() {
   let map = document.getElementById('map');
   if (map.style.height === '400px') {
     map.style.height = '600px'; 
   } else {
     map.style.height = '400px'; 
   }
 });