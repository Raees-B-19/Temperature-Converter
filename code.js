
let convert = document.getElementById('convert');

convert.addEventListener('click',() => {
    let fahrenheit = document.querySelector('#fahrenheit');
    let celsius = document.querySelector('celsius');
    let f = fahrenheit;
    
    

    let converter = eval((f.value - 32) / 1.8);
    // .value to target input value

    // toFixed(x) is to round off decimals
    let answer = converter.toFixed(4);
    // console.log(answer)

    answer.value = c.value
})
