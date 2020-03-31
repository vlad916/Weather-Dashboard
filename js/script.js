$(document).ready(function () {
    var m = moment().format("MMM, YYYY Do");
    $(".date").text(m);
   
    $("#btnSearch").on("click", function () {
        event.preventDefault();
    
        var cityName = $("#search-input").val();

        console.log(cityName);

        $(".city").text(cityName + " |   ");

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=6db15ea629a8fe04cc16aeecc303ade4";


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (data) {
            console.log(data);

            $(".temp").text("Temperature: " + data.main.temp + " ˚F");
            $(".windSpeed").text("Wind Speed: " + data.wind.speed);
            $(".humidity").text("Humidity: " + data.main.humidity);
            $(".weatherCondition").text("Weather: " + data.weather[0].main);

            var iconImg = data.weather[0].icon;
            var weatherIconSrc = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
            var weatherImage = $("<img>");
            weatherImage.attr("src", weatherIconSrc);
            $(".icon").append(weatherImage);
            $(".icon-img img").attr("src", weatherIconSrc);

        });
        });
    });
