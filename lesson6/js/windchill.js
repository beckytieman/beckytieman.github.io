
var temp = parseFloat(document.getElementById ('Current').value);
var speed = parseFloat(document.getElementById ('Wind Speed').value);
var output = windChill(temp, speed)
document.getElementById('Wind Chill').innerHTML = output


//calculation and result rounded to 2 decimals

function windChill(tempF, speed) {
return 35.74 + (0.6215 * tempF) - (35.75*(speed**0.16)) + (0.4275*(tempF)*(speed**0.16));
}