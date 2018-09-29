import { fetchData, brokenFetchData } from '../../asyncCode/promises';

beforeEach(() => {
  expect.assertions(1);
});

test('fetchData works', async () => {
  await expect(fetchData()).resolves.toBe('SMALL');
});

test('brokenFetchData dont work', async () => {
  await expect(brokenFetchData()).rejects.toBeInstanceOf(Error);
});
