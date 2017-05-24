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
      typeNotesAction:"",
      addNoteEvent:true,
      showAllNotes:true
    };
  },

  mainButtonEvent(id) {
    this.setState({ activeSearch: false, activeView: false, activeAddElement: false, idAction: id, activeAddNote: false });
    console.log("SEARCH!! con ID" + id);
  },

  searchEvent(id) {
    this.setState({ activeSearch: true, activeView: false, activeAddElement: false, idAction: id, activeAddNote: false,  showAllNotes:false });
  },

  viewEvent(id) {
    this.setState({ activeSearch: false, activeView: true, activeAddElement: false, idAction: id, activeAddNote: false,  showAllNotes:true });
  },
  addElementEvent(id) {
    this.setState({ activeSearch: false, activeView: false, activeAddElement: true, idAction: id, activeAddNote: false,  showAllNotes:false });
    this.createNote;
  },
  addNote(noteContent, noteTitle) {
    if (noteTitle === "") {
      noteTitle = "No Title"
    }
    this.setState({activeAddNote: true, addNoteEvent:true, noteContent: noteContent, noteTitle: noteTitle, typeNotesAction:"addNote",  showAllNotes:true});
  },
  render() {
    return (

     <Route path="/" render={ () => (
          <Main 
            onClickMainButtonEvent={this.mainButtonEvent}
            onClickSearchEvent={this.searchEvent}
            onClickViewEvent={this.viewEvent}
            onClickAddEvent={this.addElementEvent}
            onClickAddNote={this.addNote}
            activeSearch={this.state.activeSearch}
            activeView={this.state.activeView}
            activeAddElement={this.state.activeAddElement}
            idAction={this.state.idAction}
            activeAddNote={this.state.activeAddNote}
            totalNotes={this.state.totalNotes}
            noteContent={this.state.noteContent}
            noteTitle={this.state.noteTitle}
            typeNotesAction={this.state.typeNotesAction}
            addNoteEvent={this.state.addNoteEvent}
            showAllNotes={this.state.showAllNotes}
          /> )}
        />
              
    );
  },
});

module.exports = MainContainer;  