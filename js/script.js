
var map; 
function initMap(){
  const { Map } = await google.maps.importLibrary("maps");
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 41.8826, lng: 87.6226},
      zoom: 4
    });
}

google.maps.event.addDomListener(window, 'load', initMap);