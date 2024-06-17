const pomodoroTimer = (screenTimer, btnStart, btnStop, btnReset) => {
  const $screenTimer = document.getElementById(screenTimer);
  const $btnStart = document.getElementById(btnStart);
  const $btnStop = document.getElementById(btnStop);
  const $btnReset = document.getElementById(btnReset);
  let minutes = 24;
  let seconds = 59;
  let timer = null;

  document.addEventListener('click', (e) => {
    if (e.target === $btnStart) {
      timer = setInterval(getPomodoroTimer, 1000);
      $btnStart.disabled = true;
    }

    if (e.target === $btnStop) {
      clearInterval(timer);
      $btnStart.disabled = false;
      return;
    }

    if (e.target === $btnReset) {
      minutes = 24;
      seconds = 59;
      $btnStart.disabled = false;
      if (timer != null) clearInterval(timer);
      return ($screenTimer.textContent = `25:00`);
    }
  });

  const getPomodoroTimer = () => {
    const parseMinutes = minutes >= 10 ? minutes : '0' + minutes;
    const parseSeconds = seconds >= 10 ? seconds : '0' + seconds;
    if (seconds === 60) $screenTimer.textContent = `${parseMinutes}:00`;
    $screenTimer.textContent = `${parseMinutes}:${parseSeconds}`;

    if (minutes === 0 && seconds === 0) {
      $screenTimer.textContent = '00:00';
      setTimeout(() => alert('Tiempo cumplido'), 0);
      return clearInterval(timer);
    }

    if (seconds === 0) {
      seconds = 60;
      minutes--;
    }

    seconds--;
  };
};

document.addEventListener('DOMContentLoaded', (e) => {
  pomodoroTimer('screenTimer', 'btnStart', 'btnStop', 'btnReset');
});
