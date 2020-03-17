const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=faf5cabb1395c14c43dd9ca6b9002535";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject); test for response
    document.getElementById('Current').textContent = jsObject.weather[0].main;
    document.getElementById('High').textContent = Math.round(jsObject.main.temp);
    document.getElementById('Humidity').textContent = jsObject.main.humidity;
    document.getElementById('WindSpeed').textContent = Math.round(jsObject.wind.speed);


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

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=faf5cabb1395c14c43dd9ca6b9002535";
fetch(forecastURL)
  .then((response) => response.json())
  .then((weatherForecast) => {
      //console.log(weatherForecast);

      const fiveDayFore = weatherForecast.list.filter(x => x.dt_txt.includes('18:00:00'));
      //console.log(fiveDayFore);

      for(let i = 0; i < fiveDayFore.length; i++){
          document.getElementById(`foreTemp${i+1}`).textContent = Math.round(fiveDayFore[i].main.temp);

          const imageSrc = 'https://openweathermap.org/img/w/' + fiveDayFore[i].weather[0].icon + '.png';
          const imageDesc = fiveDayFore[i].weather[0].description;
          document.getElementById(`foreIcon${i+1}`).setAttribute('src', imageSrc);
          document.getElementById(`foreIcon${i+1}`).setAttribute('alt', imageDesc);
      }
      //date
      var now = new Date();
      var day = now.getDay();
      var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      for(let i = 1; i < 6; i++){
          var dayOfWeek = day + i;
          if(dayOfWeek >= 7){
              dayOfWeek -= 7;
          }
          document.getElementById('day' + i).textContent = weekday[dayOfWeek];
      }
  });
