import React from 'react';
import { render } from 'react-dom';


import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/pages/_home.scss';

const App = () => (

     <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"></button>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                <a className="navbar-brand pull-left" href="#"><img src={'/images/logo.png'}/></a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <div className="nav navbar-nav navbar-right">
                    <div className="navContainerNotes">
                        <button id="notesControl" className="navBar__button buttons"> <img src="../images/notes-button.svg" className="navBar__images" data-toggle="tooltip" data-placement="top" title="Notes"/><span className="navElementSpanVisible">Notes</span></button>
                        <div id="hiddenControlNotesButtons" className="hiddenButtonsNotes invisibleComponent hiddenButtons">
                            <button id="hiddenButtonSearchNote" className="hiddenButtons__button buttons"><img src="../images/search-button.svg" className="navBar__hiddenImages"/> <span className="buttonFontHidden">Search Note</span></button>
                            <button id="hiddenButtonAddNote" className="hiddenButtons__button buttons"><img src="../images/add-note-button.svg" className="navBar__hiddenImages"/> <span className="buttonFontHidden">Add Note</span></button>
                            <button id="hiddenButtonViewNote" className="hiddenButtons__button buttons"><img src="../images/view-button.svg" className="navBar__hiddenImages"/> <span className="buttonFontHidden">View Notes</span></button>
                        </div>
                    </div>
                 <div className="navContainerNotes">
                        <button id="tagsControl" className="navBar__button buttons"><img src="../images/tag-button.svg" className="navBar__images" data-toggle="tooltip" data-placement="top" title="Tags"/><span className="navElementSpanVisible">Tags</span></button>
                        <div id="hiddenControlTagsButtons" className="hiddenButtonsTag invisibleComponent hiddenButtons">
                            <button id="hiddenButtonSearchTag" className="hiddenButtons__button buttons "><img src="../images/search-button.svg" className="navBar__hiddenImages"/> <span className="buttonFontHidden">Search Tag</span></button>
                            <a href="#addNewElementForm" id="hiddenButtonAddTag" className="hiddenButtons__button buttons"><img src="../images/add-tag-button.svg" className="navBar__hiddenImages"/> <span className="buttonFontHidden">Add Tag</span></a>
                           <button id="hiddenButtonViewTag" className="hiddenButtons__button buttons"><img src="../images/view-button.svg" className="navBar__hiddenImages"/> <span className="buttonFontHidden">View Tags</span></button>
                        </div>

                    </div>
                    <div className="navContainerNotes">
                        <button id="foldersControl" className="navBar__button buttons"><img src="../images/folder-button.svg" className="navBar__images" data-toggle="tooltip" data-placement="top" title="Folders"/><span className="navElementSpanVisible">Folders</span></button>
                        <div id="hiddenControlFoldersButtons" className="hiddenButtonsFolder invisibleComponent  hiddenButtons">
                            <button id="hiddenButtonSearchFolder" className="hiddenButtons__button buttons"><img src="../images/search-button.svg" className="navBar__hiddenImages"/> <span className="buttonFontHidden">Search Folder</span></button>
                            <a href="#addNewElementForm" id="hiddenButtonAddFolder" className="hiddenButtons__button buttons"><img src="../images/add-folder-button.svg" className="navBar__hiddenImages"/> <span className="buttonFontHidden">Add Folder</span></a>
                           <button id="hiddenButtonViewFolder" className="hiddenButtons__button buttons"><img src="../images/view-button.svg" className="navBar__hiddenImages"/> <span className="buttonFontHidden">View Folders</span></button>
                        </div>
                    </div>
                    <button className="dropdown-toggle navBar__button buttons" data-toggle="dropdown"><img src="../images/user-button.svg" className="navBar__images"/><span className="caret"></span></button>
                    <ul className="dropdown-menu">
                        <li><a href="#">Settings</a></li>
                        <li><a href="#">Log Out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

);

render(<App />, document.getElementById('app'));
