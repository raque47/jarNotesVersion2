import React from 'react';
import Title from '../Title/Title';
import Search from '../Search/Search';
import AddNewElement from '../AddNewElement/AddNewElement';
import NotesContainer from '../../Containers/NotesContainer';
import TagsContainer from '../../Containers/TagsContainer';
import FoldersContainer from '../../Containers/FoldersContainer';
import AddNewElementContainer from '../../Containers/AddNewElementContainer';
import informationPanelStyle from './_informationPanel.scss';

import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
//import { Redirect } from 'react-router';

class InformationPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("estoy en information panel!! con tag name de: " + this.props.tagName);
    return (
      <div id="panelInformation" className="infoPanel">

        <Title panelTitle={this.props.idAction} />

        <Switch>
          <Route path="/search" render={() => (
            <Search
              activeSearch={this.props.activeSearch}
              idAction={this.props.idAction}
              actionType={this.props.actionType}
              onClickEditNote={this.props.onClickEditNote}
            />
          )}
          />

          <Route path="/view" render={() => (
            <NotesContainer
              noteTitle={this.props.noteTitle}
              noteContent={this.props.noteContent}
              addNoteEvent={false}
              showAllNotes={this.props.showAllNotes}
              idAction={this.props.idAction}
              actionType={this.props.actionType}
              onClickEditNote={this.props.onClickEditNote}
              idNoteSelected={this.props.idNoteSelected}
              showEditionBar={this.props.showEditionBar}
              getFolderName={this.props.getFolderName}
            />
          )}
          />

          <Route path='/tags' render={() => (
            <TagsContainer
              tagName={this.props.tagName}
              addTagEvent={false}
              showAllTags={this.props.showAllTags}
              idAction={this.props.idAction}
              actionType="viewTags"
              onClickEditTag={this.props.onClickEditTag}
              idTagSelected={this.props.idTagSelected}
              onClickAddTag={this.props.onClickAddTag}
            />
          )}
          />

          <Route path='/folders' render={() => (
          console.log("WIWIIWIWIWIWWIWIWIWIWIW"),
            <FoldersContainer
              folderName={this.props.tagName}
              addFolderEvent={false}
              showAllFolders={this.props.showAllFolders}
              idAction={this.props.idAction}
              actionType={this.props.actionType}
              onClickEditFolder={this.props.onClickEditFolder}
              idFolderSelected={this.props.idFolderSelected}
              onClickAddFolder={this.props.onClickAddFolder}
              onClickEditFolderNote={this.props.onClickEditFolderNote}
              idSelectedFolder={this.props.idSelectedFolder}
            />
          )}
          />

          <Route path="/addNote" render={() => (
            (
              <NotesContainer
                noteTitle={this.props.noteTitle}
                noteContent={this.props.noteContent}
                addNoteEvent={this.props.addNoteEvent}
                showAllNotes={this.props.showAllNotes}
                actionType={this.props.actionType}
                onClickEditNote={this.props.onClickEditNote}
                idNoteSelected={this.props.idNoteSelected}
                idSelectedFolder={this.props.idSelectedFolder}
                showEditionBar={this.props.showEditionBar}
                getFolderName={this.props.getFolderName}
              />)

          )}
          />

          <Route path='/add tags' render={() => (
            <AddNewElementContainer
              onClickAddElement={this.props.onClickAddElement}
              setTagName={this.props.setTagName}
              actionType={this.props.actionType}
              activeAddElement={this.props.activeAddElement}
              buttonName=""
              idAction={this.props.idAction}
            />
          )}
          />

          <Route path='/add folders' render={() => (
            <AddNewElementContainer
              onClickAddElement={this.props.onClickAddElement}
              setTagName={this.props.setTagName}
              actionType={this.props.actionType}
              activeAddElement={this.props.activeAddElement}
              buttonName=""
              idAction={this.props.idAction}
              idSelectedFolder={this.props.idSelectedFolder} />
          )}
          />
          <Route path='/addTags' render={() => (
            <TagsContainer
              tagName={this.props.tagName}
              addTagEvent={this.props.addTagEvent}
              showAllTags={this.props.showAllTags}
              actionType={this.props.actionType}
              onClickEditTag={this.props.onClickEditTag}
              idTagSelected={this.props.idTagSelected}
              onClickAddTag={this.props.onClickAddTag}
            />
          )}
          />

          <Route path='/addFolders' render={() => (
            console.log("WIWIIWIWIWIWWIWIWIWIWIW"),
            <FoldersContainer
              folderName={this.props.tagName}
              addFolderEvent={this.props.addFolderEvent}
              showAllFolders={this.props.showAllFolders}
              actionType={this.props.actionType}
              onClickEditFolder={this.props.onClickEditFolder}
              idFolderSelected={this.props.idFolderSelected}
              onClickAddFolder={this.props.onClickAddFolder}
              editFolderNote={this.props.editFolderNote}
            />
          )}
          />

            <Route path='/editFolderNote' render={() => (
            console.log("ESTOY ENTRANDO A CONTENEDOR DE FOLDERS!!!"),
            <FoldersContainer
              folderName={this.props.tagName}
              addFolderEvent={this.props.addFolderEvent}
              showAllFolders={this.props.showAllFolders}
              actionType={"editFolderNote"}
              onClickEditFolder={this.props.onClickEditFolder}
              idFolderSelected={this.props.idFolderSelected}
              onClickAddFolder={this.props.onClickAddFolder}
              onClickEditFolderNote={this.props.onClickEditFolderNote}
              idSelectedFolder={this.props.idSelectedFolder}
            />
          )}
          />
          <Route path="/" render={() => (
            <NotesContainer
              noteTitle={this.props.noteTitle}
              noteContent={this.props.noteContent}
              addNoteEvent={this.props.addNoteEvent}
              showAllNotes={this.props.showAllNotes}
              actionType={this.props.actionType}
              onClickEditNote={this.props.onClickEditNote}
              idNoteSelected={this.props.idNoteSelected}
              idSelectedFolder={this.props.idSelectedFolder}
              showEditionBar={this.props.showEditionBar}
              getFolderName={this.props.getFolderName}
            />
          )}
          />
        </Switch>


      </div>
    )
  }
}

export default InformationPanel;

