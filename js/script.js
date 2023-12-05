
var map; 
function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 41.882629, lng: -87.623474},
      zoom: 4
    });
}

google.maps.event.addDomListener(window, 'load', initMap);