import React from 'react';
import {Link} from 'react-router-dom';


class Folders extends React.Component {


 constructor(props) {
    super(props);
    this.deleteFolder = this.deleteFolder.bind(this);
    this.editFolder = this.editFolder.bind(this);
  }
 deleteFolder(event) {
    const idFolderSelected = this.props.folderId;
    this.props.onClickDeleteEvent(idFolderSelected);
  }
  editFolder(event) {
    console.log("EDIT ** folderr!!");
    const idFolderSelected = this.props.folderId;
    const folderNameSelected = this.props.name;
    this.props.onClickEditEvent(idFolderSelected, folderNameSelected);
  }
  render() {
    return (
      <div id= {this.props.folderId} className={"infoPanelElements borderStyle " +
        (this.props.showAllFolders ? "showComponent" : "hideComponent")} >
       
          <li className="noteAddedTitle">{this.props.name}</li>
  
        
      </div>
    );
  }
};


export default Folders;  