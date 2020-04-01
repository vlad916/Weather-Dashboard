
var btnSearch = document.querySelector("#btnSearch");
var city = document.querySelector(".city");
var headerDate = document.querySelector(".date");
var lat;
var lon;
var APIKeyOpenCage = "6a0d28f39a8041e39cbf8227e8c4bd32";
// moment.js format
var m = moment();
var showDate = m.format("MM/DD/YY");
// Displays the date on each day in the 5-day forecast
var firstDayForecast = m.add(1, "day").format("MM/DD/YY");
var dayFirst = document.querySelector(".dayFirst");
dayFirst.textContent = firstDayForecast;
var secondDayForecast = m.add(1, "days").format("MM/DD/YY");
var daySecond = document.querySelector(".daySecond");
daySecond.textContent = secondDayForecast;
var thirdDayForecast = m.add(1, "days").format("MM/DD/YY");
var dayThird = document.querySelector(".dayThird");
dayThird.textContent = thirdDayForecast;
var fourthDayForecast = m.add(1, "days").format("MM/DD/YY");
var dayFourth = document.querySelector(".dayFourth");
dayFourth.textContent = fourthDayForecast;
var fifthDayForecast = m.add(1, "days").format("MM/DD/YY");
var dayFifth = document.querySelector(".dayFifth");
dayFifth.textContent = fifthDayForecast;

// Displays the current date on the header
headerDate.textContent = showDate;
// Click function to show weather data
btnSearch.addEventListener("click", function () {
    event.preventDefault();

    var cityName = document.getElementById("search-input").value;
    console.log(cityName);
    city.textContent = cityName + " |   ";

    // URL's for the weather API (current and 5-day forecast)
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=6db15ea629a8fe04cc16aeecc303ade4";
    var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&cnt=5&units=imperial&appid=6db15ea629a8fe04cc16aeecc303ade4";
    // URL for the City coordinates API
    var queryURLLatLng = "https://api.opencagedata.com/geocode/v1/json?q=" + cityName + "&key=" + APIKeyOpenCage;
    // Ajax call for the City Coordinates
    $.ajax({
        url: queryURLLatLng,
        method: "GET"
    })
        .then(function (data) {
            console.log(queryURLLatLng);
            console.log(data);

            lat = data.results[0].geometry.lat;
            lon = data.results[0].geometry.lng;
            // URL for the UV
            var queryURLuV = "https://api.openweathermap.org/data/2.5/uvi?appid=6db15ea629a8fe04cc16aeecc303ade4&lat=" + lat + "&lon=" + lon;
            // Ajax call for the UV Index
            $.ajax({
                url: queryURLuV,
                method: "GET"
            }).then(function (data) {
                console.log(queryURLuV);
                console.log(data);
                var index = document.querySelector(".uvIndex");
                index.textContent = "UV Index: " + data.value;
            });
        });

    // Ajax call for the current weather
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {
        console.log(data);
        // Current Day Forecast 
        var temp = document.querySelector(".temp");
        temp.textContent = "Temperature: " + data.main.temp + " ˚F";
        var wind = document.querySelector(".windSpeed");
        wind.textContent = "Wind Speed: " + data.wind.speed + " MPH";
        var hum = document.querySelector(".humidity");
        hum.textContent = "Humidity: " + data.main.humidity + "%";
        var weather = document.querySelector(".weatherCondition");
        weather.textContent = "Weather: " + data.weather[0].main;
        // Shows the weather icon on the current day
        var icon = document.querySelector('.icon');
        var weatherIconSrc = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
        var weatherImage = document.createElement('img');
        weatherImage.setAttribute('src', weatherIconSrc);
        icon.appendChild(weatherImage);
        // Sets the Local Storage
        localStorage.setItem("cityStorage", cityName);
        var cityStorageSearch = localStorage.getItem("cityStorage");
        var searchHistory = "<button id='searchStored'>" + cityStorageSearch + "</button>";
        $(".cityList").append("<li class = 'list-group-item'>" + searchHistory + "</li>");
    });

    // Ajax call for the 5-day forecast
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (data) {
        // logs all the data needed that will be extracted/use from the object/JSON file 
        console.log(data);
        // First Day Forecast
        var temp = document.querySelector(".temp1");
        temp.textContent = "Temp: " + data.list[0].main.temp + " ˚F";
        var hum = document.querySelector(".humidity1");
        hum.textContent = "Humidity: " + data.list[0].main.humidity + "%";
        // Shows the weather icon on the current day
        var icon = document.querySelector(".icon1");
        var weatherIconSrc1 = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png";
        var weatherImage1 = document.createElement("img");
        weatherImage1.setAttribute("src", weatherIconSrc1);
        icon.appendChild(weatherImage1);
        // Second Day Forecast
        var temp = document.querySelector(".temp2");
        temp.textContent = "Temp: " + data.list[1].main.temp + " ˚F";
        var hum = document.querySelector(".humidity2");
        hum.textContent = "Humidity: " + data.list[1].main.humidity + "%";
        // Shows the weather icon on the current day
        var icon = document.querySelector(".icon2");
        var weatherIconSrc2 = "https://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + ".png";
        var weatherImage2 = document.createElement("img");
        weatherImage2.setAttribute("src", weatherIconSrc2);
        icon.appendChild(weatherImage2);
        // Third Day Forecast
        var temp = document.querySelector(".temp3");
        temp.textContent = "Temp: " + data.list[2].main.temp + " ˚F";
        var hum = document.querySelector(".humidity3");
        hum.textContent = "Humidity: " + data.list[2].main.humidity + "%";
        // Shows the weather icon on the current day
        var icon = document.querySelector(".icon3");
        var weatherIconSrc3 = "https://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + ".png";
        var weatherImage3 = document.createElement("img");
        weatherImage3.setAttribute("src", weatherIconSrc3);
        icon.appendChild(weatherImage3);
        // Fourth Day Forecast
        var temp = document.querySelector(".temp4");
        temp.textContent = "Temp: " + data.list[3].main.temp + " ˚F";
        var hum = document.querySelector(".humidity4");
        hum.textContent = "Humidity: " + data.list[3].main.humidity + "%";
        // Shows the weather icon on the current day
        var icon = document.querySelector(".icon4");
        var weatherIconSrc4 = "https://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + ".png";
        var weatherImage4 = document.createElement("img");
        weatherImage4.setAttribute("src", weatherIconSrc4);
        icon.appendChild(weatherImage4);
        // Fifth Day Forecast
        var temp = document.querySelector(".temp5");
        temp.textContent = "Temp: " + data.list[4].main.temp + " ˚F";
        var hum = document.querySelector(".humidity5");
        hum.textContent = "Humidity: " + data.list[4].main.humidity + "%";
        // Shows the weather icon on the current day
        var icon = document.querySelector(".icon5");
        var weatherIconSrc5 = "https://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + ".png";
        var weatherImage5 = document.createElement("img");
        weatherImage5.setAttribute("src", weatherIconSrc5);
        icon.appendChild(weatherImage5);
    });
});



