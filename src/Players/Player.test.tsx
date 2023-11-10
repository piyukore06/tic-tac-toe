import React from 'react';
import renderer from 'react-test-renderer';
import Player from './Player';

test('renders proper hasWon output', () => {
  const component1 = renderer.create(<Player hasWon={false} playerNo={'X'}  onNewGame={() => {}} />);
  let tree1 = component1.toJSON();
  expect(tree1).toMatchSnapshot();

  const component2 = renderer.create(<Player hasWon={true} playerNo={'X'}  onNewGame={() => {}} />);
  let tree2 = component2.toJSON();
  expect(tree2).toMatchSnapshot();


  const component3 = renderer.create(<Player hasWon={'NOONE'} playerNo={'X'}  onNewGame={() => {}} />);
  let tree3 = component3.toJSON();
  expect(tree3).toMatchSnapshot();
});


test('renders proper playerNo output', () => {
    const component1 = renderer.create(<Player hasWon={false} playerNo={'X'}  onNewGame={() => {}} />);
    let tree1 = component1.toJSON();
    expect(tree1).toMatchSnapshot();
  
    const component2 = renderer.create(<Player hasWon={false} playerNo={'O'}  onNewGame={() => {}} />);
    let tree2 = component2.toJSON();
    expect(tree2).toMatchSnapshot();
});