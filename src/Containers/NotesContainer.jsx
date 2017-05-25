const preload = require('../../public/db.json');
const React = require('react');
const Notes = require('../Components/Notes/Notes');
const axios = require('../../node_modules/axios');
const randomID = require('../../node_modules/random-id');

const NotesContainer = React.createClass({
  getInitialState() {
    console.log("estoy en estado inicial!!");
    return {
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

  showSpecificNote(id) {
    console.log("SHOW!!! SPECIFIC NOTE!!!" + id);
    let notes = "";
    const self = this;
    axios.get('http://localhost:3000/notes').then(function (response) {
      const data = response.data;
      notes = data.map((item) => {
        if (item.noteId === id) {
          console.log("ENTRE AL IF");
          return <Notes
            key={item.noteId}
            noteId={item.noteId}
            showNote={true}
            activeAddNote="true"
            titleNote={item.noteTitle}
            textNote={item.noteContent}
            showAllNotes={self.props.showAllNotes}
            onClickShowEvent={self.showSpecificNote}
          />
        }
        else {
          console.log("ENTRE AL ELSE con note id del json" + item.noteId + " presionado " + id);
          return <Notes
            key={item.noteId}
            noteId={item.noteId}
            showNote={false}
            activeAddNote="true"
            titleNote={item.noteTitle}
            textNote={item.noteContent}
            showAllNotes={self.props.showAllNotes}
            onClickShowEvent={self.showSpecificNote}
          />
        }

      });
      console.log("notas en specific note es: " + notes);
      self.setState({ allNotes: notes, addNoteEvent: false });
    })
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
          onClickShowEvent={this.showSpecificNote}
        />
      });

      x = notes;
      console.log("NOTAS!!" + x);
      return x;
    });

  },
  resetAction() {

  },
  addNote() {

    console.log("ENTRE A ADD NOTE! " + "title es: " + this.props.noteTitle + " content es: " + this.props.noteTitle);
    //Generate a random id for the new note
    const random = randomID(5, 0);


    const newNote = {
      noteId: random, noteTitle: this.props.noteTitle,
      noteContent: this.props.noteContent
    }

    /*const prueba2 = {
    noteId: "2", noteTitle:"hello", noteContent: "bye"

  } */

    var x = "";
    var promiseShowNotes = "";
    var content = "";
    const self = this;
    var promiseAddNote = axios.post('http://localhost:3000/notes', newNote).then(function () {
      //   resolve();
      console.log('saved successfully');
      axios.get('http://localhost:3000/notes').then(function (response) {

        const result = response.data;
        prueba = response;

        console.log("props es: " + self.props.activeAddNote);
        self.props.activeAddNote = false;

        content = result.map((item) => {
          { console.log("SHOW VALE: " + self.props.showAllNotes) }
          return <Notes
            key={item.noteId}
            noteId={item.noteId}
            showNote={false}
            activeAddNote={self.props.activeAddNote}
            titleNote={item.noteTitle}
            textNote={item.noteContent}
            showAllNotes={self.props.showAllNotes}
            onClickShowEvent={self.showSpecificNote} />
        });

        self.props.addNoteEvent = false;
        console.log("self props es: " + self.props.addNoteEvent);
        self.setState({ allNotes: content, addNoteEvent: false });

      })


    });
    /* const prueba= {
       noteId: "2", noteTitle:"hello", noteContent: "bye"
   
     }
    axios.post('http://localhost:3000/notes', prueba).then(function (response) {
      console.log("EXITOOOOO! " + response.data)
      console.log("saved!");
    }); */



  },


  render: function () {
    console.log("props es: " + this.props.addNoteEvent);
    console.log("state de add note event es es: " + this.state.addNoteEvent);

    if (this.state.addNoteEvent === this.props.addNoteEvent) {
      this.addNote();
    }

    if (this.state.addNoteEvent === true) {
      this.state.addNoteEvent = false;
    }
    else {
      this.state.addNoteEvent = true;
    }

    console.log("PRUEEEEBA");
    console.log("todas las notas valen: " + this.state.allNotes);
    return <div>{this.state.allNotes}</div>;
  }
});

module.exports = NotesContainer;