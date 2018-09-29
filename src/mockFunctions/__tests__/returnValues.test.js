test('.mockReturnValue works', () => {
  const myMock = jest.fn();

  myMock.mockReturnValueOnce(0).mockReturnValue(50);

  expect(myMock()).toBe(0);
  expect(myMock()).toBe(50);
});

test('mockReturnValue with fp', () => {
  const myMock = jest.fn();

  myMock.mockReturnValueOnce(false).mockReturnValue(true);

  const result = [11, 12].filter(myMock);

  expect(result).toEqual([12]);
});
