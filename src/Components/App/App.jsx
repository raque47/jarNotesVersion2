import React from 'react';
import { render } from 'react-dom';

const bootstrapStyle = require('../../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');
const appStyle = require('./_app.scss');

const MainContainer = require('../../Containers/MainContainer');

const App = React.createClass({

  render() {
    return (
    
        <MainContainer/>
    
    );
  },
});


render(<App />, document.getElementById('app'));


