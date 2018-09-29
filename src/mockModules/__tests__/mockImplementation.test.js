import { range } from 'lodash';

const myMock = jest
  .fn(() => 'default')
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call');

test('myMock return values should match', () => {
  range(3).forEach(myMock);
  const returnValues = myMock.mock.results.map(result => result.value);

  expect(returnValues).toEqual(['first call', 'second call', 'default']);
});
