import React from 'react';
import render from 'react-dom';
import image from '../../images/logo.png';
import NavBar from '../NavBar/NavBar';
import NoteEditionContainer from '../../Containers/NoteEditionContainer';
import EditionBarContainer from '../../Containers/EditionBarContainer';
import AddNewElementContainer from '../../Containers/AddNewElementContainer';
import InformationPanelContainer from '../../Containers/InformationPanelContainer';
import ModalContainer from '../../Containers/ModalContainer'
import InfoNote from '../InfoNote/InfoNote'
import mainStyle from './_main.scss'
import TagsSelectionContainer from '../../Containers/TagsSelectionContainer';


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
                    noteContent={this.props.noteContent}
                    actionType={this.props.actionType}
                    onClickEditNote={this.props.onClickEditNote}
                    idNoteSelected={this.props.idNoteSelected}
                    idSelectedFolder={this.props.idSelectedFolder}
                    activeSearch={this.props.activeSearch}
                    activeView={this.props.activeView}
                    activeAddElement={this.props.activeAddElement}
                    onClickAcceptFolder={this.props.onClickAcceptFolder}
                    onClickAcceptTag={this.props.onClickAcceptTag}
                  />
                )} />

                <Route exact path="/" render={() => (
                  <NoteEditionContainer
                    onClickAddNote={this.props.onClickAddNote}
                    onClickAssignTag={this.props.onClickAssignTag}
                    actionType={this.props.actionType}
                    activeSearch={this.props.activeSearch}
                    activeView={this.props.activeView}
                    activeAddElement={this.props.activeAddElement}
                    onClickAcceptFolder={this.props.onClickAcceptFolder}
                    onClickAcceptTag={this.props.onClickAcceptTag}
                  />
                )} />

                <Route path="/" render={() => (
                  <NoteEditionContainer
                    onClickAddNote={this.props.onClickAddNote}
                    onClickAssignTag={this.props.onClickAssignTag}
                    actionType={this.props.actionType}
                    activeSearch={this.props.activeSearch}
                    activeView={this.props.activeView}
                    activeAddElement={this.props.activeAddElement}
                    onClickAcceptFolder={this.props.onClickAcceptFolder}
                    onClickAcceptTag={this.props.onClickAcceptTag}
                  />
                )} />

              </Switch>
            </div>


            <div className="col-md-3 col-sm-11 col-xs-12 thirthElement">
              <InformationPanelContainer
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
                onClickAddTag={this.props.onClickAddTag}
                idTagSelected={this.props.idTagSelected}
                tagName={this.props.tagName}
                showAllTags={this.props.showAllTags}
                getTagName={this.props.getTagName}
                onClickAddTag={this.props.onClickAddTag}
                idSelectedFolder={this.props.idSelectedFolder}
                showEditionBar={this.props.showEditionBar}
                noteTitleSelected={this.props.noteTitleSelected}
                setFolderName={this.props.setFolderName}
                onClickEditNoteFolder={this.props.onClickEditNoteFolder}
                onClickNoteFolderInfo = {this.props.onClickNoteFolderInfo}
                setActionGetTag={this.props.setActionGetTag}
                setTagsName={this.props.setTagsName}
                idTagsNote={this.props.idTagsNote}
                getTagsEvent={this.props.getTagsEvent}
              >
              </InformationPanelContainer>
            </div>


            <div className="col-md-1 firstElement">
              <EditionBarContainer editionBarVisible={this.props.editionBarVisible}
                onClickEditEvent={this.props.onClickEditEvent} noteTitleSelected={this.props.noteTitleSelected}
                onClickDeleteEvent={this.props.onClickDeleteEvent}
                onClickEditNoteFolder={this.props.onClickEditNoteFolder}
                showInfoNote={this.props.showInfoNote} />
            </div>
          </div>
        </div>

        <ModalContainer showModal={this.props.showModal}
          onClickAcceptFolder={this.props.onClickAcceptFolder}
          actionType={this.props.actionType}
          folderNameNoteEdited={this.props.folderNameNoteEdited} />

        <InfoNote showInfoPanel={this.props.showInfoPanel}  
        folderNameNoteEdited={this.props.folderNameNoteEdited} 
        noteTitle={this.props.noteTitle} tagsNameNote={this.props.tagsNameNote}
        closeInfoNotePanel = {this.props.closeInfoNotePanel}/>

    
        <TagsSelectionContainer showModalTagSelection={this.props.showModalTagSelection}
          onClickAcceptTag={this.props.onClickAcceptTag}
          actionType={this.props.actionType}
          tagNameNoteEdited={this.props.tagNameNoteEdited} />
     </div>

    );
  }
};

export default Main;