let convert = document.getElementById('convert');
let fahrenheit = document.querySelector('#fahrenheit');
let celsius  = document.querySelector('#celsius1');
let convert1 = document.getElementById('convert1');

// .value to target input value
// toFixed(x) is to round off decimals

// Fahrenheit to Celsius 
convert.addEventListener('click',() => {
    document.getElementById('celsius').innerHTML = eval((fahrenheit.value - 32) / 1.8).toFixed(4);
})

// Celsius to Fahrenheit
convert1.addEventListener('click',() => {
    document.getElementById('fahrenheit1').innerHTML = eval((celsius.value * 1.8) + 32).toFixed(4);
})