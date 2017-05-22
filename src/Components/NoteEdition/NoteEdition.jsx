const React = require('react');
const noteEditionStyle = require('./_noteEdition.scss');


const NoteEdition = React.createClass({
  addNoteEvent(){
    //this.props.
    console.log("AGREGAR NOTA!!!");
  },
  sendNoteContent(event){
    const textAreaValue=event.target.value;
    this.props.saveNoteContent(textAreaValue);
  },
  sendNoteTitle(event){
    const noteTitle=event.target.value;
    this.props.saveNoteTitle(noteTitle);
  },
 
  render() {
    return (
      <div className="form-group noteText">
        <input type="text" onChange={this.sendNoteTitle} value={this.props.resetTitle}  placeholder="Title" className="titleNoteControl" id="titleNote" />
        <textarea type="text" onChange={this.sendNoteContent} value={this.props.resetContent} className="form-control noteContentFont" rows="5" id="noteContent" placeholder="Write a new note..."></textarea>
        <div className="editionNotesControl">
          <button className="editionButtonControls"><img src={require('../../images/paint-button.svg')} className="navBar__images" data-toggle="tooltip" data-placement="top" title="Font Color" /></button>
          <button className="editionButtonControls"><img src={require('../../images/upload-button.svg')} className="navBar__images" data-toggle="tooltip" data-placement="top" title="Load Image" /></button>
          <button onClick={this.props.onClickAddNote} id="addNoteButton" className="editionButtonControls textButton"><span className="editionTextControl" data-toggle="tooltip" data-placement="top" title="Add Note">Save Note</span></button>
        </div>
      </div>
    );
  },
});

module.exports = NoteEdition;  