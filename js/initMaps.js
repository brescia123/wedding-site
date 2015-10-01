$(function() {
  initPartyMap();
  initParkingMap();
});

var initPartyMap = function() {

    var map = new google.maps.Map($('.map-party').get(0), {
      center: {
        lat: 44.3515041,
        lng: 9.3595033
      },
      zoom: 16
    });
    var infowindow = new google.maps.InfoWindow();

    function addMarker(location, map, label, icon, info) {
      var infowindow = new google.maps.InfoWindow({
        content: '<div><strong>' + info + '</strong><br>'
      });
      var marker = new google.maps.Marker({
        position: location,
        map: map,
        label: label,
        icon: icon
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

      return marker;
    }

    var service = new google.maps.places.PlacesService(map);
    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
      map: map
    });
    marker.setIcon('https://s3.eu-central-1.amazonaws.com/j-wedding-site/ic_party.png');

    // Get place datails
    service.getDetails({
      placeId: 'ChIJA05S_Nai1BIRggu4N02m2-M'
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
        marker.link = 'https://goo.gl/maps/bVuCNZWHABN2';

        infowindow.setContent('<div><div style="font-weight:bold; font-size:1.1em;">' + place.name + '</div>' +
          '<a href="' + marker.link + '" target="_blank">' + place.formatted_address + '</a>');
        infowindow.open(map, marker);

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent('<div><div style="font-weight:bold; font-size:1.1em;">' + place.name + '</div>' +
            '<a href="' + marker.link + '" target="_blank">' + place.formatted_address + '</a>') + '</div>';
          infowindow.open(map, this);
        });
      }
    });
}

var initParkingMap = function() {

  var parkings = [{
    location: {
      lat: 44.3084675,
      lng: 9.3489485
    },
    info: 'Via Tommaso Sanguineti, 9',
    link: 'https://goo.gl/maps/DozyN68VPt52',
    label: 'P'
  }, {
    location: {
      lat: 44.311435,
      lng: 9.347493
    },
    info: 'Via Carcara, 10',
    link: 'https://goo.gl/maps/yp1LBLnQjtN2',
    label: 'P'
  }, {
    location: {
      lat: 44.3092167,
      lng: 9.3486832
    },
    info: 'Via della Pace, 1',
    link: 'https://goo.gl/maps/chgJPgiYS7x',
    label: 'P'
  }];

  var map = new google.maps.Map($('.map').get(0), {
    center: {
      lat: 44.3098361,
      lng: 9.3475839
    },
    zoom: 16
  });
  var infowindow = new google.maps.InfoWindow();

  for (parking of parkings) {
    addMarker(parking.location, map, parking.label, parking.icon, parking.info);
  }

  var infowindow = new google.maps.InfoWindow();

  function addMarker(location, map, label, icon, info) {

    var marker = new google.maps.Marker({
      position: location,
      map: map,
      label: label,
      icon: icon,
      info: info
    });

    marker.addListener('click', function() {
      infowindow.setContent('<div><div style="font-weight:bold; font-size:1.1em;">Parcheggio</div><a href="' + marker.link + '" target="_blank">' + marker.info + '</a>');
      infowindow.open(map, marker);
    });

    return marker;
  }

  var service = new google.maps.places.PlacesService(map);
  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    map: map
  });
  marker.setIcon('https://s3.eu-central-1.amazonaws.com/j-wedding-site/ic_wedding.png');

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
      marker.link = 'https://goo.gl/maps/bVfVb1bPFwj';

      infowindow.setContent('<div><div style="font-weight:bold; font-size:1.1em;">' + place.name + '</div>' +
        '<a href="' + marker.link + '" target="_blank">' + place.formatted_address + '</a>');
      infowindow.open(map, marker) + '</div>';

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent('<div><div style="font-weight:bold; font-size:1.1em;">' + place.name + '</div>' +
          '<a href="' + marker.link + '" target="_blank">' + place.formatted_address + '</a>') + '</div>';
        infowindow.open(map, this);
      });
    }
  });
}
