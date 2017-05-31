import React from 'react';
import editionBarStyle from './_editionBar.scss';
import { Link } from 'react-router-dom';

class EditionBar extends React.Component {
  constructor(props) {
    super(props);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  deleteNote(event) {
    this.props.onClickDeleteEvent();
  }
  editNote(event) {
    console.log("EDIT!! NOTEEEE!!");
    this.props.onClickEditEvent();
  }
  editNoteFolder(){
   // this.props.onClickEditNoteFolder();
  }
  render() {

    return (
      <nav className="editionBar__nav">
        <button disabled = {this.props.displayEvent ? false : true} className="editionBar__button buttons"><img src={require('../../images/information.-button.svg')} className="navBar__images" /><span className={"editionBar__span buttonFont " + (this.props.displayEvent ? 'showControl' : 'hiddenControl')}><strong>Info</strong> <br /> {this.props.noteTitleSelected} </span></button>
        <button disabled = {this.props.displayEvent ? false : true} className="editionBar__button buttons" onClick={this.deleteNote}><img src={require('../../images/trash-button.svg')} className="navBar__images" /><span className={"editionBar__span buttonFont " + (this.props.displayEvent ? 'showControl' : 'hiddenControl')}><strong>Delete</strong> <br /> {this.props.noteTitleSelected}</span></button>
        <Link to={'/editNote'}>
          <button disabled = {this.props.displayEvent ? false : true} className="editionBar__button buttons"
            onClick={this.editNote}><img
              src={require("../../images/edit-green-button.svg")}
              className="navBar__images" /><span className={"editionBar__span buttonFont " + (this.props.displayEvent ? 'showControl' : 'hiddenControl')}><strong>Edit</strong> <br /> {this.props.noteTitleSelected}</span></button>
        </Link>
        <Link to={'/editFolderNote'}>
          <button disabled = {this.props.displayEvent ? false : true} className="editionBar__button buttons"
            onClick={this.editNoteFolder}><img
              src={require("../../images/edit-folder-button.svg")}
              className="navBar__images" /><span className={"editionBar__span buttonFont " + (this.props.displayEvent ? 'showControl' : 'hiddenControl')}><strong>Edit Folder from </strong> <br /> {this.props.noteTitleSelected}</span></button>
        </Link>

      </nav>
    );
  }
};

export default EditionBar;


