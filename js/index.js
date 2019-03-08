const display = document.querySelector('.display');

document.querySelectorAll('.button')
   .forEach( button => button.addEventListener('click', Pressed));
    
   
function Pressed(e) {
    if (e.target.innerText === 'c') {
        display.value = '0';
    } else if (e.target.innerText === '=') {
        display.value = eval(display.value);
    } else if (display.value === '0') {
        display.value = e.target.innerText;
    } else {
        display.value += e.target.innerText;
    }
}