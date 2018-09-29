test.only('this is the only test which will run', () => {
  expect(true).toBe(true);
});

test('this test wont run', () => {
  expect('a').toBe('b');
});
