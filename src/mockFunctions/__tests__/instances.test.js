test('instances are stored in mock.instances property', () => {
  const myMock = jest.fn();

  const a = new myMock();
  const b = { c: 1 };

  const bound = myMock.bind(b);
  bound();

  expect(myMock.mock.instances[0]).toBe(a);
  expect(myMock.mock.instances[1]).toBe(b);
});
