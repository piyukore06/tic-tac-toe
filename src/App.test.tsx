import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tic-Tac-Toe heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tic-Tac-Toe/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Copyright footer', () => {
  render(<App />);
  const linkElement = screen.getByText(/Copyright © 2023/i);
  expect(linkElement).toBeInTheDocument();
});