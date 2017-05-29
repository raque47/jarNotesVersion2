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
      showSpecificNote:false,
      idNoteSelected: ""
    };
    this.showSpecificNote = this.showSpecificNote.bind(this);
  } //Close the constructor

  componentWillMount() {

    console.log("action type es:" + this.props.actionType);
    console.log("ESTOY EN NOTES CONTAINER!!!!");

  }

  getAllNotes(showNotes) {
    const self = this;
    let result;

  }

  showSpecificNote(id) {
    console.log("show specific!!!");
    this.setState({showSpecificNote:true, idNoteSelected:id});

  }

  render() {
    const notes = this.state.allNotes;
    const self = this;
    console.log("ENTRE A RENDER DE UNA VEZ!");
    let promiseAddNote;
    let showNote = false;

    switch (this.props.actionType) {
      case "viewNotes":
        const self = this;
        console.log("VIEW NOTES EVENT!!");
        if (this.state.noteEvent === true) {
          axios.get('http://localhost:3000/api/notes').then(function (response) {
            self.setState({ allNotes: response.data });
          })
          this.state.noteEvent = false;
        }
        else {
          this.state.noteEvent = true;
        }
        break;
      case "addNote":
        console.log("ADD NOTE EVENT!!");
        if (this.state.noteEvent === true) {
          const newNote = { noteTitle: this.props.noteTitle, noteContent: this.props.noteContent }
          const self = this;
          promiseAddNote = axios.post('http://localhost:3000/api/notes', newNote).then(() => {

            //Se realiza un get de todas las notas para obtener 
            axios.get('http://localhost:3000/api/notes').then(function (response) {
              self.setState({ allNotes: response.data });
            })
          });
          this.state.noteEvent = false;
        }
        else {
          this.state.noteEvent = true;
        }
        break;
      case "searchNotes":
        break;
      case "editNote":
        console.log("ID EN ACTION NOTES CONTAINER ES: " + this.props.idNoteSelected);
        if (this.state.noteEvent === true) {
          //   this.updateNote();
          this.state.noteEvent = false;
        }
        else {
          this.state.noteEvent = true;
        }
        break;
    }
    return <div className="containerOfElements">{notes.map((item) => {
      showNote = false; 
      if(this.state.showSpecificNote===true){
        console.log("el id es: " + this.state.idNoteSelected);
        console.log("entre a show specific note!! verdadero")
        if(item.id === this.state.idNoteSelected){
          showNote = true;
        }
      }
      console.log("showNote vale: " + showNote);
      return <Notes
        key={item.id}
        noteId={item.id}
        showNote={showNote}
        titleNote={item.noteTitle}
        textNote={item.noteContent}
        showAllNotes={self.props.showAllNotes}
        onClickShowEvent={self.showSpecificNote}
        onClickEditEvent={self.editNote} />
    })}</div>;
  }
}

export default NotesContainer;