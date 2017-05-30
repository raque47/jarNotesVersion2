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
                actionType="viewNotes"
                onClickEditNote = {this.props.onClickEditNote}
                idNoteSelected={this.props.idNoteSelected}
                showEditionBar = {this.props.showEditionBar}
              />
            )}
            />

          <Route path='/tags' render={() => (
          console.log("WIWIIWIWIWIWWIWIWIWIWIW"),
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
                idSelectedFolder = {this.props.idSelectedFolder}
                showEditionBar = {this.props.showEditionBar}
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
              actionType={this.props.actionType}
              activeAddElement={this.props.activeAddElement}
              buttonName=""
              noteTitle={this.props.noteTitle}
              idAction={this.props.idAction}
              getTagName={this.getTagName} />
          )}
          />
          <Route path='/addTags' render={() => (
            console.log("WIWIIWIWIWIWWIWIWIWIWIW"),
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
            <FoldersContainer
              onClickAddElement={this.props.onClickAddElement}
              actionType={this.props.actionType}
              activeAddElement={this.props.activeAddElement}
              buttonName=""
              noteTitle={this.props.noteTitle}
              idAction={this.props.idAction} />
          )}
          />

          <Route path="/" render={() => (
            console.log("ENTREE AQUIIII"),
            <NotesContainer
              noteTitle={this.props.noteTitle}
              noteContent={this.props.noteContent}
              addNoteEvent={this.props.addNoteEvent}
              showAllNotes={this.props.showAllNotes}
              actionType={this.props.actionType}
              onClickEditNote={this.props.onClickEditNote}
            />
          )}
          />
        </Switch>
      </div>
    )
  }
}

export default InformationPanel;

