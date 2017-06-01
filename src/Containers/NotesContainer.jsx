import preload from '../../public/db.json';
import React, { Component } from 'react';
import Notes from '../Components/Notes/Notes';
import axios from '../../node_modules/axios';
import notesStyle from '../Components/Notes/_notes.scss'


class NotesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNote: false,
      allNotes: [],
      noteEvent: true,
      showSpecificNote: false,
      idNoteSelected: ""
    };
    this.showSpecificNote = this.showSpecificNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  } //Close the constructor

  showSpecificNote(id) {
    this.setState({ showSpecificNote: true, idNoteSelected: id, noteEvent: false });
  }

  addNote() {
    const tag1 = "592fe7c94a1c6e2e50b1e446";
    const tag2 = "592fe7ed4a1c6e2e50b1e447";
    const newNote = { noteTitle: this.props.noteTitle, noteContent: this.props.noteContent, tagsIds: [tag1, tag2], folderId: this.props.idSelectedFolder }
    const self = this;
    axios.post('http://localhost:3000/api/notes', newNote).then(() => {

      //Se realiza un get de todas las notas 
      self.getNotes();
    });
  }

  getNotes() {

    const self = this;
    axios.get('http://localhost:3000/api/notes').then(function (response) {
      self.setState({ allNotes: response.data, noteEvent: false });
    })
  }
  editNote(idNoteSelected, noteTitleSelected, noteContentSelected) {
    this.props.onClickEditNote(noteTitleSelected, noteContentSelected, idNoteSelected);
  }
  updateNote() {
    const tag1 = "592fe7c94a1c6e2e50b1e446";
    const tag2 = "592fe7ed4a1c6e2e50b1e447";
    const newNote = { _id: this.props.idNoteSelected, noteTitle: this.props.noteTitle, noteContent: this.props.noteContent, tagsIds: [tag1, tag2], folderId: this.props.idSelectedFolder }
    const self = this;
    axios.put('http://localhost:3000/api/notes', newNote).then(function (response) {
      self.getNotes();
    })
  }
  deleteNote() {
    const self = this;
    const note = { _id: this.props.idNoteSelected };
    axios.delete('http://localhost:3000/api/notes', { data: note }).then(function (response) {
      //Se realiza un get de todas las notas 
      self.getNotes();
    })
  }
  render() {
    const notes = this.state.allNotes;
    const self = this;
    let showNote = false;
    console.log("el action type en notes container es: " + this.props.actionType);
    console.log("el action type en notes container es: " + notes);
    switch (this.props.actionType) {
      case "viewNotes":
        if (this.state.noteEvent === true) {
          this.getNotes();
          this.state.noteEvent = false;
        }
        else {
          this.state.noteEvent = true;
        }
        break;
      case "addNote":
        if (this.state.noteEvent === true) {
          this.addNote();
          this.state.noteEvent = false;
        }
        else {
          this.state.noteEvent = true;
        }
        break;
      case "searchNotes":
        break;
      case "editNote":
        if (this.state.noteEvent === true) {
          this.updateNote();
          this.state.noteEvent = false;
        }
        else {
          this.state.noteEvent = true;
        }
        break;
      case "deleteNote":
        if (this.state.noteEvent === true) {
          this.deleteNote();
          this.state.noteEvent = false;
        }
        else {
          this.state.noteEvent = true;
        }
        break;
      case "editNoteFolder":
        if (this.state.noteEvent === true) {
          this.updateNote();
          this.state.noteEvent = false;
        }
        else {
          this.state.noteEvent = true;
        }
        break;
      default:
        this.state.noteEvent = true;
      //case "chooseTag":
        //this.getTagsOfNote();
      //break;
    }
    return <div className="containerOfElements">{notes.map((item) => {
      showNote = false;
      if (this.state.showSpecificNote === true) {
        if (item._id === this.state.idNoteSelected) {
          showNote = true;
        }
      }
      return <Notes
        key={item._id}
        noteId={item._id}
        showNote={showNote}
        titleNote={item.noteTitle}
        textNote={item.noteContent}
        showAllNotes={self.props.showAllNotes}
        onClickShowEvent={self.showSpecificNote}
        onClickEditEvent={self.editNote}
        showEditionBar={self.props.showEditionBar}
        idFolder={item.folderId}
        idTags={item.tagsIds}
        getFolderName={this.props.getFolderName}
        setActionGetTag={this.props.setActionGetTag} />
    })}</div>;
  }
}

export default NotesContainer;