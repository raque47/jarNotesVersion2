import React from 'react';
import { render } from 'react-dom';

import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/pages/_home.scss';

const App = () => (
  <div>
   <h1>Hello world</h1>
  </div>
);

render(<App />, document.getElementById('app'));
