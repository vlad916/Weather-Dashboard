$(document).ready(function () {
    var m = moment().format("MMM, YYYY Do");
    $(".date").text(m);
    $("#search").on("click", function () {
        var cityName = $("#input").val ();
        console.log(cityName);
        $(".city").text(cityName + " |   ");
    });
});

var apiKey = "6db15ea629a8fe04cc16aeecc303ade4";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + apiKey;