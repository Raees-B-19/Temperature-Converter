let fahrenheit = document.querySelector('#fahrenheit');
let convertFahrenheit = document.getElementById('convertFahrenheit');
let celsius  = document.querySelector('#celsius');
let convertCelsius = document.getElementById('convertCelsius');

// .value to target input value
// toFixed(x) is to round off decimals

// Fahrenheit to Celsius 
convertFahrenheit.addEventListener('click',() => {
    document.getElementById('celsiusOutput').innerHTML = eval((fahrenheit.value - 32) / 1.8).toFixed(4);
    fahrenheit.value = ''; // clear input
    convertFahrenheit.blur(); // remove focus
})

// Celsius to Fahrenheit
convertCelsius.addEventListener('click',() => {
    document.getElementById('fahrenheitOutput').innerHTML = eval((celsius.value * 1.8) + 32).toFixed(1);
    celsius.value = ''; // clear input
    convertCelsius.blur(); // remove focus
})