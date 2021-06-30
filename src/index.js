import colors from './colors.json'



const body = document.querySelector('body')
const startBtn = document.querySelector('button[data-action="start"]')
const stopBtn = document.querySelector('button[data-action="stop"]')

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


let changeColor = null;

startBtn.addEventListener('click', onStartBtnClick)

function onStartBtnClick() {
  startBtn.setAttribute('disabled', 'disabled')
   changeColor =  setInterval(() => {
    const randomColor = colors[randomIntegerFromInterval(0, colors.length)]
    body.style.backgroundColor = randomColor;
  }, 1000);
  
}

stopBtn.addEventListener('click', onStopBtnClick)

function onStopBtnClick() {

  clearInterval(changeColor)
  startBtn.removeAttribute('disabled', 'disabled')
}