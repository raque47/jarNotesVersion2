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
    return (
      <NoteEdition resetContent={this.state.resetContent} resetTitle={this.state.resetTitle} saveNoteContent={this.getNoteContent} saveNoteTitle={this.getNoteTitle} onClickAddNote={this.addNoteEvent} />
    );
  },
});

module.exports = NoteEditionContainer;  