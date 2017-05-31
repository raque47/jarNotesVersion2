import React from 'react';
import notesStyle from './_notes.scss';
import {Link} from 'react-router-dom';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.showNote = this.showNote.bind(this);
  }
 showNote(event) {
    const idNoteSelected = this.props.noteId;
    const noteTitleSelected = this.props.titleNote;
    const noteContentSelected = this.props.textNote;
    this.props.onClickShowEvent(idNoteSelected);
   // this.props.getNoteInfo(idNoteSelected);
   console.log("El folder al que pertenece esa nota es: " + this.props.idFolder);
    //Se debe llamar a la barra de edición
   // this.props.getFolderName(this.props.idFolder);
    this.props.showEditionBar(idNoteSelected, noteTitleSelected, noteContentSelected, this.props.idFolder);
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

