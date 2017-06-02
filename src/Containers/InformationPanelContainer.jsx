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
    this.setState({ elementName: name, resetName:name, resetControl:true });
    this.state.elementName = name;
  }
  addElement(elementName, action){
    this.setState({ elementName: elementName});
  }
  getFolderName(idFolder){
    this.setState({idFolderNoteEdited: idFolder});
  }
  render() {
    return (
      <div>
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
          onClickEditNoteFolder={this.props.onClickEditNoteFolder}
          onClickNoteFolderInfo={this.props.onClickNoteFolderInfo}
          setActionGetTag={this.props.setActionGetTag}         
          idTagsNote={this.props.idTagsNote}
          setTagsName={this.props.setTagsName}
          getTagsEvent={this.props.getTagsEvent}
          tagsNote={this.props.tagsNote}
          setIdTagsNote ={this.props.setIdTagsNote}
           >

        </InformationPanel>
      </div>
    );
  }
};

export default InformationPanelContainer;  