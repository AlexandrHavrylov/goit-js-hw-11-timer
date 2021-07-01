
class CountdownTimer{
 constructor({onTick, targetDate, selector}) {
this.onTick = onTick
this.targetDate = targetDate
this.selector = selector
  }
  
changeTime() {
  
setInterval(() => {
const curentTime = new Date();
const time = this.targetDate - curentTime
const timerComponents = getTimerComponents(time)
const markUp = getMarkUp(`${this.selector}`)
  
this.onTick(timerComponents, markUp)
 },1000) 
}
 
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate : new Date('Jul 07, 2021'),
  onTick: updateTimerField
});

timer.changeTime()

const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate : new Date('Jul 07, 2022, 15:30'),
  onTick: updateTimerField
});

timer2.changeTime()







function pad(value) {
  return String(value).padStart(2, "0")
}

function getMarkUp(id) {
  
  const curentTimer = document.querySelector(`${id}`)

  const days =  curentTimer.querySelector(' [data-value="days"]')
  const hours =  curentTimer.querySelector(' [data-value="hours"]')
  const mins =  curentTimer.querySelector(' [data-value="mins"]')
  const secs = curentTimer.querySelector(' [data-value="secs"]')
  
  return refs = {
    days,
    hours,
    mins,
    secs
  }
}



function getTimerComponents(time) {
const days =  pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours =  pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = pad( Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs =  pad(Math.floor((time % (1000 * 60)) / 1000));    
    
return {days, hours, mins, secs}
};

function updateTimerField({ days, hours, mins, secs }) {
  refs.days.textContent = `${ days }`
  refs.hours.textContent = `${ hours }`
  refs.mins.textContent = `${mins}`
  refs.secs.textContent = `${secs}`  
}
