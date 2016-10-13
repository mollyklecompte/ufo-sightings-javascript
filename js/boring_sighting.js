var apiKey = require('./../.env').apiKey;
var apiKeyWeather = require('./../.env').apiKeyWeather;

Sighting = function () {

}

Sighting.prototype.getWeather = function() {
  $.get("http://api.openweathermap.org/data/2.5/weather?lat=45.412&lon=-122.361&appid=" + apiKeyWeather).then(function(response)
  {

    var tempFahrenheit = Math.round((response.main.temp*1.8)- 459.67);
    $('.showWeather').text("The temperature in Boring is " + tempFahrenheit + " °F, with " + response.weather.description + ".");
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}


Sighting.prototype.addScript = function() {
  var newScript = document.createElement("script");
  newScript.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=initMap";

  var placeholder = document.getElementById("placeholder");
  document.body.insertBefore(newScript, placeholder);
}

exports.sightingModule = Sighting;
