

const mainheading = document.querySelector(".weather-heading");
mainheading.addEventListener("click",()=>{
	window.location.reload();
});

Location = "Kolkata";
const url =`https://api.weatherapi.com/v1/forecast.json?key=33b6168723354c638ac62553242805&q=${Location}&days=2&aqi=no&alerts=no`;
const historyWeatherURL = (location, date) => `https://api.weatherapi.com/v1/history.json?key=33b6168723354c638ac62553242805&q=${location}&dt=${date}`;
//set and prnting current temparature
const currentweather = async()=>{
	let promise = await fetch(url);
	console.log(promise);
	let weather = await promise.json();
	//todays curretn temp
	let currenttemp = document.querySelector(".current-temp");
	currenttemp.innerText = weather.current.temp_c+"°C";
	console.log(currenttemp.innerText);
	//todays place
	let place =document.querySelector(".place");
     place.innerText=weather.location.name;
	//tomorrows place
	 let place2 =document.querySelector(".place2");
     place2.innerText=weather.location.name;

	 //tomorrowa average temp
	 let tomorrowtemp = document.querySelector(".Avg-temp");
	tomorrowtemp.innerText = weather.forecast.forecastday[1].day.avgtemp_c+"°C";
	
	 
	}
	currentweather();


	const localtimevalue = async()=>{
		let promise = await fetch(url);
		let loctime = await promise.json();

		let time = document.querySelector("#Localtime");
		time.innerText = loctime.location.localtime;

		let tomdate = document.querySelector("#Localtime2");
		tomdate.innerText = loctime.forecast.forecastday[1].date;
	}
	localtimevalue();

//printing highlow temp
 const highlowtemp = async()=>{
	let promise = await(fetch(url));
	let temp = await promise.json();
	//todays highlow
	let highlowtemp = document.querySelector("#highlow");
	highlowtemp.innerText=temp.forecast.forecastday[0].day.maxtemp_c+"/"+ temp.forecast.forecastday[0].day.mintemp_c;
	//tomorrows highlow
	let tom_highlowtemp = document.querySelector("#Tom-highlow");
	tom_highlowtemp.innerText=temp.forecast.forecastday[1].day.maxtemp_c+"/"+ temp.forecast.forecastday[1].day.mintemp_c;

 }
 highlowtemp();
//printing feels like temperature
 const feelsliketemp = async()=>{
 let promise = await (fetch(url));
 let feelstemp = await promise.json();

 let feelsliketemp = document.querySelector("#feels-like");
feelsliketemp.innerText = "Feels like "+feelstemp.current.feelslike_c+"°C";
 
 }
 feelsliketemp();


//printing the weather icon and text
  const currentweathericon = async()=>{
	let promise = await (fetch(url));
	let weathericon = await promise.json();
	//printing today weather icon
    const icon = document.querySelector("#weathericon");
    icon.src = weathericon.current.condition.icon;
//printing tomorrows weather icon
	const icon2 = document.querySelector("#tom-weather-condition");
	icon2.src = weathericon.forecast.forecastday[1].day.condition.icon;

	//printing the text


  }
  currentweathericon();

  const currentweathertext = async()=>{
	let promise = await (fetch(url));
	let weathertext = await promise.json();
	//printing todays condition text
	let text2 = document.querySelector("#conditiontext");
	text2.innerText=weathertext.current.condition.text;
	//printning tomorrows condition text
	let text3 = document.querySelector("#Tom-conditiontext");
	text3.innerText=weathertext.forecast.forecastday[1].day.condition.text;
  }

  currentweathertext();
   
