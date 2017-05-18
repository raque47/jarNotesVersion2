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
            <NavBar />

            <div className="container-fluid container-fluid-fix ">
               <div className="row edition secondContainer">
                  <div className="col-md-1 firstElement">
                     <EditionBar />
                  </div>
                  <div className="col-md-8 col-sm-11  col-xs-12 secondElement">
                     <div className="form-group noteText">
                        <input type="text" placeholder="Title" className="titleNoteControl" id="titleNote" />
                        <textarea className="form-control noteContentFont" rows="5" id="noteContent" placeholder="Write a new note..."></textarea>
                        <div className="editionNotesControl">
                           <button className="editionButtonControls"><img src={require('./images/paint-button.svg')} className="navBar__images" data-toggle="tooltip" data-placement="top" title="Font Color" /></button>
                           <button className="editionButtonControls"><img src={require('./images/upload-button.svg')} className="navBar__images" data-toggle="tooltip" data-placement="top" title="Load Image" /></button>
                           <button id="addNoteButton" className="editionButtonControls"><span className="editionTextControl" data-toggle="tooltip" data-placement="top" title="Add Note">Save Note</span></button>
                        </div>
                     </div>
                  </div>

               </div>
               <div className="col-md-3 col-sm-11 col-xs-12 thirthElement">

               </div>

            </div>
         </div>


      );
   },
});


render(<App />, document.getElementById('app'));


