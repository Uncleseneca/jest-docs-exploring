import React from 'react';
import Clock from '../Clock';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

Date.now = jest.fn(() => 1482363367071);

test('Clock renders correctrly', () => {
  const tree = renderer.create(<Clock />).toJSON();

  expect(tree).toMatchSnapshot();
});
