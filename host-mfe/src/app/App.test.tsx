import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('buttonMfe/App', () => (() => (<div>Test Button</div>)), { virtual: true });
jest.mock('resultMfe/App', () => (() => (<div>Test Result</div>)), { virtual: true });
describe('Host App Tests', () => {

  test('renders title element', () => {
    render(<App />);
    const titleElement = screen.getByText(/MFE Counter/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders result element', () => {
    render(<App />);
    const resultElement = screen.getByText(/Test Result/i);
    expect(resultElement).toBeInTheDocument();
  });

  test('renders button element', () => {
    render(<App />);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
  });
});

