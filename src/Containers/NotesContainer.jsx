const preload = require('../../public/db.json');
const React = require('react');
const Notes = require('../Components/Notes/Notes');
const axios = require('../../node_modules/axios');
const randomID = require('../../node_modules/random-id');
const notesStyle = require('../Components/Notes/_notes.scss');

const NotesContainer = React.createClass({
  getInitialState() {
    return {
      showNote: false,
      idNoteSelected: "",
      allNotes: "",
      noteEvent: true,
    }
  },

  editNote(idNoteSelected, noteTitleSelected, noteContentSelected){
    console.log("TENGO QUE EDITAR NOTA!!!! " + idNoteSelected +" " + noteTitleSelected + " " + noteContentSelected );
    this.props.onClickEditNote(noteTitleSelected, noteContentSelected);
    console.log();
  },
  componentWillMount(){
    //this.state.data = response.data del axios 
  },

  showSpecificNote(id) {
    let notes = "";
    const self = this;
    //  notes = this.state.data.map 
    axios.get('http://localhost:3000/notes').then(function (response) {
      const data = response.data;
      notes = data.map((item) => {
        if (item.noteId === id) {
          return <Notes
            key={item.noteId}
            noteId={item.noteId}
            showNote={true}
            titleNote={item.noteTitle}
            textNote={item.noteContent}
            showAllNotes={self.props.showAllNotes}
            onClickShowEvent={self.showSpecificNote}
            onClickEditEvent={self.editNote}
          />
        }
        else {
          return <Notes
            key={item.noteId}
            noteId={item.noteId}
            showNote={false}
            titleNote={item.noteTitle}
            textNote={item.noteContent}
            showAllNotes={self.props.showAllNotes}
            onClickShowEvent={self.showSpecificNote}
            onClickEditEvent={self.editNote}
          />
        }

      });
      self.setState({ allNotes: notes, noteEvent: false });
    })
  },
  setAllNotes(notes) {
    this.setState({ allNotes: notes, noteEvent: false });
  },
  showAllNotes() {
    axios.get('http://localhost:3000/notes').then(function (response) {
      const result = response.data;
      content = result.map((item) => {
          return <Notes
            key={item.noteId}
            noteId={item.noteId}
            showNote={false}
            titleNote={item.noteTitle}
            textNote={item.noteContent}
            showAllNotes={this.props.showAllNotes}
            onClickShowEvent={this.showSpecificNote}
            onClickEditEvent={this.editNote} />
        });

      this.setState({ allNotes: content, noteEvent: false });
    }.bind(this));
  },
  resetAction() {

  },
  addNote() {

    //Generate a random id for the new note
    const random = randomID(5, 0);
    const newNote = { noteId: random, noteTitle: this.props.noteTitle, noteContent: this.props.noteContent }

    var promiseShowNotes = "";
    var content = "";
    const self = this;
    var promiseAddNote = axios.post('http://localhost:3000/notes', newNote).then(function () {
      console.log('saved successfully');
      axios.get('http://localhost:3000/notes').then(function (response) {

        const result = response.data;
        prueba = response;

        content = result.map((item) => {
          return <Notes
            key={item.noteId}
            noteId={item.noteId}
            showNote={false}
            titleNote={item.noteTitle}
            textNote={item.noteContent}
            showAllNotes={self.props.showAllNotes}
            onClickShowEvent={self.showSpecificNote}
            onClickEditEvent={self.editNote}/>
        });

        self.props.noteEvent = false;
        self.setState({ allNotes: content, noteEvent: false });
      })
    });
  },


  render: function () {

    console.log("action type es:" + this.props.actionType);
    switch (this.props.actionType) {
      case "viewNotes":
        console.log("VIEW NOTES EVENT!!");
        if (this.state.noteEvent === true) {
          this.showAllNotes();
          this.state.noteEvent = false;
        }
        else {
          this.state.noteEvent = true;
        }
        break;
      case "addNote":
        console.log("ADD NOTE EVENT!!");
        if (this.state.noteEvent === true) {
          this.addNote();
          this.state.noteEvent = false;
        }
        else {
          this.state.noteEvent = true;
        }
        break;
      case "searchNotes":
        break;
    }
    return <div className="containerOfElements">{this.state.allNotes}</div>;
  }
});

module.exports = NotesContainer;