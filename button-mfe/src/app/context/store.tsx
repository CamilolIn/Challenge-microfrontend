import React from 'react'

interface ICounterContext {
  count: number;
  countOne: () => void;
  clear: () => void;
};

const counterContext = React.createContext<ICounterContext | null>(null);

const CounterProvider = ({ children }: any) => {
  const [ count, setCount ] = React.useState(0);

  const countOne = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  const clear = () => {
    setCount(0);
  }

  const value = {
    count,
    countOne,
    clear
  };

  return (
    <counterContext.Provider value={value}>
      { children }
    </counterContext.Provider>
  )
}

const useCount = () => {
  return React.useContext(counterContext);
}

export {
  CounterProvider,
  useCount,
}