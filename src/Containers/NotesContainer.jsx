const preload = require('../../public/db.json');
const React = require('react');
const Notes = require('../Components/Notes/Notes');
const axios = require('../../node_modules/axios');
const randomID = require('../../node_modules/random-id');


const NotesContainer = React.createClass({
  getInitialState() {
    console.log("estoy en estado inicial!!");
    return {

      showNoteSelected: false,
      showNote: false,
      idNoteSelected: "",
      allNotes: "",
      addNoteEvent: this.props.addNoteEvent,
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
    //  console.log("all notes vale: " + this.state.allNotes[0].id)
    let notes = "";
    console.log("tam del preload es: " + preload.notes);
    if (this.props.activeAddNote === true) {

      notes = preload.notes.map((item) => {
        if (item.noteId === id) {
          console.log("ENTRE AL IF");
          return <Notes
            key={item.noteId}
            noteId={item.noteId}
            showNote={true}
            activeAddNote="true"
            titleNote={item.noteTitle}
            textNote={item.noteContent}
            showAllNotes={this.props.showAllNotes}
            onClickShowEvent={this.showSpecificNote}
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
            showAllNotes={this.props.showAllNotes}
            onClickShowEvent={this.showSpecificNote}
          />
        }


      }

      );

      console.log("notas en specific note es: " + notes);
      this.setState({ allNotes: notes, addNoteEvent:false });
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
          onClickShowEvent={this.showSpecificNote}
        />
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
      noteId: randomId, noteTitle: this.props.noteTitle,
      noteContent: this.props.noteContent
    }

    var x = "";
    var promiseShowNotes = "";
    var content = "";
    const self = this;
    /*   var promiseAddNote = new Promise((resolve, reject) => {
         axios.post('http://localhost:3000/notes', newNote).then(function () {
           resolve();
           console.log('saved successfully');
         });
       }); */

    var promiseAddNote = axios.post('http://localhost:3000/notes', newNote).then(function () {
      //   resolve();
      //    console.log('saved successfully');
      axios.get('http://localhost:3000/notes').then(function (response) {

        const result = response.data;
        prueba = response;

        console.log("props es: " + self.props.activeAddNote);
        self.props.activeAddNote = false;

        content = result.map((item) => {
          {console.log("SHOW VALE: " + self.props.showAllNotes)}
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


    // promiseAddNote.then(  promiseShowNotes = new Promise((resolve, reject) => {


    /*   promiseAddNote.then( axios.get('http://localhost:3000/notes').then(function (response) {
  
        const result = response.data;
        prueba = response;
       
        console.log("props es: " + self.props.activeAddNote );
         self.props.activeAddNote = false;
   
       result.map((item) => {
          return <Notes
            key={item.noteId}
            noteId={item.noteId}
            showNote={false}
            activeAddNote={true}
            titleNote={item.noteTitle}
            textNote={item.noteContent}
            onClickShowEvent={this.showNoteEvent} />
        }); 
   
  
  
  
      })) */
    // })
    // );


    /*  Promise.all([promiseAddNote]).then(values => {
       console.log("values es: " + values);
       this.setState({ allNotes: values, addNoteEvent:false});
       // return values
      });
   */
  },


  render: function () {

    // console.log("esto vale add note event: " + this.state.addNoteEvent);
    /* let actionResult = "";
     // let promiseShowAllNotes = "";
     const m = "";
     console.log("type action es: " + this.props.typeNotesAction);
     switch (this.props.typeNotesAction) {
       case "viewNotes":
         actionResult = this.showAllNotes();
         break;
       case "viewSpecificNote":
         actionResult = this.showSpecificNote();
         break;
       // return null;
       case "addNote":
         console.log("ADD NOTE CASE!");
      //   break;
            var promiseShowAllNotes = new Promise((resolve, reject) => {
              const x = this.addNote();
              resolve(x);
              console.log('datos son: ' +x);
            });
            promiseShowAllNotes.then(function (x) {
              console.log("ya tengo los resultados");
             /* return <div>
                {actionResult = x}
              </div> */
    //break;
    //   }); 

    //    console.log("props en switch " + this.props.activeAddNote);
    /* 
    }); */

    // return null;
    //   }

    console.log("props es: " + this.props.addNoteEven);
    console.log("state de add note event es es: " +   this.state.addNoteEvent);

    if (this.state.addNoteEvent === this.props.addNoteEvent || this.state.addNoteEvent ===true ) {
      this.addNote();
    }
    if (this.state.addNoteEvent === true) {
      this.state.addNoteEvent = false;
    }
    else {
      this.state.addNoteEvent = true;
    }
    console.log("todas las notas valen: " + this.state.allNotes);
    return <div>{this.state.allNotes}</div>;
  }
});

module.exports = NotesContainer;