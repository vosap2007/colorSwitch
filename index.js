import colors from './src/colors';
import randomIntegerFromInterval from './src/random';
import changeBackground from './src/backgroundStyle';
import {buttonEnable, buttonDisable} from './src/buttonActive';

const buttonStartEl = document.querySelector('[data-action="start"]');
buttonStartEl.addEventListener('click', callbackButtonStart);

const buttonStopEl = document.querySelector('[data-action="stop"]');
buttonStopEl.addEventListener('click', callbackButtonStop);

let idColorSetInterval = 0;

function callbackButtonStart() {
    idColorSetInterval = setInterval(() => {
        let indexColor = randomIntegerFromInterval(colors.length, -1);
    let color = colors[indexColor];
    
    changeBackground(color);
    }, 1000);

    buttonEnable(buttonStartEl);
};

function callbackButtonStop() {
    clearInterval(idColorSetInterval);

    buttonDisable(buttonStartEl);
};