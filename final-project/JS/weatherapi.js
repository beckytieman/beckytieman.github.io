const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5606338&units=imperial&APPID=faf5cabb1395c14c43dd9ca6b9002535";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject); test for response
    document.getElementById('Current').textContent = jsObject.weather[0].main;
    document.getElementById('High').textContent = Math.round(jsObject.main.temp) + "° F";
    document.getElementById('Humidity').textContent = jsObject.main.humidity + "%";
    document.getElementById('WindSpeed').textContent = Math.round(jsObject.wind.speed) + "mph";


    // Windchill calculations
    //var windchill = Math.round(35.74 + (0.6215 * jsObject.main.temp) - (35.75*(jsObject.wind.speed**0.16)) + (0.4275*(jsObject.main.temp)*(jsObject.wind.speed**0.16)));

    var temperature = parseFloat(document.getElementById('High').innerHTML);
    var wind = parseFloat(document.getElementById('WindSpeed').innerHTML);

    if(temperature <= 50 && wind >= 3) {
        windchill = Math.round(35.74 + (0.6215 * temperature) - (35.75*(wind**0.16)) + (0.4275*(temperature)*(wind**0.16)));
        document.getElementById('WindChill').innerHTML = windchill + "&deg;F";
    }
    else {
        document.getElementById('WindChill').innerHTML = "N/A";
    }

  });

