/// <reference types="react" />

interface ICounterContext {
  count: number;
  countOne: () => void;
  clear: () => void;
};



declare module 'buttonMfe/App' {
  const App: React.ComponentType;
  export default App;
}

declare module 'buttonMfe/store' {
  const CounterProvider: ({ children }: any) => JSX.Element;
  const useCount: () => ICounterContext | null;
  export {
    CounterProvider,
    useCount
  }
}

declare module 'resultMfe/App' {
  const App: React.ComponentType;
  export default App;
}