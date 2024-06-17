let Location = "Kolkata";
const api = `https://api.weatherapi.com/v1/forecast.json?key=d5e8973fd6824596b2a43656241306&q=${Location}&days=10&aqi=no&alerts=no`;
const forecastdata = async()=>{
    let promises =await fetch(api);
    let locationinfo = await promises.json();
    //printing the actual location
    let actualLocation = document.querySelector("#actuallocation");
    actualLocation.innerText =locationinfo.location.name+","+locationinfo.location.region+","+locationinfo.location.country;

    let actualLocaltime = document.querySelector("#localtime");
    actualLocaltime.innerText =locationinfo.location.localtime;

    let actualLocaltionimage = document.querySelector("#locationimage");
    actualLocaltionimage.src = locationinfo.current.condition.icon;

    let actualtemp = document.querySelector("#temp");
    actualtemp.innerText =locationinfo.current.temp_c+"°C";
     

    let actualfeel = document.querySelector("#feelvalue");
    actualfeel.innerText =locationinfo.current.feelslike_c+"°C";

    let lastupdatevalue = document.querySelector("#lastupdate");
    lastupdatevalue.innerText = "Last updated: "+locationinfo.current.last_updated;

    for(let i =0;i<10;i++){
        let datevalue = document.querySelector(`.date${i}`);
        datevalue.innerText = locationinfo.forecast.forecastday[i].date;

        let daytemp = document.querySelector(`#daytemp${i}`);
        daytemp.innerText = locationinfo.forecast.forecastday[i].day.maxtemp_c+"°C";

        let nighttemp = document.querySelector(`#nighttemp${i}`);
        nighttemp.innerText = locationinfo.forecast.forecastday[i].day.mintemp_c+"°C";

        let dayicon = document.querySelector(`#dayicon${i}`);
        dayicon.src =locationinfo.forecast.forecastday[i].day.condition.icon;

        let nighticon = document.querySelector(`#nighticon${i}`);
        nighticon.src =locationinfo.forecast.forecastday[i].hour[20].condition.icon;

        let dayfeelvalue = document.querySelector(`#dayfeelvalue${i}`);
        dayfeelvalue.innerText =locationinfo.forecast.forecastday[i].hour[12].feelslike_c+"°C";

        let nightfeelvalue = document.querySelector(`#nightfeelvalue${i}`);
        nightfeelvalue.innerText = locationinfo.forecast.forecastday[i].hour[20].feelslike_c+"°C";


        let daywind = document.querySelector(`#daywindvalue${i}`);
        daywind.innerText = locationinfo.forecast.forecastday[i].hour[11].wind_kph+"km/h";

        let nightwind = document.querySelector(`#nightwindvalue${i}`);
        nightwind.innerText = locationinfo.forecast.forecastday[i].hour[21].wind_kph+"km/h";


        let dayHumidity = document.querySelector(`#dayHumidityvalue${i}`);
        dayHumidity.innerText = locationinfo.forecast.forecastday[i].hour[14].humidity+"%";
        let nightHumidity = document.querySelector(`#nightHumidityvalue${i}`);
        nightHumidity.innerText = locationinfo.forecast.forecastday[i].hour[20].humidity+"%";


        let dayVisibility = document.querySelector(`#dayVisibilityvalue${i}`);
        dayVisibility.innerText = locationinfo.forecast.forecastday[i].hour[12].vis_km+"km";

        let nightVisibility = document.querySelector(`#nightVisibilityvalue${i}`);
        nightVisibility.innerText = locationinfo.forecast.forecastday[i].hour[20].vis_km+"km";

        let daypop =  document.querySelector(`#daypop${i}`);
        daypop.innerText = locationinfo.forecast.forecastday[i].hour[14].cloud+"%";

        let nightpop =  document.querySelector(`#nightpop${i}`);
        nightpop.innerText = locationinfo.forecast.forecastday[i].hour[21].cloud+"%";

    }

}
forecastdata();

