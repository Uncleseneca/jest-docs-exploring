test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
});

test('object equality', () => {
  const data = { a: 1 }
  data.b = 2

  expect(data).toEqual({ a: 1, b: 2 })
});

test('opposite matcher', () => {
  expect(2 + 2).not.toBe(3)
});

test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
});

test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
});

test('floating point numbers', () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3)
});

test('strings matching', () => {
  expect('team').not.toMatch(/I/)
});
test('strings matching 2', () => {
  expect('hey ho').toMatch(/hey/)
});

test('array contain', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];
  expect(shoppingList).toContain('diapers')
});


/* exceptions */
const compileAndroidCode = () => {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});