//updating the textbox
   const textbox = async()=>{
	let promise = await fetch(url);
	let textboxtext = await promise.json();
	let textboxvalue = document.querySelector("#textboxinnervalue");

	let Todaydate = (textboxtext.forecast.forecastday[0].date);
	console.log(Todaydate);
   
	function getYesterdayDate() {
		const date = new Date();
		date.setDate(date.getDate() - 1);
		return date.toISOString().split('T')[0];
	}
	let yesterdaydate = getYesterdayDate();
	let promise2 = await fetch(historyWeatherURL(Location,yesterdaydate));
	let yesterday =await promise2.json();
	//yesterday's average temp
	let yes_avg_temp = yesterday.forecast.forecastday[0].day.avgtemp_c;
	console.log(yes_avg_temp);
	//todays average temp
	let tod_avg_temp = textboxtext.forecast.forecastday[0].day.avgtemp_c;
	console.log(tod_avg_temp);
	if(yes_avg_temp>tod_avg_temp){
		textboxvalue.innerText="A little bit cooler than yesterday";
	}else if(yes_avg_temp<tod_avg_temp){
		textboxvalue.innerText="A little bit warmer than yesterday";
	}else{
		textboxvalue.innerText="The temperature is same as yesterday";
	}
	let tom_text=document.querySelector("#tom_innertextvalue");
	let tom_temp = textboxtext.forecast.forecastday[1].day.avgtemp_c;
	console.log(tom_temp);
	if(tom_temp>tod_avg_temp){
		tom_text.innerText="A little bit warmer than today";
	}else if(tom_temp<tod_avg_temp){
		tom_text.innerText="A little bit cooler than yesterday";
	}else{
		tom_text.innerText="The temperature is same as yesterday";
	}

}
textbox();
   


const hourlyweather = async()=>{
	let promise = await (fetch(url));
	let hourtemp = await promise.json();
	
for(let i =0;i<24;i++){
	//printing hourly temp
	//todays hourly temp
	const temp = document.querySelector(`.temperature${i}`);
	temp.innerText=hourtemp.forecast.forecastday[0].hour[i].temp_c +"°C";
	// //tomorrows hourly temp
	// let temp2 = document.querySelector(`.tomtemperature${i}`);
	// temp2.innerText=hourtemp.forecast.forecastday[1].hour[i].temp_c +"°C";

    //todays hourly icon
	const icon = document.querySelector(`.weather-icon${i}`);
	icon.src =hourtemp.forecast.forecastday[0].hour[i].condition.icon;
	//tomorrowa hourly icon
	// const icon2 = document.querySelector(`.tomweather-icon${i}`);
	// icon2.src =hourtemp.forecast.forecastday[1].hour[i].condition.icon;


	const des = document.querySelector(`.description${i}`);
	des.innerText =hourtemp.forecast.forecastday[0].hour[i].condition.text;

	const uvindex = document.querySelector(".uvindex");
	uvindex.innerText=hourtemp.current.uv;


    }
}
hourlyweather();


