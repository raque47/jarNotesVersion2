import React from 'react';
import { render } from 'react-dom';

import './scss/main.scss';

const App = () => (
  <div>
    <h1>It works!</h1>
  </div>
);

render(<App />, document.getElementById('root'));
