import React from 'react';
import AddNewElement from '../Components/AddNewElement/AddNewElement';



class AddNewElementContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagName: "",
      resetName: "",
      resetControl: false,
      editTag:false,
      deleteTag: false
    }
    this.addTagEvent = this.addTagEvent.bind(this);
    this.getTag = this.getTag.bind(this);
  }
  addTagEvent() {
    console.log("!!!!EEEEstoy en add tag/folder de note adenewelement container! !");
    if(this.props.actionType=="editTag"){
      this.props.onClickAddElement(this.state.tagName, "edit")
    }
    else{
        if (this.props.actionType=="editTag"){
            this.props.onClickAddElement(this.state.tagName, "add")
        }
        else{ //delete tag
            this.props.onClickAddElement(this.state.tagName, "delete")   
        }
    }
    this.setState({ resetName: "", tagName:"", resetControl:true});
  }
  getTag(name) {
    this.setState({ tagName: name, resetName:name, resetControl:true });
  }
  render() {
    console.log("EN ADD NEW ELEMENTE ACTIONTYPE vale: " + this.props.actionType );
    if(this.props.actionType === "editNote" && this.state.resetControl === false){
      this.state.resetName = this.props.tagName;
      this.state.editNote = true;
      console.log("estoy en el true de edition note container!");
    }
    if(this.props.actionType === "deleteNote"){

    }
    return (
      <AddNewElement 
        resetName={this.state.resetName} 
        getTagName={this.getTag} 
        onClickAddElement={this.addTagEvent}
        idTagSelected = {this.props.idTagSelected} 
        onClickAddElement={this.props.onClickAddElement} 
        actionType={this.props.actionType} 
        activeAddElement={this.props.activeAddElement}
        buttonName=""
        noteTitle={this.props.noteTitle}
        idAction={this.props.idAction} 
      />

    
    );
  }
};

export default AddNewElementContainer;  