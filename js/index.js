const display = document.querySelector('.display');

document.querySelectorAll('.digits button, .opers button')
    .forEach( button => button.addEventListener('click', digitOperPressed ));
    
function digitOperPressed(e) {
    display.value += e.target.innertText;
}

document.querySelector('.equal').addEventListener('click', equalPressed);

function equalPressed() {
display.value = eval(display.value);
}