const tomhourlyweather = async()=>{
	let promise = await (fetch(url));
	let hourtemp2 = await promise.json();
	
for(let i =0;i<24;i++){
	//printing hourly temp
	//todays hourly temp
	
	// //tomorrows hourly temp
	let temp2 = document.querySelector(`.tomtemperature${i}`);
	temp2.innerText=hourtemp2.forecast.forecastday[1].hour[i].temp_c +"°C";

	//tomorrowa hourly icon
	let icon2 = document.querySelector(`.tomweathericon${i}`);
	icon2.src =hourtemp2.forecast.forecastday[1].hour[i].condition.icon;


	// const des = document.querySelector(`.description${i}`);
	// des.innerText =hourtemp.forecast.forecastday[0].hour[i].condition.text;

	// const uvindex = document.querySelector(".uvindex");
	// uvindex.innerText=hourtemp.current.uv;


    }
}
tomhourlyweather();


    const extrainfo = async()=>{
	let promise = await fetch(url);
	let extinfo = await promise.json();

	const uvindex = document.querySelector(".uvindex");
	uvindex.innerText=extinfo.current.uv;
	const uvtext = document.querySelector("#msg");
	if(uvindex.innerText>=0&&uvindex.innerText<=2){
		uvtext.innerText="Very Weak";
	}else if( uvindex.innerText>=3 && uvindex.innerText<=5 ){
		uvtext.innerText="Moderate";
	}else{
		uvtext.innerText="Strong";
	}

	const uvindex2 = document.querySelector(".uvindex_2");
	uvindex2.innerText=extinfo.forecast.forecastday[1].day.uv;
	const uvtext2 = document.querySelector("#msg2");
	if(uvindex2.innerText>=0&&uvindex2.innerText<=2){
		uvtext2.innerText="Very Weak";
	}else if( uvindex2.innerText>=3 && uvindex2.innerText<=5 ){
		uvtext2.innerText="Moderate";
	}else{
		uvtext2.innerText="Strong";
	}


	const humidity_value = document.querySelector("#humidityvalue");
	humidity_value.innerText = extinfo.current.humidity+"%";

	const humidity_value2 = document.querySelector("#humidityvalue2");
	humidity_value2.innerText = extinfo.forecast.forecastday[1].day.avghumidity+"%";


    
	const air_pressure = document.querySelector("#actual-value");
	air_pressure.innerText = extinfo.current.pressure_mb;
	const air_pressure2 = document.querySelector("#actual-value2");
	air_pressure2.innerText = extinfo.forecast.forecastday[1].hour[0].pressure_mb;

	const visibility_value = document.querySelector("#vac-value");
	visibility_value.innerText = extinfo.current.vis_km;

	const visibility_value2 = document.querySelector("#vac-value2");
	visibility_value2.innerText = extinfo.forecast.forecastday[1].day.avgvis_km;


    }
	extrainfo();
	

	const sunrise_set_time = async()=>{
		let promise = await fetch(url);
		let suntime = await promise.json();
		let sunvalue = document.querySelector("#risetime");
		sunvalue.innerText = suntime.forecast.forecastday[0].astro.sunrise;

		let sunvalue2 = document.querySelector("#settime");
		sunvalue2.innerText = suntime.forecast.forecastday[0].astro.sunset;

		let sunvalue11 = document.querySelector("#risetime11");
		sunvalue11.innerText = suntime.forecast.forecastday[1].astro.sunrise;

		let sunvalue22 = document.querySelector("#settime22");
		sunvalue22.innerText = suntime.forecast.forecastday[1].astro.sunset;
	}
	sunrise_set_time();



	document.addEventListener("DOMContentLoaded", () => {
		// Select all place elements
		const places = document.querySelectorAll('#dropdown-products a');
		
		places.forEach(place => {
			place.addEventListener("click", (event) => {
				event.preventDefault(); // Prevent the default action of the link
				console.log(event.target.innerText);
				Location= event.target.innerText;
				 // Print the inner text of the clicked element

				 const url =`https://api.weatherapi.com/v1/forecast.json?key=33b6168723354c638ac62553242805&q=${Location}&days=2&aqi=no&alerts=no`;
const historyWeatherURL = (location, date) => `https://api.weatherapi.com/v1/history.json?key=33b6168723354c638ac62553242805&q=${location}&dt=${date}`;
//set and prnting current temparature
const currentweather = async()=>{
	let promise = await fetch(url);
	console.log(promise);
	let weather = await promise.json();
	//todays curretn temp
	let currenttemp = document.querySelector(".current-temp");
	currenttemp.innerText = weather.current.temp_c+"°C";
	console.log(currenttemp.innerText);
	//todays place
	let place =document.querySelector(".place");
     place.innerText=weather.location.name;
	//tomorrows place
	 let place2 =document.querySelector(".place2");
     place2.innerText=weather.location.name;

	 //tomorrowa average temp
	 let tomorrowtemp = document.querySelector(".Avg-temp");
	tomorrowtemp.innerText = weather.forecast.forecastday[1].day.avgtemp_c+"°C";
	
	 
	}
	currentweather();
//printing highlow temp
 const highlowtemp = async()=>{
	let promise = await(fetch(url));
	let temp = await promise.json();
	//todays highlow
	let highlowtemp = document.querySelector("#highlow");
	highlowtemp.innerText=temp.forecast.forecastday[0].day.maxtemp_c+"/"+ temp.forecast.forecastday[0].day.mintemp_c;
	//tomorrows highlow
	let tom_highlowtemp = document.querySelector("#Tom-highlow");
	tom_highlowtemp.innerText=temp.forecast.forecastday[1].day.maxtemp_c+"/"+ temp.forecast.forecastday[1].day.mintemp_c;

 }
 highlowtemp();
//printing feels like temperature
 const feelsliketemp = async()=>{
 let promise = await (fetch(url));
 let feelstemp = await promise.json();

 let feelsliketemp = document.querySelector("#feels-like");
feelsliketemp.innerText = "Feels like "+feelstemp.current.feelslike_c+"°C";
 
 }
 feelsliketemp();


//printing the weather icon and text
  const currentweathericon = async()=>{
	let promise = await (fetch(url));
	let weathericon = await promise.json();
	//printing today weather icon
    const icon = document.querySelector("#weathericon");
    icon.src = weathericon.current.condition.icon;
//printing tomorrows weather icon
	const icon2 = document.querySelector("#tom-weather-condition");
	icon2.src = weathericon.forecast.forecastday[1].day.condition.icon;

	//printing the text


  }
  currentweathericon();

  const currentweathertext = async()=>{
	let promise = await (fetch(url));
	let weathertext = await promise.json();
	//printing todays condition text
	let text2 = document.querySelector("#conditiontext");
	text2.innerText=weathertext.current.condition.text;
	//printning tomorrows condition text
	let text3 = document.querySelector("#Tom-conditiontext");
	text3.innerText=weathertext.forecast.forecastday[1].day.condition.text;
  }

  currentweathertext();
   
//updating the textbox
   const textbox = async()=>{
	let promise = await fetch(url);
	let textboxtext = await promise.json();
	let textboxvalue = document.querySelector("#textboxinnervalue");

	let Todaydate = (textboxtext.forecast.forecastday[0].date);
	console.log(Todaydate);
   
	function getYesterdayDate() {
		const date = new Date();
		date.setDate(date.getDate() - 1);
		return date.toISOString().split('T')[0];
	}
	let yesterdaydate = getYesterdayDate();
	let promise2 = await fetch(historyWeatherURL(Location,yesterdaydate));
	let yesterday =await promise2.json();
	//yesterday's average temp
	let yes_avg_temp = yesterday.forecast.forecastday[0].day.avgtemp_c;
	console.log(yes_avg_temp);
	//todays average temp
	let tod_avg_temp = textboxtext.forecast.forecastday[0].day.avgtemp_c;
	console.log(tod_avg_temp);
	if(yes_avg_temp>tod_avg_temp){
		textboxvalue.innerText="A little bit cooler than yesterday";
	}else if(yes_avg_temp<tod_avg_temp){
		textboxvalue.innerText="A little bit warmer than yesterday";
	}else{
		textboxvalue.innerText="The temperature is same as yesterday";
	}
	let tom_text=document.querySelector("#tom_innertextvalue");
	let tom_temp = textboxtext.forecast.forecastday[1].day.avgtemp_c;
	console.log(tom_temp);
	if(tom_temp>tod_avg_temp){
		tom_text.innerText="A little bit warmer than today";
	}else if(tom_temp<tod_avg_temp){
		tom_text.innerText="A little bit cooler than yesterday";
	}else{
		tom_text.innerText="The temperature is same as yesterday";
	}

}
textbox();
   


const hourlyweather = async()=>{
	let promise = await (fetch(url));
	let hourtemp = await promise.json();
	
for(let i =0;i<24;i++){
	//printing hourly temp
	//todays hourly temp
	const temp = document.querySelector(`.temperature${i}`);
	temp.innerText=hourtemp.forecast.forecastday[0].hour[i].temp_c +"°C";
	// //tomorrows hourly temp
	// let temp2 = document.querySelector(`.tomtemperature${i}`);
	// temp2.innerText=hourtemp.forecast.forecastday[1].hour[i].temp_c +"°C";

    //todays hourly icon
	const icon = document.querySelector(`.weather-icon${i}`);
	icon.src =hourtemp.forecast.forecastday[0].hour[i].condition.icon;
	//tomorrowa hourly icon
	// const icon2 = document.querySelector(`.tomweather-icon${i}`);
	// icon2.src =hourtemp.forecast.forecastday[1].hour[i].condition.icon;


	const des = document.querySelector(`.description${i}`);
	des.innerText =hourtemp.forecast.forecastday[0].hour[i].condition.text;

	const uvindex = document.querySelector(".uvindex");
	uvindex.innerText=hourtemp.current.uv;


    }
}
hourlyweather();


const tomhourlyweather = async()=>{
	let promise = await (fetch(url));
	let hourtemp2 = await promise.json();
	
for(let i =0;i<24;i++){
	//printing hourly temp
	//todays hourly temp
	
	// //tomorrows hourly temp
	let temp2 = document.querySelector(`.tomtemperature${i}`);
	temp2.innerText=hourtemp2.forecast.forecastday[1].hour[i].temp_c +"°C";

	//tomorrowa hourly icon
	let icon2 = document.querySelector(`.tomweathericon${i}`);
	icon2.src =hourtemp2.forecast.forecastday[1].hour[i].condition.icon;


	const des2 = document.querySelector(`.tomdescription${i}`);
	des2.innerText =hourtemp2.forecast.forecastday[1].hour[i].condition.text;

	// const uvindex = document.querySelector(".uvindex");
	// uvindex.innerText=hourtemp.current.uv;


    }
}
tomhourlyweather();


    const extrainfo = async()=>{
	let promise = await fetch(url);
	let extinfo = await promise.json();

	const uvindex = document.querySelector(".uvindex");
	uvindex.innerText=extinfo.current.uv;
	const uvtext = document.querySelector("#msg");
	if(uvindex.innerText>=0&&uvindex.innerText<=2){
		uvtext.innerText="Very Weak";
	}else if( uvindex.innerText>=3 && uvindex.innerText<=5 ){
		uvtext.innerText="Moderate";
	}else{
		uvtext.innerText="Strong";
	}

	const uvindex2 = document.querySelector(".uvindex_2");
	uvindex2.innerText=extinfo.forecast.forecastday[1].day.uv;
	const uvtext2 = document.querySelector("#msg2");
	if(uvindex2.innerText>=0&&uvindex2.innerText<=2){
		uvtext2.innerText="Very Weak";
	}else if( uvindex2.innerText>=3 && uvindex2.innerText<=5 ){
		uvtext2.innerText="Moderate";
	}else{
		uvtext2.innerText="Strong";
	}


	const humidity_value = document.querySelector("#humidityvalue");
	humidity_value.innerText = extinfo.current.humidity+"%";

	const humidity_value2 = document.querySelector("#humidityvalue2");
	humidity_value2.innerText = extinfo.forecast.forecastday[1].day.avghumidity+"%";


    
	const air_pressure = document.querySelector("#actual-value");
	air_pressure.innerText = extinfo.current.pressure_mb;
	const air_pressure2 = document.querySelector("#actual-value2");
	air_pressure2.innerText = extinfo.forecast.forecastday[1].hour[0].pressure_mb;

	const visibility_value = document.querySelector("#vac-value");
	visibility_value.innerText = extinfo.current.vis_km;

	const visibility_value2 = document.querySelector("#vac-value2");
	visibility_value2.innerText = extinfo.forecast.forecastday[1].day.avgvis_km;


    }
	extrainfo();
	

	const sunrise_set_time = async()=>{
		let promise = await fetch(url);
		let suntime = await promise.json();
		let sunvalue = document.querySelector("#risetime");
		sunvalue.innerText = suntime.forecast.forecastday[0].astro.sunrise;

		let sunvalue2 = document.querySelector("#settime");
		sunvalue2.innerText = suntime.forecast.forecastday[0].astro.sunset;

		let sunvalue11 = document.querySelector("#risetime11");
		sunvalue11.innerText = suntime.forecast.forecastday[1].astro.sunrise;

		let sunvalue22 = document.querySelector("#settime22");
		sunvalue22.innerText = suntime.forecast.forecastday[1].astro.sunset;
	}
	sunrise_set_time();
		});
		});
	});
	
	



