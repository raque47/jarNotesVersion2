import React from 'react';
import noteEditionStyle from './_noteEdition.scss';

import { Link } from 'react-router-dom';


class NoteEdition extends React.Component {
  constructor(props) {
    super(props);
    this.sendNoteContent = this.sendNoteContent.bind(this);
    this.sendNoteTitle = this.sendNoteTitle.bind(this);
   // this.addNote = this.addNote.bind(this);
  }
  sendNoteContent(event) {
    const textAreaValue = event.target.value;
    this.props.getNoteContent(textAreaValue);
  }
  sendNoteTitle(event) {
    const noteTitle = event.target.value;
    this.props.getNoteTitle(noteTitle);
  }
 /* addNote() {
    if(this.props.actionType=="editNote"){
      console.log("ESTOY EN EL TRUE DE EDIT NOOOOTE EN NOTE EDITION!!!");
      this.props.onClickAcceptFolder();
    }
    else{
       console.log("ESTOY EN EL FAAAALSE DE EDIT NOOOOTE EN NOTE EDITION!!!");
       this.props.onClickAddNote();
    } 

  
   // this.props.modalId.modal('show');
  } */
  render() {
    return (
      <div className="form-group noteText">
        <input type="text" onChange={this.sendNoteTitle} value={this.props.resetTitle} placeholder="Title" className="titleNoteControl" id="titleNote" />
        <textarea type="text" onChange={this.sendNoteContent} value={this.props.resetContent} className="form-control noteContentFont" rows="5" id="noteContent" placeholder="Write a new note..."></textarea>
        <div className="editionNotesControl">
          <button className="editionButtonControls"><img src={require('../../images/paint-button.svg')} className="navBar__images" data-toggle="tooltip" data-placement="top" title="Font Color" /></button>
          <button className="editionButtonControls"><img src={require('../../images/upload-button.svg')} className="navBar__images" data-toggle="tooltip" data-placement="top" title="Load Image" /></button>
          <div className="textButtons">
            <Link to={'/assignTag'}>
              <button  onClick={this.props.onClickAssignTag} id="chooseTagButton" className="editionButtonControls textButton">
                <span className="editionTextControl" data-toggle="tooltip" data-placement="top" title="Assign Tags">Assign Tags</span>
              </button>
            </Link>
            <Link to={'/addNote'}>
              <button onClick={this.props.onClickAddNote} id="addNoteButton" className="editionButtonControls textButton">
                <span className="editionTextControl" data-toggle="tooltip" data-placement="top" title="Add Note">Save Note</span>
              </button>
            </Link>
            </div>
        </div>
      </div>
    );
  }
}

export default NoteEdition;  