$(function() {
  initMap();
  $(".card").click(function(index) {
    console.log("ok");
    $(this).find(".card-detail").toggleClass("show-detail");
  });
});

var initMap = function() {
  var map;
  map = new google.maps.Map($('#ceremony-map').get(0), {
    center: {
      lat: 44.3098361,
      lng: 9.3475839
    },
    zoom: 14
  });

  var service = new google.maps.places.PlacesService(map);
  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    map: map
  });

  // Get place datails
  service.getDetails({
    placeId: 'ChIJzW-Scg2Y1BIRB_tIWa3Wkbg'
  }, function(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      marker.position = place.geometry.location;
      if (!place.geometry) {
        return;
      }

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(16);
      }

      // Set the position of the marker using the place ID and location.
      marker.setPlace({
        placeId: place.place_id,
        location: place.geometry.location
      });
      marker.setVisible(true);

      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
        place.formatted_address);
      infowindow.open(map, marker);

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
    }
  });
}
