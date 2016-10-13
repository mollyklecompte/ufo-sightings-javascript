var Sighting = require('./../js/boring_sighting.js').sightingModule;




$(document).ready(function() {
  var boringSighting = new Sighting();
  boringSighting.addScript();

  $('#weatherBoring').click(function() {
    boringSighting.getWeather();
  });

  $('#directionsBoring').click(function() {
    $('.showDirections').show();

    $('#directions-form').submit(function(event) {
      event.preventDefault();

      directionsDisplay.setPanel(document.getElementById('directionsPanel'));

      function calcRoute() {
        var origin = document.getElementById('origin').value;
        var request = {
          origin: start,
          destination: "Boring, OR",
          travelMode: 'DRIVING',
        };
        directionsService.route(request, function(response, status) {
          if (status == 'OK') {
            directionsDisplay.setDirections(response);
          }
        });
      }
    });

  });

});
