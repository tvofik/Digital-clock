
function test() {
  // Getting the time, day and date.
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const min = now.getMinutes();
  const second = now.getSeconds();

  // Getting elements from the DOM.
  const weekDay = document.querySelectorAll('.days');
  const period = document.querySelectorAll('.period');
  const hr = document.querySelector('.hour');
  const mn = document.querySelector('.min');
  const sc = document.querySelector('.second');

  const weekDayArr = Array.from(weekDay); // to convert Nodelist to an array
  const periodArr = Array.from(period); // same as line 16.

  // Show the Day of the week
  weekDayArr.forEach(el => el.classList.remove('active'));
  weekDayArr[day].classList.add('active');

  // Setting the HH:MM in the DOM
  const hour12 = hour % 12;
  hour12 === 0 ? hr.textContent = '12' : hr.textContent = hour12;
  
  min <= 9 ? mn.textContent = `0${min}` : mn.textContent = min;

  // Show when its AM/PM
  if (hour >= 12) {
    periodArr[0].classList.remove('active');
    periodArr[1].classList.add('active');
  } else {
    periodArr[0].classList.add('active');
    periodArr[1].classList.remove('active');
  }

  // for the seconds blinker
  sc.classList.toggle('inactive');
}
setInterval(test,1000);