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
      <div id={this.props.folderId} 
        className={"infoPanelElements borderStyle "} >
        <div className="tagContainer" >
          <span className="tagAddedName">{this.props.folderName}</span>
          <button className="buttons infoPanelButtons"
            onClick={this.deleteFolder}><img
              src={require("../../images/trash-button.svg")}
              className="navBar__images" /></button>
          <Link to={'/editFolder'}>
            <button className="buttons infoPanelButtons"
              onClick={this.editFolder}><img
                src={require("../../images/edit-button.svg")}
                className="navBar__images" /></button>
          </Link>
        </div>
      </div>
    );
  }
};


export default Folders;  