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
      actionType: "",
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
      folderNameNoteEdited: "",
      noteTitleSelectedEdit: "",
      showInfoPanel: false,
      tagsNoteEdited: [],
      getTagsEvent: false,
      tagsNameNote: [],
      showModalTagSelection: false,
      tagNameNoteEdited: "",
      tagsNote:[],
      idTagsDetailNote:""
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
    this.showInfoNote = this.showInfoNote.bind(this);
    this.noteFolderInfo = this.noteFolderInfo.bind(this);
    this.setActionGetTags = this.setActionGetTags.bind(this);
    this.setTagsName = this.setTagsName.bind(this);
    this.closeInfoNotePanel = this.closeInfoNotePanel.bind(this);
    this.setTagsNote = this.setTagsNote.bind(this);
    this.setIdTagsNote = this.setIdTagsNote.bind(this);
  }
  mainButtonEvent(id) {
    this.setState({ activeSearch: false, activeView: false, activeAddElement: false, idAction: id, editionBarVisible: false, showInfoPanel: false, getTagsEvent: false, showModalTagSelection: false, actionType:"mainButton" });
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
    this.setState({ activeSearch: true, activeView: false, activeAddElement: false, idAction: id, showAllNotes: false, actionType: event, editionBarVisible: false, showInfoPanel: false, getTagsEvent: false, showModalTagSelection: false  });
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
    this.setState({ activeSearch: false, activeView: true, activeAddElement: false, idAction: id, showAllNotes: true, actionType: event, editionBarVisible: false, showInfoPanel: false, getTagsEvent: false, showModalTagSelection: false  });
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
    this.setState({ activeSearch: false, activeView: false, activeAddElement: true, idAction: id, showAllNotes: false, actionType: event, editionBarVisible: false, showInfoPanel: false, getTagsEvent: false, showModalTagSelection: false  });
  }
  chooseFolder(noteContent, noteTitle, action) {
    if (noteTitle === "") {
      noteTitle = "No Title"
    }
    console.log("ESTOY EN CHOOSE FOLDER!!!!!" + "el action type aqui vale: " + this.state.actionType + "action es: " + action);
    this.setState({ action: action, noteContent: noteContent, noteTitle: noteTitle, showAllNotes: true, actionType: "chooseFolder", showModal: true, editionBarVisible: false, showInfoPanel: false, getTagsEvent: false, showModalTagSelection: false });
  }
  addNote(idFolder, noteContent, noteTitle) {
    if (noteTitle === "") {
      noteTitle = "No Title"
    }
    console.log("la accion de add note es: " + this.state.action);
    if (this.state.action == "add") {
      console.log("LOS TAGS DE LA NOTA SON: " + this.state.tagsNote);
      this.setState({ idSelectedFolder: idFolder, showAllNotes: true, actionType: "addNote", showModal: false, editionBarVisible: false, getTagsEvent: false, showModalTagSelection: false  });
    }
    else if (this.state.action == "edit") {
      this.setState({ showAllNotes: true, noteContent: noteContent, noteTitle: noteTitle, actionType: "editNote", showModal: false, editionBarVisible: false, showInfoPanel: false, getTagsEvent: false, showModalTagSelection: false  });
    }
    else {
      console.log("El id folder elegido es: " + idFolder + " el id del folder perteneciente a la nota es: " +this.state.idSelectedFolder );
      if (idFolder != "" && idFolder != this.state.idSelectedFolder) {
        this.setState({ showAllNotes: true, idSelectedFolder: idFolder, noteContent: this.state.noteContentSelected, noteTitle: this.state.noteTitleSelected, actionType: "editNoteFolder", idNoteSelected: this.state.idNoteSelected, showModal: false, editionBarVisible: false, showInfoPanel: false, getTagsEvent: false, showModalTagSelection: false  });
      }
      else {
        this.setState({ showModal: false, actionType: "viewNotes", getTagsEvent: false, showModalTagSelection: false  });
        console.log("ESTOY ENTRANDO AL ELSE DE ADD NOOOOOTEEEEE!!!!!" + this.state.noteContentSelected);
      }
    }
  }
  editNote() {
    console.log("Estoy en edit note de main container!!");
    this.setState({ noteContent: this.state.noteContentSelected, noteTitle: this.state.noteTitleSelected, showAllNotes: true, actionType: "editNote", action: "edit", idNoteSelected: this.state.idNoteSelected, editionBarVisible: true, showInfoPanel: false, getTagsEvent: false, showModalTagSelection: false  });
  }
  getTagName(name) {
    console.log("ESTOY EN MAIN CONTAINER" + tagName);
    this.setState({ tagName: name, resetName: name, resetControl: true, getTagsEvent: false, showModalTagSelection: false  });
  }
  chooseTag() {
  /*  if (noteTitle === "") {
      noteTitle = "No Title"
    } */
    console.log("ESTOY EN CHOOSE TAG DE MAIN CONTAINER!!");
     this.setState({ showModalTagSelection: true, editionBarVisible: false, showAllNotes:false });
  }
  addTag(tagName, action) {
    console.log("aaaaaa!: ");
    if (tagtagName === "") {
      tagName = "No Title"
      console.log("bbbbb!: ");
    }
    if (action == "edit") {
      this.setState({ tagName: tagName, showAllNotes: true, actionType: "editTag", getTagsEvent: false, showModalTagSelection: false  });
      console.log("cccccccccc!: ");
    }
    else {
      console.log("dddddd EN MAINCONTAINER!: " + tagName);
      this.setState({ tagName: tagName, showAllTags: true, actionType: "addTag", getTagsEvent: false, showModalTagSelection: false  });
    }

  }
  showEditionBar(idNoteSelected, noteTitleSelected, noteContentSelected, idFolder, idTags) {
    this.state.idNoteSelected = idNoteSelected;
    this.state.noteTitleSelected = noteTitleSelected;
    this.state.noteContentSelected = noteContentSelected;
    this.state.idSelectedFolder = idFolder;
    this.state.tagsNoteEdited = idTags;

    //Se controla el tamaño del título
    if (noteTitleSelected != null && noteTitleSelected.length > 15) {
      this.state.noteTitleSelectedEdit = noteTitleSelected.slice(0, 15);
      this.state.noteTitleSelectedEdit = this.state.noteTitleSelectedEdit + "..."
    }
    else {
      this.state.noteTitleSelectedEdit = noteTitleSelected;
    }
    this.setState({ editionBarVisible: true, noteTitle: "", noteContent: "", showInfoPanel: false, getTagsEvent: true, showModalTagSelection: false  });
  }

  deleteNote() {
    this.setState({ showAllNotes: true, actionType: "deleteNote", idNoteSelected: this.state.idNoteSelected, editionBarVisible: false, showInfoPanel: false, getTagsEvent: false, showModalTagSelection: false  });
  }
  editNoteFolder(folderName) {
    this.setState({ showModal: true, actionType: "editNoteFolder", folderNameNoteEdited: folderName, showInfoPanel: false, getTagsEvent: false, showModalTagSelection: false  });
  }
  showInfoNote() {
    // this.setState({showInfoPanel:true});
  }
  noteFolderInfo(folderName) {
    if (this.state.actionType != "infoNote") {
      this.setState({  editionBarVisible: false, showInfoPanel: false, folderNameNoteEdited: folderName, actionType: "infoNote", noteTitle: this.state.noteTitleSelected, getTagsEvent: false, showModalTagSelection: false  });
    }
    else{
      this.setState({showInfoPanel:true, folderNameNoteEdited:folderName, actionType:"infoNote", noteTitle: this.state.noteTitleSelected,  getTagsEvent:false, showModalTagSelection: false });
    }


  }
  setActionGetTags(idTag) {
    this.setState({ actionType: "infoTagsNote", tagsNoteEdited: idTag, showModalTagSelection: false  });
  }
  setTagsName(tagsName) {
    this.setState({ tagsNameNote: tagsName, showModalTagSelection: false  });
  }
  closeInfoNotePanel() {
    this.state.actionType = "closeModal";
    this.setState({ showInfoPanel: false, showModalTagSelection: false  });
  }
  setTagsNote(tags){
     this.setState({ tagsNote:tags, showInfoPanel: false, actionType:"saveTags", showModalTagSelection: false  });
    console.log("los tags de la nota en main container son: " + this.state.tagsNote);
  }
  setIdTagsNote(idTags){
    console.log("el id del tag de la nota es: " + idTags[0] );
  //  this.setState({idTagsDetailNote:idTags});
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
          folderNameNoteEdited={this.state.folderNameNoteEdited}
          showInfoNote={this.showInfoNote}
          showInfoPanel={this.state.showInfoPanel}
          onClickNoteFolderInfo={this.noteFolderInfo}
          idTagsNote={this.state.tagsNoteEdited}
          setActionGetTag={this.setActionGetTags}
          setTagsName={this.setTagsName}
          getTagsEvent={this.state.getTagsEvent}
          tagsNameNote={this.state.tagsNameNote}
          closeInfoNotePanel={this.closeInfoNotePanel}
          showModalTagSelection = {this.state.showModalTagSelection}
          onClickAcceptTag={this.setTagsNote}
          tagNameNoteEdited = {this.state.tagNameNoteEdited}
          tagsNote={this.state.tagsNote}
          setIdTagsNote ={this.setIdTagsNote} 
        />)}
      />

    );
  }
};

export default MainContainer;  