/**
 * Author: Rajasekaran Rajagopal
 * Description: This class used for building UI grids based on Forecast data
 * */

class Loaders{
	constructor(){
		this.dateobj = {};
	}
	locationDetails(data) {
		if (data) {
			$("#location").html(data.city.name + "," + data.city.country);
		}
	}
	
	dateWiseWeather(data) {
		data.list.forEach((val, index)=> {
			let date = val.dt_txt.split(" ")[0];
			if(this.dateobj.hasOwnProperty(date)){
				let arrValues = this.dateobj[date];
				arrValues.push(val);
				this.dateobj[date]=arrValues;
			}else{
				this.dateobj[date]=[val];
			}
		})
		console.log(this.dateobj);
	}
	
	loadRows(){
		let colsHtml="";
		for (var key in this.dateobj) {
			let times = "";
			this.dateobj[key].forEach((val, index) =>{
				let formater = new Util(new Date(val.dt_txt.replace(/-/g, '/')));
				let dateStr = formater.formatAMPM();
				times+=`<div class="well"><div><img style="display: inline;" class="media-object" src="http://openweathermap.org/img/w/${val.weather[0].icon}.png" alt="${val.weather[0].icon}"> <b>${dateStr}</b></div>
				<div class="media">
				  <div class="media-body">
				    <h4 class="media-heading">${val.main.temp_min}&#8457; / ${val.main.temp_max}&#8457; - ${val.weather[0].description} </h4>
				    <p>Pressure - ${val.main.pressure}hPa</p>
				    <p>Humidity - ${val.main.humidity}%</p>
				    <p>Wind - ${val.wind.speed}miles/hour</p>
				  </div>
				</div>
				</div>`;
				
			});//col-sm-6
			colsHtml+=`<div class=" col-md-4">
					<div class="thumbnail">
						<div class="caption">
							<h3>${key}</h3>
							<div>${times}</div>
						</div>
					</div>
				</div>`;
		}
		let rowHtml =`<div class="row">
				${colsHtml}
			</div>`;
		$("#weather-rows").html(colsHtml);
	}
}