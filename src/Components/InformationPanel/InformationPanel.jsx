const React = require('react');
const Title = require('../Title/Title');
const Search = require('../Search/Search');
const AddNewElement = require('../AddNewElement/AddNewElement');
const NotesContainer = require('../../Containers/NotesContainer'); 
const FoldersContainer = require('../../Containers/FoldersContainer'); 
const informationPanelStyle = require('./_informationPanel.scss');

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

