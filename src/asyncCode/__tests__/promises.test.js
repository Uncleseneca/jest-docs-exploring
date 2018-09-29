import { fetchData, brokenFetchData } from '../promises';

test('the data is SMALL without resolves', () => {
  expect.assertions(1);
  return fetchData().then(data => {
    expect(data).toBe('SMALL');
  });
});

test('the data is SMALL with resolves', () => {
  expect.assertions(1);
  return expect(fetchData()).resolves.toBe('SMALL'); // much cleaner synthax than first variant!!
});

test('brokenFetchData throws error without rejects', () => {
  expect.assertions(1);

  return brokenFetchData().catch(error =>
    expect(error.message).toMatch('bummer!')
  );
});

test('brokenFetchData throws error with rejects', () => {
  expect.assertions(1);

  return expect(brokenFetchData()).rejects.toBeInstanceOf(Error);
});
