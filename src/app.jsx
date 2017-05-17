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
      

    <NavBar/>
    <div class="container-fluid container-fluid-fix ">
        <EditionBar/>
 




            <div class="col-md-3 col-sm-11 col-xs-12 thirthElement">
                <div id="panelInformation" class="infoPanel addLightColorTransition">

                <div class="container-fluid">
                    <div>
                        <h2 id="informationPanelTittle" class="fontFamily"> Notes</h2>
                    </div>

                    <form id="searchForm" class="navbar-form searchFormHidden" role="search">
                        <div id="searchForm__input" class="input-group searchFormHidden">
                            <input type="text" class="form-control searchFormHidden" placeholder="Search" name="srch-term" id="srch-term"/>
                            <div class="input-group-btn">
                                <button class="btn btn-default" type="submit"><img src={require('./images/search-button.svg')} class="searchButtonInformationPanel"/> </button>
                            </div>
                        </div>
                    </form>


                    <ul id="listInformationPanel" class="infoPanelElements leaf">

                    </ul>
                    <div id="listInformationPanelNotes">

                    </div>


                    <div id="addNewElementForm" class="addNewElementPanel addNewElementFormHidden">

                        <div class="addNewElementTittleType">
                            <h4 id="" class="fontFamily"> Add a new tag</h4>
                        </div>



                        <div class="formAddNewElement">
                            <input id="addNewElementTittle" type="text" placeholder="Title" class="titleNoteControl"/>
                            <textarea id="addNewElementContent" class="textAreaAddElement"></textarea>

                            <button id="addNoteButton" class="editionButtonControls addNewElementButton"><span class="editionTextControl">Add Tag</span></button>
                        </div>

                    </div>
 
                    </div>
            

                </div>

            </div>

        </div>







    <div>
     <NavBar/>
     <div class="container-fluid container-fluid-fix ">

        <div class="row edition secondContainer">
            <div class="col-md-1 firstElement">
              <EditionBar/>
            </div>
        </div>
     </div>
    </div>

    
     );
  },
});


render(<App />, document.getElementById('app'));


