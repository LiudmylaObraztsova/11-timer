
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.start();
        this.getRefs();
    };

    start() {
        const dataID = setInterval(() => {
            let nowDate = Date.now();
            let restTime = this.targetDate - nowDate;
            let time = this.getTimeComponents(restTime);

            this.updateTimerElements(time);
            this.stop(time, dataID);
        }, 1000)
    }

    stop({days, hours, mins, secs}, id) {
         if(days === `00` &&
        hours === `00`&&
        mins === `00`&&
        secs === `00`){
            clearInterval(id)
            alert('That`s it!')
        }
    }