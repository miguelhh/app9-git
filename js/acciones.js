// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready", onDeviceReady,false);
	
});

function onDeviceready(){
	
	$('posicion').on('click',function(){
		getPosition ();
	});
	
	$('#watch').on('click',function(){
		watchPosition ();
	});

}

	function getPosition(){
		
		var options={
			enableHighAccuracy :true,
			maximunAge:3600000
		}
		
		var watchID = navigator.geolocation.getCurrentPosition(onSucess,onError,options);
		
		function onSuccess(position) {
			
			alert('Latitude:'	+ position.cords.latitude	+'\n' +
				'longitude :'	+ position.cords.longitude	+'\n' +
				'Altitude:'		+position.cords.altitude	+'\n' +
				'Accuracy:'		+position.cords.accuracy	+'\n' +
				'Altitud Accuracy:'		+position.cords.altitudeAccuracy	+'\n' +
				'Heading:'		+position.cords.heading	+'\n' +
				'Speed:'		+position.cords.speed	+'\n' +
				'Timestamp:'		+position.timestamp	+'\n');
		};
		
		function onError(error){
			alert('code:'+	error.code	+'\n' +'message:' + error.message +'\n');
		}
	}
	
	function watchPosition() {
	
		var options={
			maximunAge : 3600000,
			timeout:3000,
			enableHighAccuracy : true
		}
		
		var watchID=navigator.geolocation.watchPosition(onSucess,onError,options);
		
		function onSuccess(position) {
			
			$('#latitud').html(position.cords.latitude);
			$('#longitud').html(position.cords.longitude);
			$('#altitud').html(position.cords.altitude);
			$('#accuracy').html(position.cords.accuracy);
			$('#aaccuracy').html(position.cords.altitudeAccuracy);
			$('#heading').html(position.cords.heading);
			$('#speed').html(position.cords.speed);
			$('#timestamp').html(position.timestamp);
		};
		
			function onError(error){
			alert('code:'+	error.code	+'\n' +'message:' + error.message +'\n');
		}
	}