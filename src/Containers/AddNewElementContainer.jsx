import React from 'react';
import AddNewElement from '../Components/AddNewElement/AddNewElement';



class AddNewElementContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagName: "",
      folderName: "",
      resetName: "",
      resetControl: false,
      editTag:false,
      deleteTag: false
    }
    this.addEvent = this.addEvent.bind(this);
    this.setTagName = this.setTagName.bind(this);
  }
  addEvent() {
    if(this.props.idAction === 'Tags'){
        console.log("!!AddEvent (tags) Entre a"+this.props.idAction);
        this.props.onClickAddElement(this.state.tagName, "add");
        console.log("AddEvent y mi tagName es:" + this.state.tagName);
    }
  }

  addEventFolder() {
    if (this.props.idAction === 'Folders'){
        console.log("!!AddEvent(folder)Entre a"+this.props.idAction);
        this.props.onClickAddElement(this.state.tagName, "add");
    }// es Folders
  }

  setTagName(name) {
    this.setState({ tagName: name, resetName:name, resetControl:true });
    this.state.tagName = name;
  }
  render() {
    if(this.props.actionType === "editNote" && this.state.resetControl === false){
      this.state.resetName = this.props.tagName;
      this.state.editNote = true;
    }
    if(this.props.actionType === "deleteNote"){

    }
    return (
      <AddNewElement
        resetName={this.state.resetName} 
        getTagName={this.getTagName} 
        onClickAddElement={this.addEvent}
        idTagSelected = {this.props.idTagSelected} 
        actionType={this.props.actionType} 
        activeAddElement={this.props.activeAddElement}
        buttonName=""
        idAction={this.props.idAction} 
        setTagName = {this.setTagName}
      />

    
    );
  }
};

export default AddNewElementContainer;  