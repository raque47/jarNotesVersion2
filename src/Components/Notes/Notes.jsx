const React = require('react');
const notesStyle = require('./_notes.scss');

const Notes = React.createClass({
  showNote(event) {
    console.log("me estriparon a mi " + this.props.noteId);
    this.props.addNoteEvent = false;
    const idNoteSelected = this.props.noteId;
    this.props.onClickShowEvent(idNoteSelected);
  },
  editNote() {
    console.log("EDIT!! NOTEEEE!!");
  },
  render() {
    return (
      <div id= {this.props.noteId} className={"infoPanelElements borderStyle " +
        (this.props.showAllNotes ? "showComponent" : "hideComponent")} >
        <span className="noteAddedTitle">{this.props.titleNote}</span>
        <button className="buttons infoPanelButtons"
          onClick={this.showNote}><img
            src={require("../../images/view-button.svg")}
            className="navBar__images" /></button>
        <button className="buttons infoPanelButtons"
          onClick={this.editNote}><img
            src={require("../../images/edit-button.svg")}
            className="navBar__images" /></button>
        <p className={"noteContentFont " + (this.props.showNote ?
          "showComponent showNoteAnimation" :
          "hideComponent")}> {this.props.textNote}</p>
      </div>
    );
  },
});

module.exports = Notes;

