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
    return (
      <div id="panelInformation" className="infoPanel">

        <Title panelTitle={this.props.idAction} />

        <TagsContainer
          elementName={this.props.elementName}
          addTagEvent={false}
          showAllTags={this.props.showAllTags}
          idAction={this.props.idAction}
          actionType={"infoTagsNote"}
          secondActionType = {this.props.actionType}
          onClickEditTag={this.props.onClickEditTag}
          idTagSelected={this.props.idTagSelected}
          onClickAddTag={this.props.onClickAddTag}
          idTagsNote={this.props.idTagsNote}
          getTagsName={this.props.getTagsName}
          setTagsName={this.props.setTagsName}
          getTagsEvent={this.props.getTagsEvent}
          tagsNote={this.props.tagsNote}
        />

        <Switch>
          <Route path="/search" render={() => (
            <TagsContainer
              activeSearch={this.props.activeSearch}
              idAction={this.props.idAction}
              //actionType={this.props.actionType}
              //onClickEditNote={this.props.onClickEditNote}
              elementName={this.props.elementName}
              addTagEvent={false}
              showAllTags={this.props.showAllTags}
              actionType="viewTags"
              onClickEditTag={this.props.onClickEditTag}
              idTagSelected={this.props.idTagSelected}
              onClickAddTag={this.props.onClickAddTag}
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
              setActionGetTag={this.props.setActionGetTag}
            />
          )}
          />

          <Route path='/assignTag' render={() => (
            <TagsContainer
              elementName={this.props.elementName}
              addTagEvent={false}
              showAllTags={this.props.showAllTags}
              idAction={this.props.idAction}
              actionType="viewTags"
              onClickEditTag={this.props.onClickEditTag}
              idTagSelected={this.props.idTagSelected}
              onClickAddTag={this.props.onClickAddTag}
              search = {false}
            />
          )}
          />

          <Route path='/tags' render={() => (
            <TagsContainer
              elementName={this.props.elementName}
              addTagEvent={false}
              showAllTags={this.props.showAllTags}
              idAction={this.props.idAction}
              actionType="viewTags"
              onClickEditTag={this.props.onClickEditTag}
              idTagSelected={this.props.idTagSelected}
              onClickAddTag={this.props.onClickAddTag}
              search = {false}
            />
          )}
          />

          <Route path='/folders' render={() => (
            <FoldersContainer
              elementName={this.props.elementName}
              addFolderEvent={false}
              showAllFolders={this.props.showAllFolders}
              idAction={this.props.idAction}
              actionType="viewFolders"
              onClickEditFolder={this.props.onClickEditFolder}
              idFolderSelected={this.props.idFolderSelected}
              onClickAddFolder={this.props.onClickAddFolder}
              onClickEditNoteFolder={this.props.onClickEditNoteFolder}
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
                setActionGetTag={this.props.setActionGetTag}
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
              elementName={this.props.elementName}
              addTagEvent={this.props.addTagEvent}
              showAllTags={this.props.showAllTags}
              actionType={this.props.actionType}
              onClickEditTag={this.props.onClickEditTag}
              idTagSelected={this.props.idTagSelected}
              onClickAddTag={this.props.onClickAddTag}
              search = {false}
            />
          )}
          />

          <Route path='/addFolders' render={() => (
            <FoldersContainer
              elementName={this.props.elementName}
              addFolderEvent={this.props.addTagEvent}
              showAllFolders={this.props.showAllTags}
              actionType={this.props.actionType}
              editFolderNote={this.props.editFolderNote}
              onClickEditFolder={this.props.onClickEditTag}
              idFolderSelected={this.props.idTagSelected}
              onClickAddFolder={this.props.onClickAddTag}
            />
          )}
          />

          <Route path='/editFolderNote' render={() => (
            <FoldersContainer
              folderName={this.props.tagName}
              addFolderEvent={this.props.addFolderEvent}
              showAllFolders={this.props.showAllFolders}
              actionType={"editFolderNote"}
              onClickEditFolder={this.props.onClickEditFolder}
              idFolderSelected={this.props.idFolderSelected}
              onClickAddFolder={this.props.onClickAddFolder}
              onClickEditNoteFolder={this.props.onClickEditNoteFolder}
              idSelectedFolder={this.props.idSelectedFolder}
            />
          )}
          />

          <Route path='/infoNote' render={() => (
            <FoldersContainer
              folderName={this.props.tagName}
              addFolderEvent={this.props.addFolderEvent}
              showAllFolders={this.props.showAllFolders}
              actionType={"infoNote"}
              onClickEditFolder={this.props.onClickEditFolder}
              idFolderSelected={this.props.idFolderSelected}
              onClickAddFolder={this.props.onClickAddFolder}
              idSelectedFolder={this.props.idSelectedFolder}
              onClickNoteFolderInfo={this.props.onClickNoteFolderInfo}
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
              getTagsName={this.props.getTagsName}
              setActionGetTag= {this.props.setActionGetTag}
            />
          )}
          />
        </Switch>


      </div>
    )
  }
}

export default InformationPanel;

