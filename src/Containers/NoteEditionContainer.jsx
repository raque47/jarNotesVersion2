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
    this.assignTagEvent = this.assignTagEvent.bind(this);
  }
  addNoteEvent() {
    if(this.props.actionType=="editNote"){
      this.props.onClickAcceptFolder(null, this.state.noteContent, this.state.noteTitle);
    //  this.props.onClickAddNote(this.state.noteContent, this.state.noteTitle, "edit")
    }
    else{
       this.props.onClickAddNote(this.state.noteContent, this.state.noteTitle, "add")
    }
    this.setState({ resetContent: "", resetTitle: "", noteContent:"", noteTitle:"", resetControl:true});
  }

  assignTagEvent(){
    console.log("ESSSTOYYY EN ASSUGNTAGEVENT" + this.props.actionType);
    
       this.props.onClickAssignTag(this.state.noteContent, this.state.noteTitle)
  }

  getNoteContent(textAreaValue) {
    this.setState({ noteContent: textAreaValue, resetContent: textAreaValue, resetControl:true });
  }
  getNoteTitle(title) {
    this.setState({ noteTitle: title, resetTitle:title, resetControl:true });
  }
  render() {
    if(this.props.actionType === "editNote" && this.state.resetControl === false){
      this.state.resetContent = this.props.noteContent;
      this.state.resetTitle = this.props.noteTitle;
      this.state.noteContent = this.props.noteContent;
      this.state.noteTitle = this.props.noteTitle
      this.state.editNote = true;
    }
    return (
      <NoteEdition 
      resetContent={this.state.resetContent} 
      resetTitle={this.state.resetTitle} 
      getNoteContent={this.getNoteContent} 
      getNoteTitle={this.getNoteTitle} 
      onClickAddNote={this.addNoteEvent}
      onClickAssignTag ={this.assignTagEvent}
      idNoteSelected = {this.props.idNoteSelected}
      modalId = {"foldersModal"}
      modalTagSelectionId = {"tagsModal"}
      actionType={this.props.actionType}
      onClickAcceptFolder={this.props.onClickAcceptFolder}
      onClickAcceptTag={this.props.onClickAcceptTag} />
    );
  }
};

export default NoteEditionContainer;  