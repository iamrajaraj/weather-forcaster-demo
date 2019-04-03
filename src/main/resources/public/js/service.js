/**
 * Author: Rajasekaran Rajagopal
 * Description: This class gets 5day/3hours weather forecast for current location from https://api.openweathermap.org/ 
 * */
$(document).ready(function() {
	if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(new Service().getWeatherCall);
	  } else { 
	   alert("Geolocation is not supported by this browser.");
  }
});

class Service{
	 getWeatherCall(position) {
			let lat = position.coords.latitude;
			let long = position.coords.longitude;
			let wURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=585e670f55ee9b114fa2f1f2731177d9&units=imperial`;
			$.get(wURL, (data)=>{
				let loaders = new Loaders();
				loaders.locationDetails(data);
				loaders.dateWiseWeather(data);
				loaders.loadRows();
			});
		}
}