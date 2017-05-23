const preload = require('../../public/db.json');
const React = require('react');
const Notes = require('../Components/Notes/Notes');
const axios = require('../../node_modules/axios');
const randomID = require('../../node_modules/random-id');


const NotesContainer = React.createClass({
  getInitialState() {
    return {
      showNoteSelected: false,
      showNote: false,
      idNoteSelected: "",
      allNotes: "",
      addNoteEvent: true,
    }
  },
  showNoteEvent(id) {
    console.log("estoy en showNoteEvent" + id);
    if (this.state.showNote === false) {
      this.setState({ showNote: true, idNoteSelected: id });
    }
    else {
      this.setState({ showNote: false, idNoteSelected: id });
    }
  },
  showSpecificNote() {
    console.log("SHOW!!! SPECIFIC NOTE!!!");
    let notes = "";
    if (this.props.activeAddNote === true) {

      notes = preload.notes.map((item) => {

        if (item.noteId == this.state.idNoteSelected) {
          console.log("ENTRE AL IF");
          return <Notes
            key={item.noteId}
            noteId={item.noteId}
            showNote={this.state.showNote}
            activeAddNote="true"
            titleNote={item.noteTitle}
            textNote={item.noteContent}
            onClickShowEvent={this.showNoteEvent}
          />
        }
        else {
          return <Notes
            key={item.noteId}
            noteId={item.noteId}
            showNote={false}
            activeAddNote="true"
            titleNote={item.noteTitle}
            textNote={item.noteContent}
            onClickShowEvent={this.showNoteEvent}
          />
        }
      }

      );
    }
    return notes;
  },
  setAllNotes(notes) {
    this.setState({ allNotes: notes, addNoteEvent: false });
  },
  showAllNotes() {
    console.log("SHOW!!! ALL NOTES!!!");

    var promise = new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/notes').then(function (response) {
        resolve(response);
      });
    });

    var x = "";

    promise.then((response) => {
      const result = response.data;
      prueba = response;
      const notes = result.map((item) => {
        return <Notes
          key={item.noteId}
          noteId={item.noteId}
          showNote={false}
          activeAddNote="true"
          titleNote={item.noteTitle}
          textNote={item.noteContent}
          onClickShowEvent={this.showNoteEvent} />
      });

      x = notes;
      console.log("NOTAS!!" + x);
      return x;

      // this.setState({ allNotes: notes, addNoteEvent:false });


      // console.log("Yay! " + successMessage);
    });

  },
  resetAction() {

  },
  addNote() {

    console.log("ENTRE A ADD NOTE!");
    //Generate a random id for the new note
    const randomId = randomID(5, 0);
    const newNote = {
      id: randomId, noteTitle: this.props.noteTitle,
      noteContent: this.props.noteContent
    }

    var x = "";
    var promise = "";
    var promiseAddNote = new Promise((resolve, reject) => {
      axios.post('http://localhost:3000/notes', newNote).then(function () {
        resolve();
        console.log('saved successfully');
      });
    });

    var content = "";
    var promiseShowNotes = new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/notes').then(function (response) {

        const result = response.data;
        prueba = response;
        const notes = result.map((item) => {
          return <Notes
            key={item.noteId}
            noteId={item.noteId}
            showNote={false}
            activeAddNote="true"
            titleNote={item.noteTitle}
            textNote={item.noteContent}
            onClickShowEvent={this.showNoteEvent} />
        });
        resolve(notes);
      })
    });


    Promise.all([promiseAddNote, promiseShowNotes]).then(values => {
      console.log("values es: " + values);
      // this.setState({ allNotes: values });
      return values
    });

  },


  render: function () {

    // console.log("esto vale add note event: " + this.state.addNoteEvent);
    let actionResult = "";
    let promiseShowAllNotes = "";
    const m = "";
    switch (this.props.typeNotesAction) {
      case "viewNotes":
        actionResult = this.showAllNotes();
        break;
      case "viewSpecificNote":
        actionResult = this.showSpecificNote();
        break;
      case "addNote":
      /* if (this.props.addNoteEvent == true) {
      x= this.addNote();
      cino
      } */

      /* promiseShowAllNotes = new Promise((resolve, reject) => {
      const x = this.addNote();
      resolve(x);
      console.log('saved successfully');
      });
      break; */
    }

    /* promiseShowAllNotes.then(function (x) {
    return <div>
    {x}
    </div>
    }); */

    return null;
  }
});

module.exports = NotesContainer;