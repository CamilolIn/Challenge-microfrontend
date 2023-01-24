import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('buttonMfe/store', () => ({
  useCount: () => ({
    count: 123
  })
}), { virtual: true });

describe('Result App Tests', () => {

  test('renders count from remote store', () => {
    render(<App />);
    const resultElement = screen.getByTestId("result-test");
    expect(resultElement).toBeInTheDocument();
    expect(resultElement.textContent).toBe("123");
  });
})

