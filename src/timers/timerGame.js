const timerGame = cb => {
  console.log('Ready, GO!');
  setTimeout(() => {
    console.log('time is out, STOP!');
    cb && cb();
  }, 1000);
};

export default timerGame;
