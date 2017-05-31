import React from 'react';
import notesStyle from './_notes.scss';
import {Link} from 'react-router-dom';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.showNote = this.showNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }
 showNote(event) {
    const idNoteSelected = this.props.noteId;
    this.props.onClickShowEvent(idNoteSelected);
    
    //Se debe llamar a la barra de edición
    this.props.showEditionBar();
  }
  editNote(event) {
    console.log("EDIT!! NOTEEEE!!");
    const idNoteSelected = this.props.noteId;
    const noteTitleSelected = this.props.titleNote;
    const noteContentSelected = this.props.textNote;
    this.props.onClickEditEvent(idNoteSelected, noteTitleSelected, noteContentSelected);
  }
  deleteNote(event){
    const idNoteSelected = this.props.noteId;
    this.props.onClickDeleteEvent(idNoteSelected);
  }
  render() {
    return (
      <div id= {this.props.noteId} className={"infoPanelElements borderStyle " +
        (this.props.showAllNotes ? "showComponent" : "hideComponent")} >
        <div className= "headerNoteContainer" >
          <span className="noteAddedTitle">{this.props.titleNote}</span>
          <button className="buttons infoPanelButtons"
            onClick={this.showNote}><img
              src={require("../../images/view-button.svg")}
              className="navBar__images" /></button>
        </div>
        <p className={"noteContentFont " + (this.props.showNote ?
          "showComponent showNoteAnimation" :
          "hideComponent")}> {this.props.textNote}</p>
      </div>
    );
  }
};

export default Notes;

