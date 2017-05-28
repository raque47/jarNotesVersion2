import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';


import bootstrapStyle from '../../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import appStyle from './_app.scss';

import MainContainer from '../../Containers/MainContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <MainContainer/>
      </Router>
    );
  }
};

render(<App />, document.getElementById('app'));


