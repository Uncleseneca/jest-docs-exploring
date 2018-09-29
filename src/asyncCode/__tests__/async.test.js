import { fetchData, brokenFetchData } from '../promises';

test('the data is SMALL without resolves', async () => {
  expect.assertions(1);

  const data = await fetchData();
  expect(data).toBe('SMALL');
});
test('the data is SMALL with resolves', async () => {
  expect.assertions(1);

  await expect(fetchData()).resolves.toBe('SMALL');
});

test('brokenFetchData throws error without rejects', async () => {
  expect.assertions(1);

  try {
    const data = await brokenFetchData();
  } catch (error) {
    expect(error.message).toBe('bummer!');
  }
});

test('brokenFetchData throws error with rejects', async () => {
  expect.assertions(1);

  await expect(brokenFetchData()).rejects.toBeInstanceOf(Error);
});
