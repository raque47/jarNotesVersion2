import React from 'react';
import { render } from 'react-dom';

import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/pages/_home.scss';
const image = require('./images/logo.png')
const NavBar = require('./NavBar');
const EditionBar = require('./EditionBar');


const App = React.createClass({
  render() {
    return (
    <div>
    <NavBar/>
 
    <div className="container-fluid container-fluid-fix ">
     <div className="row edition secondContainer">
        <div className="col-md-1 firstElement">
            <EditionBar/>

         </div>
         <div className="col-md-8 col-sm-11  col-xs-12 secondElement">
                    <div className="form-group noteText">
                        <input type="text" placeholder="Title" className="titleNoteControl" id="titleNote"/>
                        <textarea className="form-control noteContentFont" rows="5" id="noteContent" placeholder="Write a new note..."></textarea>
                        <div className="editionNotesControl">
                            <button className="editionButtonControls"><img src={require('./images/paint-button.svg')}  className="navBar__images" data-toggle="tooltip" data-placement="top" title="Font Color"/></button>
                            <button className="editionButtonControls"><img src={require('./images/upload-button.svg')}   className="navBar__images" data-toggle="tooltip" data-placement="top" title="Load Image"/></button>
                            <button id="addNoteButton" className="editionButtonControls"><span className="editionTextControl" data-toggle="tooltip" data-placement="top" title="Add Note">Save Note</span></button>
                        </div>
                    </div>
           </div>
 
        </div>
          <div className="col-md-3 col-sm-11 col-xs-12 thirthElement">
                <div id="panelInformation" className="infoPanel addLightColorTransition">

                <div className="container-fluid">
                    <div>
                        <h2 id="informationPanelTittle" className="fontFamily"> Notes</h2>
                    </div>

                    <form id="searchForm" className="navbar-form searchFormHidden" role="search">
                        <div id="searchForm__input" className="input-group searchFormHidden">
                            <input type="text" className="form-control searchFormHidden" placeholder="Search" name="srch-term" id="srch-term"/>
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit"><img src={require('./images/search-button.svg')} className="searchButtonInformationPanel"/> </button>
                            </div>
                        </div>
                    </form>

                    <ul id="listInformationPanel" className="infoPanelElements leaf">

                    </ul>
                    <div id="listInformationPanelNotes">

                    </div>

                    <div id="addNewElementForm" className="addNewElementPanel addNewElementFormHidden">

                        <div className="addNewElementTittleType">
                            <h4 id="" className="fontFamily"> Add a new tag</h4>
                        </div>

                        <div className="formAddNewElement">
                            <input id="addNewElementTittle" type="text" placeholder="Title" className="titleNoteControl"/>
                            <textarea id="addNewElementContent" className="textAreaAddElement"></textarea>

                            <button id="addNoteButton" className="editionButtonControls addNewElementButton"><span className="editionTextControl">Add Tag</span></button>
                        </div>

                    </div>
 
                    </div>
          
                </div>
            </div>

      </div>
      </div>

      
     );
  },
});


render(<App />, document.getElementById('app'));


