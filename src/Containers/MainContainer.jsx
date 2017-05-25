const React = require('react');
const render = require('react-dom');
const Main = require('../Components/Main/Main');

const reactRouter = require('react-router-dom');
const Link = reactRouter.Link;
const Route = reactRouter.Route;
const Switch = reactRouter.Switch;


const MainContainer = React.createClass({

  getInitialState: function () {
    return {
      activeSearch: false,
      activeView: false,
      activeAddElement: false,
      idAction: "",
      noteTitle: "",
      noteContent: "",
      actionType: "viewNotes",
      addNoteEvent: true,
      showAllNotes: true
    };
  },

  mainButtonEvent(id) {
    this.setState({ activeSearch: false, activeView: false, activeAddElement: false, idAction: id});
  },

  searchEvent(id) {
    let event = "";
    console.log("el id en main container search es:! " + id);
    if (id == "Notes") {
      event = "searchNotes"
    }
    else if (id == "Folders") {
      event = "searchFolders"
    }
    else {
      event = "searchTags"
    }
    this.setState({ activeSearch: true, activeView: false, activeAddElement: false, idAction: id, showAllNotes: false, actionType: event });
  },

  viewEvent(id) {
    let event = "";
    console.log("el id en main container view es:! " + id);
    if (id == "Notes") {
      event = "viewNotes"
    }
    else if (id == "Folders") {
      event = "viewFolders"
    }
    else {
      event = "viewTags"
    }
    this.setState({ activeSearch: false, activeView: true, activeAddElement: false, idAction: id, showAllNotes: true, actionType: event });
  },
  addElementEvent(id) {
    console.log("add element event!: ");
    let event = "";
    if (id == "Notes") {
      event = "addNote"
    }
    else if (id == "Folders") {
      event = "addFolder"
    }
    else {
      event = "addTag"
    }
    this.setState({ activeSearch: false, activeView: false, activeAddElement: true, idAction: id, showAllNotes: false, actionType: event });
  },
  addNote(noteContent, noteTitle) {
    console.log("add note main container!: ");
    if (noteTitle === "") {
      noteTitle = "No Title"
    }
    this.setState({addNoteEvent: true, noteContent: noteContent, noteTitle: noteTitle, showAllNotes: true, actionType: "addNote" });
  },
  render() {
    return (

      <Route path="/" render={() => (
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
          noteContent={this.state.noteContent}
          noteTitle={this.state.noteTitle}
          typeNotesAction={this.state.typeNotesAction}
          addNoteEvent={this.state.addNoteEvent}
          actionType={this.state.actionType}
          showAllNotes={this.state.showAllNotes}
        />)}
      />

    );
  },
});

module.exports = MainContainer;  