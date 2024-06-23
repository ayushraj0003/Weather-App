let weather = {
    "apikey": "YOUR_API_KEY",
    fetchWeather : function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apikey)
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        if(description=="light rain"){
            document.body.style.backgroundImage = "url('https://myrepublica.nagariknetwork.com/uploads/media/rain_20210802140558.jpg')"
        }
        
        else if(description=="haze"){
            document.body.style.backgroundImage = "url('https://eoimages.gsfc.nasa.gov/images/imagerecords/145000/145827/globeindiasmog.jpg')"
        
        }else{
            document.body.style.backgroundImage = "url('https://cdn.downtoearth.org.in/library/large/2020-12-16/0.83194200_1608097640_climate.jpg')"
        }
        
    },

    search : function() {
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".searchbar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("delhi");


