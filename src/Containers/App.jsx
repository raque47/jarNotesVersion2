import React from 'react';
import { render } from 'react-dom';

import '../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import '../scss/pages/_home.scss';
const image = require('../images/logo.png')
const NavBar = require('../Components/NavBar');
const EditionBar = require('../Components/EditionBar');
const NotesEditionPanel = require('../Components/NotesEditionPanel');
const InformationContainer = require('./InformationContainer');

const App = React.createClass({
   getInitialState: function () {
        return { notes: [] };
    },
    createNote: function () {
        var arrayNotes = this.state.notes;
        arrayNotes.push(<Notes />);
        this.setState({notes: arrayNotes});
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
              <NotesEditionPanel/>
            </div>
          </div>
          <div className="col-md-3 col-sm-11 col-xs-12 thirthElement">
            <div id="panelInformation" className="infoPanel addLightColorTransition">

              <div className="container-fluid">
              { /* TITLE COMPONENT <div>
                  <h2 id="informationPanelTittle" className="fontFamily"> Notes</h2>
                </div> */}

            { /* SEARCH COMPONENT  <form id="searchForm" className="navbar-form searchFormHidden" role="search">
                  <div id="searchForm__input" className="input-group searchFormHidden">
                    <input type="text" className="form-control searchFormHidden" placeholder="Search" name="srch-term" id="srch-term" />
                    <div className="input-group-btn">
                      <button className="btn btn-default" type="submit"><img src={require('./images/search-button.svg')} className="searchButtonInformationPanel" /> </button>
                    </div>
                  </div>
                </form> */ }

              {/* LISTA DE NOTAS/FOLDERS/TAGS */}
              <InformationContainer/>
     
              {/* ADD FOLDER/TAG COMPONENT <div id="addNewElementForm" className="addNewElementPanel addNewElementFormHidden">

                  <div className="addNewElementTittleType">
                    <h4 id="" className="fontFamily"> Add a new tag</h4>
                  </div>
                  <div className="formAddNewElement">
                    <input id="addNewElementTittle" type="text" placeholder="Title" className="titleNoteControl" />
                    <textarea id="addNewElementContent" className="textAreaAddElement"></textarea>
                    <button id="addNoteButton" className="editionButtonControls addNewElementButton"><span className="editionTextControl">Add Tag</span></button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});


render(<App />, document.getElementById('app'));


