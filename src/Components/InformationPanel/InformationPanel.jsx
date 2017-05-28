import React from 'react';
import Title from '../Title/Title';
import Search from '../Search/Search';
import AddNewElement from '../AddNewElement/AddNewElement';
import NotesContainer from '../../Containers/NotesContainer';
import FoldersContainer from '../../Containers/FoldersContainer';
import informationPanelStyle from './_informationPanel.scss';

import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';


class InformationPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("estoy en information panel!!");
    return (
      <div id="panelInformation" className="infoPanel">

        <Title panelTitle={this.props.idAction} />

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
            showAllNotes={this.props.showAllNotes}
            idAction={this.props.idAction}
            actionType="viewNotes"
            onClickEditNote={this.props.onClickEditNote}
            idNoteSelected={this.props.idNoteSelected}
          />
        )}
        />


            <Route path="/search" render={() => (
              <Search
                activeSearch={this.props.activeSearch}
                idAction={this.props.idAction}
                actionType={this.props.actionType}
                onClickEditNote = {this.props.onClickEditNote}
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
              />
            )}
            />

            
            <Route path="/addNote" render={() => (
              <NotesContainer
                noteTitle={this.props.noteTitle}
                noteContent={this.props.noteContent}
                addNoteEvent={this.props.addNoteEvent}
                showAllNotes={this.props.showAllNotes}
                actionType={this.props.actionType}
              />
            )}
            />

          <Route path='/add tags' render={() => (
            <AddNewElement
              activeAddElement={this.props.activeAddElement}
              buttonName=""
              noteTitle={this.props.noteTitle}
              idAction={this.props.idAction} />
          )}
          />

        <Route path='/add tags' render={() => (
          <AddNewElement
            activeAddElement={this.props.activeAddElement}
            buttonName=""
            noteTitle={this.props.noteTitle}
            idAction={this.props.idAction} />
        )}
        />

        <Route path='/add folders' render={() => (
          <AddNewElement
            activeAddElement={this.props.activeAddElement}
            buttonName=""
            noteTitle={this.props.noteTitle}
            idAction={this.props.idAction} />
        )}
        />

         <Route path='/add folders' render={() => (
            <AddNewElement
              activeAddElement={this.props.activeAddElement}
              buttonName=""
              noteTitle={this.props.noteTitle}
              idAction={this.props.idAction} />
          )}
          />  
          <Route path="/" render={() => (
            <NotesContainer
              noteTitle={this.props.noteTitle}
              noteContent={this.props.noteContent}
              addNoteEvent={this.props.addNoteEvent}
              showAllNotes={this.props.showAllNotes}
              actionType={this.props.actionType}
            />
          )}
          />

      </div>
    )
  }
}
         
export default InformationPanel;

