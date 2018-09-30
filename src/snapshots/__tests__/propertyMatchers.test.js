test.skip('will fail every time', () => {
  const user = {
    name: 'Mike Vazoffski',
    age: Math.floor(Math.random() * 30),
    id: Math.floor(Math.random() * 40),
  };

  expect(user).toMatchSnapshot();
});

test('wont fail', () => {
  const user = {
    name: 'Mike Vazoffski',
    age: Math.floor(Math.random() * 30),
    id: Math.floor(Math.random() * 40),
  };

  expect(user).toMatchSnapshot({
    age: expect.any(Number),
    id: expect.any(Number),
  });
});
