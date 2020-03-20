// onclick
let firstButton = document.getElementById('blue_button');
let secondButton = document.getElementById('green_button').onclick = secondElement;
let thirdButton = document.getElementById('red_button').addEventListener("click", thirdElement);
let firstSpanMessage = document.getElementById('first_span');



function firstElement() {
    firstSpanMessage.innerText = 'You clicked First button';
}

function secondElement() {
    firstSpanMessage.innerText = 'You clicked Second button';
}

function thirdElement() {
    firstSpanMessage.innerText = 'You clicked Third button'
}

// addEventListener
let firstBtnSecMethod = document.getElementById('blue_button_2').addEventListener("click", firstElementSecMeth);
let secondBtnSecMethod = document.getElementById('green_button_2').addEventListener("click", secondElementSecMeth);
let thirdBtnSecMethod = document.getElementById('red_button_2').addEventListener("click", thirdElementSecMeth);
let secondSpanMessage = document.getElementById('second_span');

function firstElementSecMeth() {
    secondSpanMessage.innerText = 'You clicked First button';
}

function secondElementSecMeth() {
    secondSpanMessage.innerText = 'You clicked Second button';
}

function thirdElementSecMeth() {
    secondSpanMessage.innerText = 'You clicked Third button'
}