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
    this.addEvent = this.addEvent.bind(this);
    this.setTagName = this.setTagName.bind(this);
  }
  addEvent() {
    if(this.props.idAction === 'Tags'){
        console.log("!!AddEvent (tags) Entre a"+this.props.idAction);
        this.props.onClickAddElement(this.state.tagName, "add");
        //this.onClickAddElement(this.state.tagName, "add");
        console.log("AddEvent y mi tagName es:" + this.state.tagName);
    }
    else{ // es Folders
        console.log("!!AddEvent(folder)Entre a"+this.props.idAction);
    }
    // if(this.props.actionType=="editTag"){
    //   this.props.onClickAddElement(this.state.tagName, "edit")
    // }
    // else{
    //     if (this.props.actionType=="deleteTag"){
    //         this.props.onClickAddElement(this.state.tagName, "delete")
    //     }
    //     else{ //delete tag
    //         this.props.onClickAddElement(this.state.tagName, "add")   
    //     }
    // }
    // this.setState({ resetName: "", tagName:"", resetControl:true});
  }
  setTagName(name) {
    console.log("Entre a setTagName y mi name ANTES es::" + name);
    console.log("Entre a setTagName y mi tagName ANTES es:" + this.state.tagName);
    this.setState({ tagName: name, resetName:name, resetControl:true });
    this.state.tagName = name;
    console.log("Entre a setTagName y mi name DESPUES es::" + name);
    console.log("Entre a setTagName y mi tagName DESPUES es:" + this.state.tagName);
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