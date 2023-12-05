const apiKey = "AIzaSyDJlDF23SK4JzimLJQo65rH9jDY53EjhqY";

async function initMap(){
	var el = document.getElementById('display');
	var myLocation = new google.maps.LatLng(41.882629, -87.623474);
	var mapOptions = {
		center: myLocation,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);
	
	const giantBean = { lat: 41.882629, lng: -87.634049};
	
	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		
	});

	var contentString = '<h1>millenium park</h1><p>Attractions: Giant Bean, Ice skating ring, and Christmas tree</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});


}

google.maps.event.addDomListener(window, 'load', init);