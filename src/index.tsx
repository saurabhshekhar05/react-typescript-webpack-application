import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { ReactDOM } from 'react'; Used in React 17.

import { App } from './App';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

//ReactDOM.render(<App/>, document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
