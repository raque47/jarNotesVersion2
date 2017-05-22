const React = require('react');
const Notes = require('../Components/Notes/Notes');
// const dataBase = require('../../../public/db.json');
import preload from '../../../public/db.json';

const NotesContainer = React.createClass({
  getInitialState() {
    return {
      showNote: false
    }
  },
  showNoteEvent() {
    console.log("estoy en showNoteEvent");
    if (this.state.showNote === false) {
      this.setState({ showNote: true });
    }
    else {
      this.setState({ showNote: false });
    }
  },
  render: function () {

   {/* if (this.props.totalNotes > 0) {
      var notesComponents = this.props.totalNotes.map(function (note) {
        return <Notes
          showNote={this.state.showNote} onClickShowEvent={this.showNoteEvent} activeAddNote={this.props.activeAddNote}
          titleNote={this.props.noteTitle} textNote={this.props.noteContent} />;
      });
      return <div>{notesComponents}</div>;
    }
    return null; */ }

    return <Notes showNote={this.state.showNote} onClickShowEvent={this.showNoteEvent} activeAddNote={this.props.activeAddNote} titleNote={this.props.noteTitle} textNote={this.props.noteContent} />
  }
});

module.exports = NotesContainer;  