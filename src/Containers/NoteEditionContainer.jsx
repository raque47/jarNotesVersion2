const React = require('react');
const NoteEdition = require('../Components/NoteEdition/NoteEdition');

const NoteEditionContainer = React.createClass({
  getInitialState() {
    return {
      noteContent: "",
      resetContent: "",
      noteTitle: "",
      resetTitle: "",
    }
  },
  addNoteEvent() {
    this.setState({ resetContent: "", resetTitle: "", noteContent:"", noteTitle:""});
    this.props.onClickAddNote(this.state.noteContent, this.state.noteTitle);
  },
  getNoteContent(textAreaValue) {
    this.setState({ noteContent: textAreaValue, resetContent: textAreaValue });
  },
  getNoteTitle(title) {
    this.setState({ noteTitle: title, resetTitle:title });
  },
  render() {
    if(this.props.editNote===true){
      console.log("ENTRE A NOTE EDITION CONTAINER!!!");
      this.state.resetContent = this.props.noteContent;
      this.state.resetTitle = this.props.noteTitle;
      console.log("contenido y titulo es: " +  this.state.resetContent + " " + this.state.resetTitle );
    }
    else{
      console.log("ESTOY EN EDITION NOOOOOTE");
    }
    return (
      <NoteEdition resetContent={this.state.resetContent} resetTitle={this.state.resetTitle} getNoteContent={this.getNoteContent} getNoteTitle={this.getNoteTitle} onClickAddNote={this.addNoteEvent} />
    );
  },
});

module.exports = NoteEditionContainer;  