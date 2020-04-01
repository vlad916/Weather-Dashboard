
var btnSearch = document.querySelector("#btnSearch");
var city = document.querySelector(".city");
var headerDate = document.querySelector(".date");
var m = moment();
var showDate = m.format("MM/DD/YY");

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


headerDate.textContent = showDate;

btnSearch.addEventListener("click", function () {
    event.preventDefault();

    var cityName = document.getElementById("search-input").value;

    console.log(cityName);

    city.textContent = cityName + " |   ";


    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=6db15ea629a8fe04cc16aeecc303ade4";
    var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&cnt=5&units=imperial&appid=6db15ea629a8fe04cc16aeecc303ade4";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {
        console.log(data);

        var temp = document.querySelector(".temp");
        temp.textContent = "Temperature: " + data.main.temp + " ˚F";
        var wind = document.querySelector(".windSpeed");
        wind.textContent = "Wind Speed: " + data.wind.speed + " MPH";
        var hum = document.querySelector(".humidity");
        hum.textContent = "Humidity: " + data.main.humidity + "%";
        var weather = document.querySelector(".weatherCondition");
        weather.textContent = "Weather: " + data.weather[0].main;

        var icon = document.querySelector('.icon');
        var weatherIconSrc = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
        var weatherImage = document.createElement('img');
        weatherImage.setAttribute('src', weatherIconSrc);
        icon.appendChild(weatherImage);

        localStorage.setItem("cityStorage", cityName);
        var cityStorageSearch = localStorage.getItem("cityStorage");

        var searchHistory = "<button id='searchStored'>" + cityStorageSearch + "</button>";
        $(".cityList").append("<li class = 'list-group-item'>" + searchHistory + "</li>");

    });

    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (data) {
        console.log(data);
        // First Day Forecast
        var temp = document.querySelector(".temp1");
        temp.textContent = "Temperature: " + data.list[0].main.temp + " ˚F";
        var wind = document.querySelector(".windSpeed1");
        wind.textContent = "Wind Speed: " + data.list[0].wind.speed + " MPH";
        var hum = document.querySelector(".humidity1");
        hum.textContent = "Humidity: " + data.list[0].main.humidity + "%";
        var weather = document.querySelector(".weatherCondition1");
        weather.textContent = "Weather: " + data.list[0].weather[0].main;

        var icon = document.querySelector(".icon1");
        var weatherIconSrc1 = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png";
        var weatherImage1 = document.createElement("img");
        weatherImage1.setAttribute("src", weatherIconSrc1);
        icon.appendChild(weatherImage1);
        // Second Day Forecast
        var temp = document.querySelector(".temp2");
        temp.textContent = "Temperature: " + data.list[1].main.temp + " ˚F";
        var wind = document.querySelector(".windSpeed2");
        wind.textContent = "Wind Speed: " + data.list[1].wind.speed + " MPH";
        var hum = document.querySelector(".humidity2");
        hum.textContent = "Humidity: " + data.list[1].main.humidity + "%";
        var weather = document.querySelector(".weatherCondition2");
        weather.textContent = "Weather: " + data.list[1].weather[0].main;

        var icon = document.querySelector(".icon2");
        var weatherIconSrc2 = "https://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + ".png";
        var weatherImage2 = document.createElement("img");
        weatherImage2.setAttribute("src", weatherIconSrc2);
        icon.appendChild(weatherImage2);
        // Third Day Forecast
        var temp = document.querySelector(".temp3");
        temp.textContent = "Temperature: " + data.list[2].main.temp + " ˚F";
        var wind = document.querySelector(".windSpeed3");
        wind.textContent = "Wind Speed: " + data.list[2].wind.speed + " MPH";
        var hum = document.querySelector(".humidity3");
        hum.textContent = "Humidity: " + data.list[2].main.humidity + "%";
        var weather = document.querySelector(".weatherCondition3");
        weather.textContent = "Weather: " + data.list[2].weather[0].main;

        var icon = document.querySelector(".icon3");
        var weatherIconSrc3 = "https://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + ".png";
        var weatherImage3 = document.createElement("img");
        weatherImage3.setAttribute("src", weatherIconSrc3);
        icon.appendChild(weatherImage3);
        // Fourth Day Forecast
        var temp = document.querySelector(".temp4");
        temp.textContent = "Temperature: " + data.list[3].main.temp + " ˚F";
        var wind = document.querySelector(".windSpeed4");
        wind.textContent = "Wind Speed: " + data.list[3].wind.speed + " MPH";
        var hum = document.querySelector(".humidity4");
        hum.textContent = "Humidity: " + data.list[3].main.humidity + "%";
        var weather = document.querySelector(".weatherCondition4");
        weather.textContent = "Weather: " + data.list[3].weather[0].main;

        var icon = document.querySelector(".icon4");
        var weatherIconSrc4 = "https://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + ".png";
        var weatherImage4 = document.createElement("img");
        weatherImage4.setAttribute("src", weatherIconSrc4);
        icon.appendChild(weatherImage4);
        // Fifth Day Forecast
        var temp = document.querySelector(".temp5");
        temp.textContent = "Temperature: " + data.list[4].main.temp + " ˚F";
        var wind = document.querySelector(".windSpeed5");
        wind.textContent = "Wind Speed: " + data.list[4].wind.speed + " MPH";
        var hum = document.querySelector(".humidity5");
        hum.textContent = "Humidity: " + data.list[4].main.humidity + "%";
        var weather = document.querySelector(".weatherCondition5");
        weather.textContent = "Weather: " + data.list[4].weather[0].main;

        var icon = document.querySelector(".icon5");
        var weatherIconSrc5 = "https://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + ".png";
        var weatherImage5 = document.createElement("img");
        weatherImage5.setAttribute("src", weatherIconSrc5);
        icon.appendChild(weatherImage5);
    });
});



