import React from 'react';
import render from 'react-dom';
import Main from '../Components/Main/Main';

import { Link, Route, Switch } from 'react-router-dom';


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSearch: false,
      activeView: false,
      activeAddElement: false,
      idAction: "",
      noteTitle: "",
      noteContent: "",
      tagName: "",
      actionType: "viewTags",
      actionTypeElement: "viewElement",
      action: "",
      showAllNotes: true,
      showAllTags: false,
      idNoteSelected: "",
      idTagSelected: "",
      showModal: false,
      idSelectedFolder: "",
      editionBarVisible:false
    }
    this.mainButtonEvent = this.mainButtonEvent.bind(this);
    this.searchEvent = this.searchEvent.bind(this);
    this.viewEvent = this.viewEvent.bind(this);
    this.addElementEvent = this.addElementEvent.bind(this);
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.addTag = this.addTag.bind(this);
    this.chooseFolder = this.chooseFolder.bind(this);
    this.showEditionBar = this.showEditionBar.bind(this);

  }
  mainButtonEvent(id) {
    this.setState({ activeSearch: false, activeView: false, activeAddElement: false, idAction: id });
  }

  searchEvent(id) {
    let event = "";
    console.log("el id en main container search es:! " + id);
    if (id == "Notes") {
      event = "searchNotes"
    }
    else if (id == "Folders") {
      event = "searchFolders"
    }
    else {
      event = "searchTags"
    }
    this.setState({ activeSearch: true, activeView: false, activeAddElement: false, idAction: id, showAllNotes: false, actionType: event });
  }

  viewEvent(id) {
    let event = "";
    console.log("el id en main container view es:! " + id);
    if (id == "Notes") {
      event = "viewNotes"
    }
    else if (id == "Folders") {
      event = "viewFolders"
    }
    else {
      event = "viewTags"
    }
    this.setState({ activeSearch: false, activeView: true, activeAddElement: false, idAction: id, showAllNotes: true, actionType: event });
  }
  addElementEvent(id) {
    console.log("add element event!: ");
    let event = "";
    if (id == "Notes") {
      event = "addNote"
    }
    else if (id == "Folders") {
      event = "addFolder"
    }
    else {
      event = "addTag"
    }
    this.setState({ activeSearch: false, activeView: false, activeAddElement: true, idAction: id, showAllNotes: false, actionType: event });
  }
  chooseFolder(noteContent, noteTitle, action) {
    if (noteTitle === "") {
      noteTitle = "No Title"
    }
    console.log("ESTOY EN CHOOSE FOLDER!!!!!");
    this.setState({ action: action, noteContent: noteContent, noteTitle: noteTitle, showAllNotes: true, actionType: "chooseFolder", showModal: true });

  }
  addNote(idFolder) {
    console.log("el id del folder perteneciente a la nota es: " + idFolder );
    if (this.state.action == "edit") {
      this.setState({ idSelectedFolder: idFolder, showAllNotes: true, actionType: "editNote", showModal: false });
    }
    else {
      console.log("estoy en el action type add note!!");
      this.setState({ idSelectedFolder: idFolder, showAllNotes: true, actionType: "addNote", showModal: false });
    }
  }
  editNote(noteTitle, noteContent, idNoteSelected) {
    console.log("estoy en editNote en note container! con id " + idNoteSelected);
    this.setState({ noteContent: noteContent, noteTitle: noteTitle, showAllNotes: true, actionType: "editNote", idNoteSelected: idNoteSelected });
  }

  addTag(tagName, action) {
    console.log("ADDD TAGG main container!: ");
    if (tagName === "") {
      noteTitle = "No Title"
    }
    if (action == "edit") {
      this.setState({ tagName: tagName, showAllNotes: true, actionType: "editTag" });
    }
    else {
      console.log("estoy en el action type ADDD TAGG!!");
      this.setState({ tagName: tagName, showAllTags: true, actionType: "addTag" });
    }

    // console.log("El titulo de la nota a editar es: " + noteTitle + " con este contenido: " + noteContent + "este id: " + this.state.idNoteSelected );

  }
  showEditionBar(){
     console.log("ESTOY EN SHOW EDITION BAAAAAR");
      this.setState({editionBarVisible:true});
  }
  render() {
    return (

      <Route path="/" render={() => (
        <Main
          onClickMainButtonEvent={this.mainButtonEvent.bind(this)}
          onClickSearchEvent={this.searchEvent}
          onClickViewEvent={this.viewEvent}
          onClickAddEvent={this.addElementEvent}
          onClickAddNote={this.chooseFolder}
          onClickAddElement={this.props.addElement}
          activeSearch={this.state.activeSearch}
          activeView={this.state.activeView}
          activeAddElement={this.state.activeAddElement}
          idAction={this.state.idAction}
          noteContent={this.state.noteContent}
          noteTitle={this.state.noteTitle}
          typeNotesAction={this.state.typeNotesAction}
          actionType={this.state.actionType}
          showAllNotes={this.state.showAllNotes}
          onClickEditNote={this.editNote}
          idNoteSelected={this.state.idNoteSelected}
          showModal={this.state.showModal}
          onClickAcceptFolder={this.addNote}
          idSelectedFolder = {this.state.idSelectedFolder}
          showEditionBar = {this.showEditionBar}
          editionBarVisible = {this.state.editionBarVisible}
        />)}
      />

    );
  }
};

export default MainContainer;  