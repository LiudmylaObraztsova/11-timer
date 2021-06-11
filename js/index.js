const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};


class CountdownTimer {
  constructor({selector, targetDate}) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start = setInterval(() => {
    const nowDate = Date.now();
    const remainingTime = this.targetDate - nowDate;
    const time = this.getTimeComponents(remainingTime);

    this.updateClockFace(time);
    this.stop(time)
  }, 1000);

  stop(time) {
    if (time <= 0) {
      clearInterval(this.start)
      refs.timer.textContent = 'Happy Birthday'
    }
  }


  getTimeComponents(time) {
   
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );

    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }


  pad(value) {
    return String(value).padStart(2, "0");
  }


  updateClockFace({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }
}

// Новый таймер
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 18, 2021'),
});