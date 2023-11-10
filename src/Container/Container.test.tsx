import React from 'react';
import renderer from 'react-test-renderer';
import Container from './Container';

test('renders proper hasWon and boxState output', () => {
  const component1 = renderer.create(<Container hasWon={false} boxState={Array(9).fill('')}  onIndexClick={() => {}} />);
  let tree1 = component1.toJSON();
  expect(tree1).toMatchSnapshot();

  const component2 = renderer.create(<Container hasWon={false} boxState={['O', 'X', '', 'O', 'X', 'X', 'O', '', '']}  onIndexClick={() => {}} />);
  let tree2 = component2.toJSON();
  expect(tree2).toMatchSnapshot();

  const component3 = renderer.create(<Container hasWon={true} boxState={['O', 'X', '', 'O', 'X', 'X', 'O', '', '']}  onIndexClick={() => {}} />);
  let tree3 = component2.toJSON();
  expect(tree3).toMatchSnapshot();
});
