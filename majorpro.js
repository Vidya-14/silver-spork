var weather = {
    apiKey: "247b336802ade41f36c6b53d5442d7d9",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q= " + city + "&appid=" + this.apiKey + "&units=metric")
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                
            }
            
            
    
    },

   
    displayWeather: function (data) {
        const { name } = data;
        //const { icon, description } = data.weather[0];
        const { temp, humidity } =data.main;
        const { speed } = data.wind;
        const weatherIcon = document.querySelector(".weather-icon");
        console.log(name,weatherIcon,temp,humidity,speed);
        document.querySelector(".city-name").innerText = name;
        document.querySelector(".temp").innerText = temp + "°C";
        //document.querySelector(".weather-icon").setAttribute("src", "images/" + icon + ".png");
        document.querySelector(".humidity").innerText = humidity + "%";
        document.querySelector(".wind").innerText = speed + "km/hr";

        if(data.weather[0].main =="Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main =="Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main =="Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main =="Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main =="Mist"){
            weatherIcon.src = "images/mist.png";
        }
        
        document.querySelector(".weather").style.display = "block";


    },
    
    
};
document.getElementById("weatherBtn").addEventListener("click", function() {
    var city = document.getElementById("cityInput").value;
    weather.fetchWeather(city);
  });
