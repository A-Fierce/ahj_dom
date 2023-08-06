import definePosition from './definePosition';

export default function timerClock() {
  const body = document.querySelector('body');
  const timerField = document.createElement('div');
  timerField.className = 'timerField';
  body.append(timerField);
  const timer = document.createElement('p');
  timer.textContent = 1;
  setInterval(() => {
    if (+timer.textContent > 0) {
      timer.textContent -= 1;
    } else {
      definePosition();
      timer.textContent = 1;
    }
  }, 1000);
}
