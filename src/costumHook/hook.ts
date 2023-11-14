import moment from 'moment';



export function durationToTimer(milliseconds:string) {
    const duration = moment.duration(parseInt(milliseconds, 10));
    const hours = Math.floor(duration.asHours());
    const minutes = Math.floor(duration.asMinutes()) % 60;
    const seconds = Math.floor(duration.asSeconds()) % 60;
  
    const hoursString = hours > 0 ? `${hours}h` : '';
    const minutesString = minutes > 0 ? `${minutes}m` : '';
    const secondsString = seconds > 0 ? `${seconds}s` : '';
  
    const timerString = `${hoursString} ${minutesString} ${secondsString}`.trim();
    return timerString;
  }