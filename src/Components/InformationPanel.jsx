const React = require('react');
const Title = require('../Components/Title');
const Search = require('../Components/Search');
const AddNewElement = require('../Components/AddNewElement');
const _informationPanel = require('../scss/pages/_informationPanel.scss');
const NotesContainer = require('../Containers/NotesContainer'); 
const FoldersContainer = require('../Containers/FoldersContainer'); 

const InformationPanel = React.createClass({
  render() {
    return (
      <div id="panelInformation" className="infoPanel">
        <Title panelTitle={this.props.idAction} />
        <Search
          activeSearch={this.props.activeSearch}
          idAction={this.props.idAction} />
        <NotesContainer  
        noteTitle={this.props.noteTitle}
        noteContent={this.props.noteContent} 
        totalNotes={this.props.totalNotes}  
        activeAddNote={this.props.activeAddNote}/>
       {/* <FoldersContainer/> */ }
        <AddNewElement
          activeAddElement={this.props.activeAddElement}
          buttonName=""
          noteTitle={this.props.noteTitle}
          idAction={this.props.idAction} />
      </div>

    );
  },
});

module.exports = InformationPanel;

