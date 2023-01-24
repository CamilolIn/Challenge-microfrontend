import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './ButtonApp';
import { CounterProvider, useCount } from './context/store';
import userEvent from '@testing-library/user-event';

const TestingComponent = () => {
  const counterStore = useCount();
  return (
    <>
      <p data-testid="test-count">{counterStore?.count}</p>
      <button onClick={() => counterStore?.countOne()}>click test count</button>
      <button onClick={() => counterStore?.clear()}>click test clear</button>
    </>
  );
};
describe('Button App Tests', () => {
  const customRender = (ui: any, renderOptions: any = {}) => {
    return render(
      <CounterProvider>{ui}</CounterProvider>,
      renderOptions,
    )
  };

  test('renders all elements', () => {
    render(<App />);
    const countButton = screen.getByText(/Click me!/i);
    const clearButton = screen.getByText(/Clear/i);
    expect(countButton).toBeInTheDocument();
    expect(clearButton).toBeInTheDocument();
  });

  test('counter should start at 0', () => {
    customRender(<TestingComponent />);
    const countElement = screen.getByTestId('test-count');
    expect(countElement.textContent).toBe("0");
  });

  test('counter should count up when count button is clicked', () => {
    customRender(<TestingComponent />);
    const countElement = screen.getByTestId('test-count');
    expect(countElement.textContent).toBe("0");
    userEvent.click(screen.getByText(/click test count/i));
    expect(countElement.textContent).toBe("1");
  });

  test('counter should be zero (0) when clear button is clicked', () => {
    customRender(<TestingComponent />);
    const countElement = screen.getByTestId('test-count');
    expect(countElement.textContent).toBe("0");
    userEvent.click(screen.getByText(/click test count/i));
    expect(countElement.textContent).toBe("1");
    userEvent.click(screen.getByText(/click test clear/i));
    expect(countElement.textContent).toBe("0");
  });
});

