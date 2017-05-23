const React = require('react');
const render = require('react-dom');
const Main = require('../Components/Main/Main');

const reactRouter = require('react-router-dom');
const Link = reactRouter.Link;
const Route = reactRouter.Route;
const Switch =reactRouter.Switch;


const MainContainer = React.createClass({

  getInitialState: function () {
    return {
      activeSearch: false,
      activeView: false,
      activeAddElement: false,
      idAction: "",
      activeAddNote: false,
      noteTitle: "",
      noteContent: "",
      note: {
        title: "",
        content: ""
      },
      totalNotes: [{note:{title:"Hello", "content":"Bye", id:"2"}}],
    };
  },
  createNote: function () {
    console.log("es una prueba jeje!");
    /*  var arrayNotes = this.state.notes;
      arrayNotes.push(<Notes />);
      this.setState({ notes: arrayNotes }); */
  },

  mainButtonEvent(id) {
    this.setState({ activeSearch: false, activeView: false, activeAddElement: false, idAction: id, activeAddNote: false });
    console.log("SEARCH!! con ID" + id);
  },
  searchEvent(id) {
    this.setState({ activeSearch: true, activeView: false, activeAddElement: false, idAction: id, activeAddNote: false });
    console.log("SEARCH!! con ID" + id);
  },

  viewEvent(id) {
    this.setState({ activeSearch: false, activeView: true, activeAddElement: false, idAction: id, activeAddNote: false });
    console.log("VIEW!!");
  },
  addEvent(id) {
    this.setState({ activeSearch: false, activeView: false, activeAddElement: true, idAction: id, activeAddNote: false });
    this.createNote;
    console.log("ADD!!");
  },
  addNote(noteContent, noteTitle) {
    console.log("Debo agregar una nota!!");
    console.log("El contenido de la nota es el siguiente: " + noteContent);
    console.log("el titulo de la nota es: " + noteTitle);
    if (noteTitle === "") {
      noteTitle = "No Title"
    }
    this.setState({
      note: { title: noteTitle, content: noteContent },
  //    totalNotes: this.state.totalNotes.concat([this.state.note]),
      totalNotes:  this.state.totalNotes.concat([{note:{title:noteTitle, content:noteContent}}]),
      activeAddNote: true
    });
    this.setState({ noteContent: noteContent, noteTitle: noteTitle });
    //console.log("title es: " + totalNotes[0].title);
    if (this.state.totalNotes.length == 0) {
      console.log("0 elementos!");
    }
    else {
      console.log(this.state.totalNotes.length);
    }
  },
  render() {
    return (

     <Route path="/" render={ () => (
          <Main 
            onClickMainButtonEvent={this.mainButtonEvent}
            onClickSearchEvent={this.searchEvent}
            onClickViewEvent={this.viewEvent}
            onClickAddEvent={this.addEvent}
            onClickAddNote={this.addNote}
            activeSearch={this.state.activeSearch}
            activeView={this.state.activeView}
            activeAddElement={this.state.activeAddElement}
            idAction={this.state.idAction}
            activeAddNote={this.state.activeAddNote}
            totalNotes={this.state.totalNotes}
            noteContent={this.state.noteContent}
            noteTitle={this.state.noteTitle}
            note={this.state.note} 
          /> )}
        />
              
    );
  },
});

module.exports = MainContainer;  