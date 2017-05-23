import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';


const bootstrapStyle = require('../../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');
const appStyle = require('./_app.scss');

const MainContainer = require('../../Containers/MainContainer');

const App = React.createClass({

  render() {
    return (
      <Router>
        <MainContainer/>
      </Router>
    );
  },
});


render(<App />, document.getElementById('app'));


