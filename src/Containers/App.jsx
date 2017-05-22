import React from 'react';
import { render } from 'react-dom';


// import '_bootstrap.scss';

import '../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import '../scss/pages/_App.scss'
//import '../scss/pages/_home.scss'


const MainContainer = require('./MainContainer');

const App = React.createClass({

  render() {
    return (
      <MainContainer/>
    );
  },
});


render(<App />, document.getElementById('app'));


