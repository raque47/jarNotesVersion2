import React from 'react';
import NoteEdition from '../Components/NoteEdition/NoteEdition';



class NoteEditionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       noteContent: "",
      resetContent: "",
      noteTitle: "",
      resetTitle: "",
      resetControl: false,
      editNote:false
    }
    this.addNoteEvent = this.addNoteEvent.bind(this);
    this.getNoteContent = this.getNoteContent.bind(this);
    this.getNoteTitle = this.getNoteTitle.bind(this);
  }
  addNoteEvent() {
    console.log("estoy en add note wuuuuu de note edition container! !");
   
    if(this.props.actionType=="editNote"){
      this.props.onClickAcceptFolder(null, this.state.noteContent, this.state.noteTitle);
    //  this.props.onClickAddNote(this.state.noteContent, this.state.noteTitle, "edit")
    }
    else{
       this.props.onClickAddNote(this.state.noteContent, this.state.noteTitle, "add")
    }
    this.setState({ resetContent: "", resetTitle: "", noteContent:"", noteTitle:"", resetControl:true});
  }
  getNoteContent(textAreaValue) {
    this.setState({ noteContent: textAreaValue, resetContent: textAreaValue, resetControl:true });
  }
  getNoteTitle(title) {
    this.setState({ noteTitle: title, resetTitle:title, resetControl:true });
  }
  render() {
    console.log("action type en note edition cont vale: " + this.props.actionType );
    if(this.props.actionType === "editNote" && this.state.resetControl === false){
      this.state.resetContent = this.props.noteContent;
      this.state.resetTitle = this.props.noteTitle;
      this.state.noteContent = this.props.noteContent;
      this.state.noteTitle = this.props.noteTitle
      this.state.editNote = true;
      console.log("estoy en el true de edition note container!");
    }
    return (
      <NoteEdition 
      resetContent={this.state.resetContent} 
      resetTitle={this.state.resetTitle} 
      getNoteContent={this.getNoteContent} 
      getNoteTitle={this.getNoteTitle} 
      onClickAddNote={this.addNoteEvent}
      idNoteSelected = {this.props.idNoteSelected}
      modalId = {"foldersModal"}
      actionType={this.props.actionType}
      onClickAcceptFolder={this.props.onClickAcceptFolder} />
    );
  }
};

export default NoteEditionContainer;  