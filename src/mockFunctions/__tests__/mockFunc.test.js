import { forEach } from '../mockFunc';

describe('forEach works', () => {
  const mockCallback = jest.fn(x => x + 42);
  forEach([0, 1], mockCallback);

  test('mock func gets called twice', () => {
    expect(mockCallback.mock.calls.length).toBe(2);
  });
  test('first arg of first function call is 0', () => {
    expect(mockCallback.mock.calls[0][0]).toBe(0);
  });
  test('return value of first func call is 42', () => {
    expect(mockCallback.mock.results[0].value).toBe(42);
  });
});

/* mock return values */

const hisMock = jest.fn();
