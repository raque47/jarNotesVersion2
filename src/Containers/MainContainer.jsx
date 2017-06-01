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
      editionBarVisible: false,
      noteTitleSelected: "",
      noteContentSelected: "",
      folderNameNoteEdited:"",
      noteTitleSelectedEdit:"",
      showModalTagSelection: false,
      tagNameNoteEdited: "",
    }
    this.mainButtonEvent = this.mainButtonEvent.bind(this);
    this.searchEvent = this.searchEvent.bind(this);
    this.viewEvent = this.viewEvent.bind(this);
    this.addElementEvent = this.addElementEvent.bind(this);
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.addTag = this.addTag.bind(this);
    this.getTagName = this.getTagName.bind(this);
    //this.addFolder = this.addFolder.bind(this);
    this.chooseFolder = this.chooseFolder.bind(this);
    this.chooseTag = this.chooseTag.bind(this);
    this.showEditionBar = this.showEditionBar.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.editNoteFolder = this.editNoteFolder.bind(this);

  }
  mainButtonEvent(id) {
    this.setState({ activeSearch: false, activeView: false, activeAddElement: false, idAction: id, editionBarVisible: false });
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
    this.setState({ activeSearch: true, activeView: false, activeAddElement: false, idAction: id, showAllNotes: false, actionType: event, editionBarVisible: false });
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
    this.setState({ activeSearch: false, activeView: true, activeAddElement: false, idAction: id, showAllNotes: true, actionType: event, editionBarVisible: false });
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
    this.setState({ activeSearch: false, activeView: false, activeAddElement: true, idAction: id, showAllNotes: false, actionType: event, editionBarVisible: false });
  }
  chooseFolder(noteContent, noteTitle, action) {
    if (noteTitle === "") {
      noteTitle = "No Title"
    }
    console.log("ESTOY EN CHOOSE FOLDER!!!!!" + "el action type aqui vale: " + this.state.actionType + "action es: " + action);
      this.setState({ action: action, noteContent: noteContent, noteTitle: noteTitle, showAllNotes: true, actionType: "chooseFolder", showModal: true, editionBarVisible: false });
  }
  addNote(idFolder, noteContent, noteTitle) {
    if (noteTitle === "") {
      noteTitle = "No Title"
    }
    if (this.state.action == "add") {
      this.setState({ idSelectedFolder:idFolder, showAllNotes: true, actionType: "addNote", showModal: false, editionBarVisible: false });
    }
    else if(this.state.action=="edit") {
      this.setState({ showAllNotes: true, 
                      noteContent: noteContent, noteTitle: noteTitle, actionType: "editNote", showModal: false, editionBarVisible: false });
    }
    else{
      console.log("ESTOY ENTRANDO AL ELSE DE ADD NOOOOOTEEEEE!!!!!" + this.state.noteContentSelected);
      this.setState({ showAllNotes: true, idSelectedFolder:idFolder, noteContent: this.state.noteContentSelected, noteTitle: this.state.noteTitleSelected, actionType: "editNoteFolder", idNoteSelected: this.state.idNoteSelected, showModal: false, editionBarVisible: false });
    }
  }
  editNote() {
    console.log("Estoy en edit note de main container!!");
    this.setState({ noteContent: this.state.noteContentSelected, noteTitle: this.state.noteTitleSelected, showAllNotes: true, actionType: "editNote", idNoteSelected: this.state.idNoteSelected, editionBarVisible: true });
  }
  getTagName(name) {
    console.log("ESTOY EN MAIN CONTAINER" + tagName);
    this.setState({ tagName: name, resetName: name, resetControl: true });
  }
  chooseTag(noteContent, noteTitle) {
    if (noteTitle === "") {
      noteTitle = "No Title"
    }
     this.setState({ actionType: "chooseTag", showModalTagSelection: true, editionBarVisible: false, showAllNotes:false });
     this.state.showModalTagSelection = true;
  }
  addTag(tagName, action) {
    console.log("aaaaaa!: ");
    if (tagtagName === "") {
      tagName = "No Title"
      console.log("bbbbb!: ");
    }
    if (action == "edit") {
      this.setState({ tagName: tagName, showAllNotes: true, actionType: "editTag" });
      console.log("cccccccccc!: ");
    }
    else {
      console.log("dddddd EN MAINCONTAINER!: " + tagName);
      this.setState({ tagName: tagName, showAllTags: true, actionType: "addTag" });
    }

  }
  showEditionBar(idNoteSelected, noteTitleSelected, noteContentSelected, idFolder) {
    // console.log("ESTOY EN SHOW EDITION BAAAAAR");
    console.log("el id del folder al que pertenece la nota a editar es: " + idFolder);
    this.state.idNoteSelected = idNoteSelected;
    this.state.noteTitleSelected = noteTitleSelected;
    this.state.noteContentSelected = noteContentSelected;
    this.state.idSelectedFolder = idFolder;

    //Se controla el tamaño del título
    if(noteTitleSelected.length>15){
      console.log("ENTRE AL IF DE TAMANO 12!!!");
      this.state.noteTitleSelectedEdit = noteTitleSelected.slice(0,15);
      this.state.noteTitleSelectedEdit = this.state.noteTitleSelectedEdit + "..."
      console.log("el titulo ya con slice es: " + this.state.noteTitleSelectedEdit);
    }
    else{
       this.state.noteTitleSelectedEdit = noteTitleSelected;
    }
    console.log("El titulo de la nota a mostrar barra es: " + noteTitleSelected + "con esta longitud: " + noteTitleSelected.length + " con contenido: " + noteContentSelected);
    this.setState({ editionBarVisible: true, noteTitle: "", noteContent: "",   });
  }

  deleteNote() {
    console.log("ESTOY EN DELETE NOTE DE MAIN CONTAINER!!");
    this.setState({ showAllNotes: true, actionType: "deleteNote", idNoteSelected: this.state.idNoteSelected, editionBarVisible: false });
  }
  editNoteFolder(folderName){
    console.log("EL NOMBRE DEL FOLDER ES: " +  folderName);
     this.setState({showModal: true, actionType: "editNoteFolder", folderNameNoteEdited:folderName });
  }
  render() {
    return (
      <Route path="/" render={() => (
        console.log("ID DEL FOLDER A RENDEREAR!!!!" +  this.state.showModalTagSelection ),
        <Main
          onClickMainButtonEvent={this.mainButtonEvent.bind(this)}
          onClickSearchEvent={this.searchEvent}
          onClickViewEvent={this.viewEvent}
          onClickAddEvent={this.addElementEvent}
          onClickAddNote={this.chooseFolder}
          onClickAssignTag={this.chooseTag}
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
          onClickEditEvent={this.editNote}
          idNoteSelected={this.state.idNoteSelected}
          onClickAddTag={this.addTag}
          idTagSelected={this.state.idTagSelected}
          tagName={this.state.tagName}
          showAllTags={this.state.showAllTags}
          getTagName={this.getTagName}
          showModal={this.state.showModal}
          onClickAcceptFolder={this.addNote}
          idSelectedFolder={this.state.idSelectedFolder}
          showEditionBar={this.showEditionBar}
          editionBarVisible={this.state.editionBarVisible}
          noteTitleSelected={this.state.noteTitleSelectedEdit}
          onClickDeleteEvent={this.deleteNote}
          folderName={this.state.folderNameNoteEdited}
          onClickEditNoteFolder={this.editNoteFolder}
          folderNameNoteEdited = {this.state.folderNameNoteEdited}
          showModalTagSelection = {this.state.showModalTagSelection}
          onClickAcceptTag={this.addNote}
          tagNameNoteEdited = {this.state.tagNameNoteEdited}


        />)}
      />

    );
  }
};

export default MainContainer;  