import React from 'react';
import { render } from 'react-dom';

import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/pages/_home.scss';
const image = require('./images/logo.png')
const NavBar = require('./NavBar');


const App = React.createClass({
  render() {
    return (
      <div>   
         <NavBar/>
        </div>

     );
  },
});


render(<App />, document.getElementById('app'));
