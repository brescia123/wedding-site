$(function() {
  //initMediaListener();
  initMap();
  $(".card-cover").click(function(e) {
    // $(this).toggleClass('hide');
    $(this).siblings('.card-detail').toggleClass('show');
  });
  $('.close-button').click(function(e) {
    // $(this).parent().parent().find('.card-cover').toggleClass('hide');
    $(this).parent().parent().find('.card-detail').toggleClass('show');
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

var initMediaListener = function() {
  if (matchMedia) {
    var mq = window.matchMedia('min-width: 800px');
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  // media query change
  function WidthChange(mq) {

    if (mq.matches) {
      console.log('> 800px');
    } else {
      console.log('< 800px');
    }

  }
}
