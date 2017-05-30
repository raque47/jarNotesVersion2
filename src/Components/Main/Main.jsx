import React from 'react';
import render from 'react-dom';
import image from '../../images/logo.png';
import NavBar from '../NavBar/NavBar';
import NoteEditionContainer from '../../Containers/NoteEditionContainer';
import EditionBarContainer from '../../Containers/EditionBarContainer';
import InformationPanel from '../InformationPanel/InformationPanel';
import ModalContainer from '../../Containers/ModalContainer'
import mainStyle from './_main.scss'
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';


class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Route path="/" render={() => (
          <NavBar
            onClickMainButtonEvent={this.props.onClickMainButtonEvent}
            onClickSearchEvent={this.props.onClickSearchEvent}
            onClickViewEvent={this.props.onClickViewEvent}
            onClickAddEvent={this.props.onClickAddEvent} />
        )}
        />
        <div className="container-fluid container-fluid-fix createOpacity  ">
          <div className="row edition secondContainer">
                

              <div className="col-md-8 col-sm-11  col-xs-12 secondElement">
              <Switch>
                <Route path="/editNote" render={() => (
                  <NoteEditionContainer onClickAddNote={this.props.onClickAddNote}
                    noteTitle={this.props.noteTitle}
                    noteContent={this.props.noteContent}
                    noteTitle={this.props.noteTitle}
                    noteContent={this.props.noteContent}
                    actionType={this.props.actionType}
                    onClickEditNote={this.props.onClickEditNote}
                    idNoteSelected={this.props.idNoteSelected}
                    idSelectedFolder = {this.props.idSelectedFolder}
                  />
                )} />

                <Route path='/add folders' render={() => (
                  <AddNewElementContainer
                    onClickAddElement={this.props.onClickAddElement}
                    actionType={this.props.actionType}
                    activeAddElement={this.props.activeAddElement}
                    buttonName=""
                    noteTitle={this.props.noteTitle}
                    idAction={this.props.idAction}
                 />
                )}
                />


                <Route exact path="/" render={() => (
                  <NoteEditionContainer
                    onClickAddNote={this.props.onClickAddNote}
                    actionType={this.props.actionType}
                  />
                )} />

                <Route path="/" render={() => (
                  <NoteEditionContainer
                    onClickAddNote={this.props.onClickAddNote}
                    actionType={this.props.actionType}
                  />
                )} />

              </Switch>
            </div>


            <div className="col-md-3 col-sm-11 col-xs-12 thirthElement">
              <InformationPanel
                onClickMainButtonEvent={this.props.mainButtonEvent}
                activeSearch={this.props.activeSearch}
                activeView={this.props.activeView}
                activeAddElement={this.props.activeAddElement}
                idAction={this.props.idAction}
                noteTitle={this.props.noteTitle}
                noteContent={this.props.noteContent}
                actionType={this.props.actionType}
                showAllNotes={this.props.showAllNotes}
                onClickEditNote={this.props.onClickEditNote}
                idNoteSelected={this.props.idNoteSelected}
                idSelectedFolder = {this.props.idSelectedFolder}
                showEditionBar = {this.props.showEditionBar}>
              </InformationPanel>
            </div>


<div className="col-md-1 firstElement">
              <EditionBarContainer editionBarVisible = {this.props.editionBarVisible} />
            </div>

          </div>

        </div>
        <ModalContainer showModal={this.props.showModal}
        onClickAcceptFolder={this.props.onClickAcceptFolder}
        actionType={this.props.actionType} />
      </div>

    );
  }
};

export default Main;