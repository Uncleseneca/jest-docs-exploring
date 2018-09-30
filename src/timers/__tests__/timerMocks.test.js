import timerGame from '../timerGame';

test('should wait 1 second before ending the game', () => {
  jest.useFakeTimers();
  timerGame();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

test('calls the callback 1 time', () => {
  jest.useFakeTimers();
  const callback = jest.fn();

  timerGame(callback);

  expect(callback).not.toBeCalled();

  jest.runAllTimers();

  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});

test('calls the callback after 1 second with advanceTimersByTime', () => {
  jest.useFakeTimers();
  const callback = jest.fn();

  timerGame(callback);

  expect(callback).not.toBeCalled();

  jest.advanceTimersByTime(1000);

  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});