document.querySelector('.submit').addEventListener("click", function() {
    Location = document.querySelector('#searchbar').value;
   const api =`https://api.weatherapi.com/v1/forecast.json?key=d5e8973fd6824596b2a43656241306&q=${Location}&days=10&aqi=no&alerts=no`;

   const forecastdata = async()=>{
    let promises =await fetch(api);
    let locationinfo = await promises.json();
    //printing the actual location
    let actualLocation = document.querySelector("#actuallocation");
    actualLocation.innerText =locationinfo.location.name+","+locationinfo.location.region+","+locationinfo.location.country;

    let actualLocaltime = document.querySelector("#localtime");
    actualLocaltime.innerText =locationinfo.location.localtime;

    let actualLocaltionimage = document.querySelector("#locationimage");
    actualLocaltionimage.src = locationinfo.current.condition.icon;

    let actualtemp = document.querySelector("#temp");
    actualtemp.innerText =locationinfo.current.temp_c+"°C";
     

    let actualfeel = document.querySelector("#feelvalue");
    actualfeel.innerText =locationinfo.current.feelslike_c+"°C";

    let lastupdatevalue = document.querySelector("#lastupdate");
    lastupdatevalue.innerText = "Last updated: "+locationinfo.current.last_updated;

    for(let i =0;i<10;i++){
        let datevalue = document.querySelector(`.date${i}`);
        datevalue.innerText = locationinfo.forecast.forecastday[i].date;

        let daytemp = document.querySelector(`#daytemp${i}`);
        daytemp.innerText = locationinfo.forecast.forecastday[i].day.maxtemp_c+"°C";

        let nighttemp = document.querySelector(`#nighttemp${i}`);
        nighttemp.innerText = locationinfo.forecast.forecastday[i].day.mintemp_c+"°C";

        let dayicon = document.querySelector(`#dayicon${i}`);
        dayicon.src =locationinfo.forecast.forecastday[i].day.condition.icon;

        let nighticon = document.querySelector(`#nighticon${i}`);
        nighticon.src =locationinfo.forecast.forecastday[i].hour[20].condition.icon;

        let dayfeelvalue = document.querySelector(`#dayfeelvalue${i}`);
        dayfeelvalue.innerText =locationinfo.forecast.forecastday[i].hour[12].feelslike_c+"°C";

        let nightfeelvalue = document.querySelector(`#nightfeelvalue${i}`);
        nightfeelvalue.innerText = locationinfo.forecast.forecastday[i].hour[20].feelslike_c+"°C";


        let daywind = document.querySelector(`#daywindvalue${i}`);
        daywind.innerText = locationinfo.forecast.forecastday[i].hour[11].wind_kph+"km/h";

        let nightwind = document.querySelector(`#nightwindvalue${i}`);
        nightwind.innerText = locationinfo.forecast.forecastday[i].hour[21].wind_kph+"km/h";


        let dayHumidity = document.querySelector(`#dayHumidityvalue${i}`);
        dayHumidity.innerText = locationinfo.forecast.forecastday[i].hour[14].humidity+"%";
        let nightHumidity = document.querySelector(`#nightHumidityvalue${i}`);
        nightHumidity.innerText = locationinfo.forecast.forecastday[i].hour[20].humidity+"%";


        let dayVisibility = document.querySelector(`#dayVisibilityvalue${i}`);
        dayVisibility.innerText = locationinfo.forecast.forecastday[i].hour[12].vis_km+"km";

        let nightVisibility = document.querySelector(`#nightVisibilityvalue${i}`);
        nightVisibility.innerText = locationinfo.forecast.forecastday[i].hour[20].vis_km+"km";

        let daypop =  document.querySelector(`#daypop${i}`);
        daypop.innerText = locationinfo.forecast.forecastday[i].hour[14].cloud+"%";

        let nightpop =  document.querySelector(`#nightpop${i}`);
        nightpop.innerText = locationinfo.forecast.forecastday[i].hour[21].cloud+"%";

    }

}
forecastdata();
});

