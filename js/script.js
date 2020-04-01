
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


    });

    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (data) {
        console.log(data);

        var temp1 = document.querySelector(".temp1");
        temp1.textContent = "Temperature: " + data.list[0].main.temp + " ˚F";
        var wind1 = document.querySelector(".windSpeed1");
        wind1.textContent = "Wind Speed: " + data.list[0].wind.speed + " MPH";
        var hum = document.querySelector(".humidity1");
        hum.textContent = "Humidity: " + data.list[0].main.humidity + "%";
        var weather = document.querySelector(".weatherCondition1");
        weather.textContent = "Weather: " + data.list[0].weather[0].main;

        var icon1 = document.querySelector(".icon1");
        var weatherIconSrc1 = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png";
        var weatherImage1 = document.createElement("img");
        weatherImage1.setAttribute("src", weatherIconSrc1);
        icon1.appendChild(weatherImage1);
    });
});



