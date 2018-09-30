import React from 'react';
import Link from '../Link';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Link page="vk.com">vk</Link>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('changes class when hovered', () => {
  const component = renderer.create(<Link page="google.com">google</Link>);

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();

  // trigger callback manually
  tree.props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
