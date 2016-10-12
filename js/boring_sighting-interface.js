var apiKey = require('./../.env').apiKey;



function addScript() {
  var newScript = document.createElement("script");
  newScript.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=initMap";

  var placeholder = document.getElementById("placeholder");
  document.body.insertBefore(newScript, placeholder);
}

$(document).ready(function() {
  addScript();
});
