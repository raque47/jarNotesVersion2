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
      allNotes: ""
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
    this.setState({ allNotes: notes });
  },
  showAllNotes() {
    console.log("SHOW!!! ALL NOTES!!!");

    axios.get('http://localhost:3000/notes').then(function (response) {
      console.log(response.data[0]);
      console.log(preload);
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
      this.setState({ allNotes: notes });
    }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
  },
  resetAction() {
    this.setState({});
  },
  addNote() {
    //Generate a random id
    const randomId = randomID(5, 0);

    //const note={"noteId": randomId, "noteTitle": this.props.noteTitle,  "noteContent": this.props.noteContent };
    //console.log("la nota que voy a crear es: " + this.props.noteTitle + " " + this.props.noteContent);

   axios.get('http://localhost:3000/notes').then(function (response) {
      console.log(response.data);
      let data = response.data;
      console.log(data[0])
   //   const note =  { noteId: randomId, noteTitle: "adios", noteContent: "hola" };
      data[data.length] = { id: randomId, noteTitle: this.props.noteTitle,  noteContent: this.props.noteContent };

      console.log("length es: " + data[2].id );

  //    console.log("data tiene " + data);
      //console.log(data[3]);
 //     const x = { randomId:{noteTitle: "adios", noteContent: "hola"} };
    const m = [{id: randomId, noteTitle: this.props.noteTitle,  noteContent: this.props.noteContent}]

      axios.put('http://localhost:3000/notes', m )
        .then(function (response) {
          console.log('saved successfully')
        }); 
 
    }.bind(this)).
    catch(function (error) {
      console.log(error);
    }); 

    /*  axios.get('http://localhost:3000/notes').then(function (response) {
      console.log(response.data[0]);
      console.log(preload);
      const result = response.data;
      prueba = response;
    })
      .catch(function (error) {
        console.log(error);
      }); */
  },
  render: function () {

    let actionResult = "";
    switch (this.props.typeNotesAction) {
      case "viewNotes":
        actionResult = this.showAllNotes();
        break;
      case "viewSpecificNote":
        actionResult = this.showSpecificNote();
        break;
      case "addNote":
        this.addNote();
        break; 
    }


    return <div>
      {actionResult}
    </div> 

    /* const actionResult="";
     // const actionResult = this.showAllNotes();
     this.showAllNotes();
      return <div>{this.state.allNotes}</div>; */

  }
});

module.exports = NotesContainer;