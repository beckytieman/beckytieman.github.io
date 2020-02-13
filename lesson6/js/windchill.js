
var temp = parseFloat(document.getElementById ('Current').textContent);
var speed = parseFloat(document.getElementById ('Wind Speed').textContent);
var output = Math.round(windChill(temp, speed))

if(temp <= 50 && speed > 3) {
    document.getElementById('Wind Chill').innerHTML = output + "&deg;F"
}
else {
    document.getElementById('Wind Chill').innerHTML = "N/A"
}



//calculation and result rounded to 2 decimals

function windChill(tempF, speed) {
return 35.74 + (0.6215 * tempF) - (35.75*(speed**0.16)) + (0.4275*(tempF)*(speed**0.16));
}