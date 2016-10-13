var Sighting = require('./../js/boring_sighting.js').sightingModule;




$(document).ready(function() {
  var boringSighting = new Sighting();
  boringSighting.addScript();

  $('#weatherBoring').click(function() {
    boringSighting.getWeather();
  });

});