document.querySelector('.submit').addEventListener("click", function() {
     Location = document.querySelector('#searchbar').value;
	const url =`https://api.weatherapi.com/v1/forecast.json?key=33b6168723354c638ac62553242805&q=${Location}&days=2&aqi=no&alerts=no`;
//set and prnting current temparature
const currentweather = async()=>{
	let promise = await fetch(url);
	console.log(promise);
	let weather = await promise.json();
	//todays curretn temp
	let currenttemp = document.querySelector(".current-temp");
	currenttemp.innerText = weather.current.temp_c+"°C";
	console.log(currenttemp.innerText);
	//todays place
	let place =document.querySelector(".place");
     place.innerText=weather.location.name;
	//tomorrows place
	 let place2 =document.querySelector(".place2");
     place2.innerText=weather.location.name;

	 //tomorrowa average temp
	 let tomorrowtemp = document.querySelector(".Avg-temp");
	tomorrowtemp.innerText = weather.forecast.forecastday[1].day.avgtemp_c+"°C";
	
	 
	}
	currentweather();
//printing highlow temp
 const highlowtemp = async()=>{
	let promise = await(fetch(url));
	let temp = await promise.json();
	//todays highlow
	let highlowtemp = document.querySelector("#highlow");
	highlowtemp.innerText=temp.forecast.forecastday[0].day.maxtemp_c+"/"+ temp.forecast.forecastday[0].day.mintemp_c;
	//tomorrows highlow
	let tom_highlowtemp = document.querySelector("#Tom-highlow");
	tom_highlowtemp.innerText=temp.forecast.forecastday[1].day.maxtemp_c+"/"+ temp.forecast.forecastday[1].day.mintemp_c;

 }
 highlowtemp();
//printing feels like temperature
 const feelsliketemp = async()=>{
 let promise = await (fetch(url));
 let feelstemp = await promise.json();

 let feelsliketemp = document.querySelector("#feels-like");
feelsliketemp.innerText = "Feels like "+feelstemp.current.feelslike_c+"°C";
 
 }
 feelsliketemp();


//printing the weather icon and text
  const currentweathericon = async()=>{
	let promise = await (fetch(url));
	let weathericon = await promise.json();
	//printing today weather icon
    const icon = document.querySelector("#weathericon");
    icon.src = weathericon.current.condition.icon;
//printing tomorrows weather icon
	const icon2 = document.querySelector("#tom-weather-condition");
	icon2.src = weathericon.forecast.forecastday[1].day.condition.icon;

	//printing the text


  }
  currentweathericon();

  const currentweathertext = async()=>{
	let promise = await (fetch(url));
	let weathertext = await promise.json();
	//printing todays condition text
	let text2 = document.querySelector("#conditiontext");
	text2.innerText=weathertext.current.condition.text;
	//printning tomorrows condition text
	let text3 = document.querySelector("#Tom-conditiontext");
	text3.innerText=weathertext.forecast.forecastday[1].day.condition.text;
  }

  currentweathertext();
   
//updating the textbox
   const textbox = async()=>{
	let promise = await fetch(url);
	let textboxtext = await promise.json();
	let textboxvalue = document.querySelector("#textboxinnervalue");

	let Todaydate = (textboxtext.forecast.forecastday[0].date);
	console.log(Todaydate);
   
	function getYesterdayDate() {
		const date = new Date();
		date.setDate(date.getDate() - 1);
		return date.toISOString().split('T')[0];
	}
	let yesterdaydate = getYesterdayDate();
	let promise2 = await fetch(historyWeatherURL(Location,yesterdaydate));
	let yesterday =await promise2.json();
	//yesterday's average temp
	let yes_avg_temp = yesterday.forecast.forecastday[0].day.avgtemp_c;
	console.log(yes_avg_temp);
	//todays average temp
	let tod_avg_temp = textboxtext.forecast.forecastday[0].day.avgtemp_c;
	console.log(tod_avg_temp);
	if(yes_avg_temp>tod_avg_temp){
		textboxvalue.innerText="A little bit cooler than yesterday";
	}else if(yes_avg_temp<tod_avg_temp){
		textboxvalue.innerText="A little bit warmer than yesterday";
	}else{
		textboxvalue.innerText="The temperature is same as yesterday";
	}
	let tom_text=document.querySelector("#tom_innertextvalue");
	let tom_temp = textboxtext.forecast.forecastday[1].day.avgtemp_c;
	console.log(tom_temp);
	if(tom_temp>tod_avg_temp){
		tom_text.innerText="A little bit warmer than today";
	}else if(tom_temp<tod_avg_temp){
		tom_text.innerText="A little bit cooler than yesterday";
	}else{
		tom_text.innerText="The temperature is same as yesterday";
	}

}
textbox();
   


const hourlyweather = async()=>{
	let promise = await (fetch(url));
	let hourtemp = await promise.json();
	
for(let i =0;i<24;i++){
	//printing hourly temp
	//todays hourly temp
	const temp = document.querySelector(`.temperature${i}`);
	temp.innerText=hourtemp.forecast.forecastday[0].hour[i].temp_c +"°C";

	// //tomorrows hourly temp
	// let temp2 = document.querySelector(`.tomtemperature${i}`);
	// temp2.innerText=hourtemp.forecast.forecastday[1].hour[i].temp_c +"°C";

    //todays hourly icon
	const icon = document.querySelector(`.weather-icon${i}`);
	icon.src =hourtemp.forecast.forecastday[0].hour[i].condition.icon;
	//tomorrow hourly icon
	// const icon2 = document.querySelector(`.tomweather-icon${i}`);
	// icon2.src =hourtemp.forecast.forecastday[1].hour[i].condition.icon;


	const des = document.querySelector(`.description${i}`);
	des.innerText =hourtemp.forecast.forecastday[0].hour[i].condition.text;

	const uvindex = document.querySelector(".uvindex");
	uvindex.innerText=hourtemp.current.uv;


    }
}
hourlyweather();


const tomhourlyweather = async()=>{
	let promise = await (fetch(url));
	let hourtemp2 = await promise.json();
	
for(let i =0;i<24;i++){
	//printing hourly temp
	//todays hourly temp
	
	// //tomorrows hourly temp
	let temp2 = document.querySelector(`.tomtemperature${i}`);
	temp2.innerText=hourtemp2.forecast.forecastday[1].hour[i].temp_c +"°C";

	//tomorrowa hourly icon
	let icon2 = document.querySelector(`.tomweathericon${i}`);
	icon2.src =hourtemp2.forecast.forecastday[1].hour[i].condition.icon;


	let tomdes = document.querySelector(`.tomd${i}`);
	tomdes.innerText =hourtemp2.forecast.forecastday[1].hour[i].condition.text;

	// const uvindex = document.querySelector(".uvindex");
	// uvindex.innerText=hourtemp.current.uv;


    }
}
tomhourlyweather();


    const extrainfo = async()=>{
	let promise = await fetch(url);
	let extinfo = await promise.json();

	const uvindex = document.querySelector(".uvindex");
	uvindex.innerText=extinfo.current.uv;
	const uvtext = document.querySelector("#msg");
	if(uvindex.innerText>=0&&uvindex.innerText<=2){
		uvtext.innerText="Very Weak";
	}else if( uvindex.innerText>=3 && uvindex.innerText<=5 ){
		uvtext.innerText="Moderate";
	}else{
		uvtext.innerText="Strong";
	}

	const uvindex2 = document.querySelector(".uvindex_2");
	uvindex2.innerText=extinfo.forecast.forecastday[1].day.uv;
	const uvtext2 = document.querySelector("#msg2");
	if(uvindex2.innerText>=0&&uvindex2.innerText<=2){
		uvtext2.innerText="Very Weak";
	}else if( uvindex2.innerText>=3 && uvindex2.innerText<=5 ){
		uvtext2.innerText="Moderate";
	}else{
		uvtext2.innerText="Strong";
	}


	const humidity_value = document.querySelector("#humidityvalue");
	humidity_value.innerText = extinfo.current.humidity+"%";

	const humidity_value2 = document.querySelector("#humidityvalue2");
	humidity_value2.innerText = extinfo.forecast.forecastday[1].day.avghumidity+"%";


    
	const air_pressure = document.querySelector("#actual-value");
	air_pressure.innerText = extinfo.current.pressure_mb;
	const air_pressure2 = document.querySelector("#actual-value2");
	air_pressure2.innerText = extinfo.forecast.forecastday[1].hour[0].pressure_mb;

	const visibility_value = document.querySelector("#vac-value");
	visibility_value.innerText = extinfo.current.vis_km;

	const visibility_value2 = document.querySelector("#vac-value2");
	visibility_value2.innerText = extinfo.forecast.forecastday[1].day.avgvis_km;


    }
	extrainfo();
	

	const sunrise_set_time = async()=>{
		let promise = await fetch(url);
		let suntime = await promise.json();
		let sunvalue = document.querySelector("#risetime");
		sunvalue.innerText = suntime.forecast.forecastday[0].astro.sunrise;

		let sunvalue2 = document.querySelector("#settime");
		sunvalue2.innerText = suntime.forecast.forecastday[0].astro.sunset;

		let sunvalue11 = document.querySelector("#risetime11");
		sunvalue11.innerText = suntime.forecast.forecastday[1].astro.sunrise;

		let sunvalue22 = document.querySelector("#settime22");
		sunvalue22.innerText = suntime.forecast.forecastday[1].astro.sunset;
	}
	sunrise_set_time();


	const localtimevalue = async()=>{
		let promise = await fetch(url);
		let loctime = await promise.json();

		let time = document.querySelector("#Localtime");
		time.innerText = loctime.location.localtime;

		let tomdate = document.querySelector("#Localtime2");
		tomdate.innerText = loctime.forecast.forecastday[1].date;
	}
	localtimevalue();


	
// 	let example = weathertext.forecast.forecastday[0].hour[0].temp_c;
});
let place = document.querySelector(".place");
place.addEventListener("click",()=>{
	let placeName = place.innerText;
	const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeName)}`;
	window.open(googleMapsUrl);
});
let place2 = document.querySelector(".place2");
place2.addEventListener("click",()=>{
	let placeName = place.innerText;
	const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeName)}`;
	window.open(googleMapsUrl);
});

let msgbutton = document.querySelector("#msgbtn");
msgbutton.addEventListener("click",()=>{
	msgbutton.innerText ="Submitted!";
	msgbutton.style.border ="3px solid  blue";
	msgbutton.style.borderRadius = "6px";
	msgbutton.style.color="navy";
	msgbutton.style.fontWeight="bold";


});