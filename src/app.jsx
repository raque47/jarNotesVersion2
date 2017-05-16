import React from 'react';
import { render } from 'react-dom';

import './scss/main.scss';

const App = () => (
  <div>
   <h1>Hello world</h1>
  </div>
);

render(<App />, document.getElementById('app'));
