import React from 'react';
import Notes from '../Components/Notes/Notes';
import Tags from '../Components/Tags/Tags';
import InformationPanel from '../Components/InformationPanel/InformationPanel';


class InformationPanelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elementName: "",
      resetName: "",
      resetControl: false,
      editTag:false,
      deleteTag: false,
      idFolderNoteEdited:""
    }
    this.addElement = this.addElement.bind(this);
    this.setTagName = this.setTagName.bind(this);
    this.getFolderName = this.getFolderName.bind(this);
  }
  setTagName (name){
    console.log("Entre a setTagName y mi name ANTES es::" + name);
    console.log("Entre a setTagName y mi elementName ANTES es:" + this.state.elementName);
    this.setState({ elementName: name, resetName:name, resetControl:true });
    this.state.elementName = name;
    console.log("Entre a setTagName y mi name DESPUES es::" + name);
    console.log("Entre a setTagName y mi elementName DESPUES es:" + this.state.elementName);
  }
  addElement(elementName, action){
  //  if(this.idAction == 'Tags'){
        console.log("YEEEEEIII");
        console.log("InfoPanelCont AddEvent(tags) Entre a"+ this.idAction);
     //   this.onClickAddElement(elementName, "add");
       console.log("EL NAME DEL TAG ES: " + elementName);
        this.setState({ elementName: elementName});
        
        //this.state.elementName = name;
        console.log("CHIWI  InfoPanCon AddEvent y mi elementName esSsS:" + elementName);
   // }
   // else{ // es Folders
      // console.log("!!AddEvent(folder)Entre a"+ this.idAction);
   // }
  }
  getFolderName(idFolder){
    this.setState({idFolderNoteEdited: idFolder});
  }
  render() {
    return (
      console.log("VOY A RENDEREAR ESTOOOOO " + this.state.elementName ),
      <div>
        {console.log("el action type en information panel container vale: " + this.props.actionType)}
        <InformationPanel  
          elementName = {this.state.elementName}
          onClickMainButtonEvent={this.props.mainButtonEvent}
          activeSearch={this.props.activeSearch}
          activeView={this.props.activeView}
          activeAddElement={this.props.activeAddElement}
          idAction={this.props.idAction}
          noteTitle={this.props.noteTitle}
          noteContent={this.props.noteContent}
          actionType={this.props.actionType}
          showAllNotes={this.props.showAllNotes}
          onClickEditNote={this.props.onClickEditNote}
          idNoteSelected={this.props.idNoteSelected}
          onClickAddTag={this.props.onClickAddTag}
          idTagSelected={this.props.idTagSelected}
          showAllTags={this.props.showAllTags}
          getTagName={this.props.getTagName}
          onClickAddElement={this.addElement}
          addTagEvent={this.props.addTagEvent}
          onClickEditTag={this.props.onClickEditTag}
          showEditionBar={this.props.showEditionBar}
          idSelectedFolder={this.props.idSelectedFolder}
          getFolderName={this.getFolderName}
          idFolderNoteEdited = {this.state.idFolderNoteEdited}
           >

        </InformationPanel>
      </div>
    );
  }
};

export default InformationPanelContainer;  