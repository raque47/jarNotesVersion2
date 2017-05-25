const React = require('react');
const Title = require('../Title/Title');
const Search = require('../Search/Search');
const AddNewElement = require('../AddNewElement/AddNewElement');
const NotesContainer = require('../../Containers/NotesContainer');
const FoldersContainer = require('../../Containers/FoldersContainer');
const informationPanelStyle = require('./_informationPanel.scss');

const reactRouter = require('react-router-dom');
const Link = reactRouter.Link;
const Route = reactRouter.Route;
const Switch = reactRouter.Switch;
const BrowserRouter = reactRouter.BrowserRouter;


const InformationPanel = React.createClass({
  render() {
    return (

      <div id="panelInformation" className="infoPanel">

        <Title panelTitle={this.props.idAction} />
        <Route path="/search" render={() => (
          <Search
            activeSearch={this.props.activeSearch}
            idAction={this.props.idAction}
            actionType={this.props.actionType}
          />
        )}
        />

        <Route path="/view" render={() => (
          <NotesContainer
            noteTitle={this.props.noteTitle}
            noteContent={this.props.noteContent}
            addNoteEvent={false}
            showAllNotes={this.props.showAllNotes}
            idAction={this.props.idAction}
            actionType="viewNotes"
          />
        )}
        />

        
        <Route path="/addNote" render={() => (
          <NotesContainer
            noteTitle={this.props.noteTitle}
            noteContent={this.props.noteContent}
            addNoteEvent={this.props.addNoteEvent}
            showAllNotes={this.props.showAllNotes}
            actionType={this.props.actionType}
          />
        )}
        />

      <Route path='/add tags' render={() => (
        <AddNewElement
          activeAddElement={this.props.activeAddElement}
          buttonName=""
          noteTitle={this.props.noteTitle}
          idAction={this.props.idAction} />
      )}
      />

      <Route path='/add folders' render={() => (
        <AddNewElement
          activeAddElement={this.props.activeAddElement}
          buttonName=""
          noteTitle={this.props.noteTitle}
          idAction={this.props.idAction} />
      )}
      />  
      </div >
    );
  },
});

module.exports = InformationPanel;