document.addEventListener("DOMContentLoaded", () => {
    // Select all place elements
    const places = document.querySelectorAll('#dropdown-products a');
    
    places.forEach(place => {
        place.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent the default action of the link
            console.log(event.target.innerText);
             let Location= event.target.innerText;
             // Print the inner text of the clicked element

             const api =`https://api.weatherapi.com/v1/forecast.json?key=d5e8973fd6824596b2a43656241306&q=${Location}&days=10&aqi=no&alerts=n`;

             const forecastdata = async()=>{
                let promises =await fetch(api);
                let locationinfo = await promises.json();
                //printing the actual location
                let actualLocation = document.querySelector("#actuallocation");
                actualLocation.innerText =locationinfo.location.name+","+locationinfo.location.region+","+locationinfo.location.country;
            
                let actualLocaltime = document.querySelector("#localtime");
                actualLocaltime.innerText =locationinfo.location.localtime;
            
                let actualLocaltionimage = document.querySelector("#locationimage");
                actualLocaltionimage.src = locationinfo.current.condition.icon;
            
                let actualtemp = document.querySelector("#temp");
                actualtemp.innerText =locationinfo.current.temp_c+"°C";
                 
            
                let actualfeel = document.querySelector("#feelvalue");
                actualfeel.innerText =locationinfo.current.feelslike_c+"°C";
            
                let lastupdatevalue = document.querySelector("#lastupdate");
                lastupdatevalue.innerText = "Last updated: "+locationinfo.current.last_updated;
            
                for(let i =0;i<10;i++){
                    let datevalue = document.querySelector(`.date${i}`);
                    datevalue.innerText = locationinfo.forecast.forecastday[i].date;
            
                    let daytemp = document.querySelector(`#daytemp${i}`);
                    daytemp.innerText = locationinfo.forecast.forecastday[i].day.maxtemp_c+"°C";
            
                    let nighttemp = document.querySelector(`#nighttemp${i}`);
                    nighttemp.innerText = locationinfo.forecast.forecastday[i].day.mintemp_c+"°C";
            
                    let dayicon = document.querySelector(`#dayicon${i}`);
                    dayicon.src =locationinfo.forecast.forecastday[i].day.condition.icon;
            
                    let nighticon = document.querySelector(`#nighticon${i}`);
                    nighticon.src =locationinfo.forecast.forecastday[i].hour[20].condition.icon;
            
                    let dayfeelvalue = document.querySelector(`#dayfeelvalue${i}`);
                    dayfeelvalue.innerText =locationinfo.forecast.forecastday[i].hour[12].feelslike_c+"°C";
            
                    let nightfeelvalue = document.querySelector(`#nightfeelvalue${i}`);
                    nightfeelvalue.innerText = locationinfo.forecast.forecastday[i].hour[20].feelslike_c+"°C";
            
            
                    let daywind = document.querySelector(`#daywindvalue${i}`);
                    daywind.innerText = locationinfo.forecast.forecastday[i].hour[11].wind_kph+"km/h";
            
                    let nightwind = document.querySelector(`#nightwindvalue${i}`);
                    nightwind.innerText = locationinfo.forecast.forecastday[i].hour[21].wind_kph+"km/h";
            
            
                    let dayHumidity = document.querySelector(`#dayHumidityvalue${i}`);
                    dayHumidity.innerText = locationinfo.forecast.forecastday[i].hour[14].humidity+"%";
                    let nightHumidity = document.querySelector(`#nightHumidityvalue${i}`);
                    nightHumidity.innerText = locationinfo.forecast.forecastday[i].hour[20].humidity+"%";
            
            
                    let dayVisibility = document.querySelector(`#dayVisibilityvalue${i}`);
                    dayVisibility.innerText = locationinfo.forecast.forecastday[i].hour[12].vis_km+"km";
            
                    let nightVisibility = document.querySelector(`#nightVisibilityvalue${i}`);
                    nightVisibility.innerText = locationinfo.forecast.forecastday[i].hour[20].vis_km+"km";
            
                    let daypop =  document.querySelector(`#daypop${i}`);
                    daypop.innerText = locationinfo.forecast.forecastday[i].hour[14].cloud+"%";
            
                    let nightpop =  document.querySelector(`#nightpop${i}`);
                    nightpop.innerText = locationinfo.forecast.forecastday[i].hour[21].cloud+"%";
            
                }
            
            }
            forecastdata();


//set and prnting current temparature
});
});
});

let msgbutton = document.querySelector("#msgbtn");
msgbutton.addEventListener("click",()=>{
	msgbutton.innerText ="Submitted!";
	msgbutton.style.border ="3px solid  blue";
	msgbutton.style.borderRadius = "6px";
	msgbutton.style.color="navy";
	msgbutton.style.fontWeight="bold";


});