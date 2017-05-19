import React from 'react';
import { render } from 'react-dom';

// import '_bootstrap.scss';

import '../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss'

const image = require('../images/logo.png')
const NavBar = require('../Components/NavBar');
const EditionBar = require('../Components/EditionBar');
const NotesEditionPanel = require('../Components/NotesEditionPanel');
const InformationPanel = require('../Components/InformationPanel');


const App = React.createClass({
  getInitialState: function () {
    return { notes: [] };
  },
  createNote: function () {
    var arrayNotes = this.state.notes;
    arrayNotes.push(<Notes />);
    this.setState({ notes: arrayNotes });
  },
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid container-fluid-fix ">
          <div className="row edition secondContainer">
            <div className="col-md-1 firstElement">
              <EditionBar />
            </div>
            <div className="col-md-8 col-sm-11  col-xs-12 secondElement">
              <NotesEditionPanel />
            </div>
            <div className="col-md-3 col-sm-11 col-xs-12 thirthElement">
              <InformationPanel />
            </div>
          </div>

        </div>
      </div>
    );
  },
});


render(<App />, document.getElementById('app'));


