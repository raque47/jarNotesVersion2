import React from 'react';
import Notes from '../Components/Notes/Notes';
import Tags from '../Components/Tags/Tags';
import InformationPanel from '../Components/InformationPanel/InformationPanel';


class InformationPanelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagName: "",
      resetName: "",
      resetControl: false,
      editTag:false,
      deleteTag: false
    }
    this.addElement = this.addElement.bind(this);
    this.setTagName = this.setTagName.bind(this);
  }
  setTagName (name){
    console.log("Entre a setTagName y mi name ANTES es::" + name);
    console.log("Entre a setTagName y mi tagName ANTES es:" + this.state.tagName);
    this.setState({ tagName: name, resetName:name, resetControl:true });
    this.state.tagName = name;
    console.log("Entre a setTagName y mi name DESPUES es::" + name);
    console.log("Entre a setTagName y mi tagName DESPUES es:" + this.state.tagName);
  }
  addElement(tagName, action){
  //  if(this.idAction == 'Tags'){
        console.log("YEEEEEIII");
        console.log("InfoPanelCont AddEvent(tags) Entre a"+ this.idAction);
     //   this.onClickAddElement(tagName, "add");
       console.log("EL NAME DEL TAG ES: " + tagName);
        this.setState({ tagName: tagName});
        //this.state.tagName = name;
        console.log("InfoPanCon AddEvent y mi tagName esSsS:" + tagName);
   // }
   // else{ // es Folders
      // console.log("!!AddEvent(folder)Entre a"+ this.idAction);
   // }
  }
  render() {
    return (
      console.log("VOY A RENDEREAR ESTOOOOO " + this.state.tagName ),
      <div>
        <InformationPanel
          tagName = {this.state.tagName}
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
           >

        </InformationPanel>
      </div>
    );
  }
};

export default InformationPanelContainer;  