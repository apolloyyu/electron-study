import _ from 'lodash';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import React from 'react';

const root = createRoot(document.getElementById('root')!);
// ReactDOM.render(<App />, document.getElementById('root'));
root.render(<App />);
