import React from 'react';
import axios from '../../node_modules/axios';
import Folders from '../Components/Folders/Folders';


class FoldersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFolder: false,
      allFolders: [],
      folderEvent: true,
      idFolderSelected: ""
    };
    this.getAllFolders = this.getAllFolders.bind(this);
    this.addFolder = this.addFolder.bind(this);
    this.getFolders = this.getFolders.bind(this);
    this.updateFolder = this.updateFolder.bind(this);
    this.deleteFolder = this.deleteFolder.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.getFolderName = this.getFolderName.bind(this);
    this.setFolderName = this.setFolderName.bind(this);
  }
  getAllFolders(showFolders) {
    const self = this;
    let result;

  }
  addFolder() {
    const newFolder = { name: this.props.elementName }
    const self = this;
    axios.post('http://localhost:3000/api/folders', newFolder).then(() => {
      self.getFolders();
    });
  }

  getFolders() {
    const self = this;
    axios.get('http://localhost:3000/api/folders').then(function (response) {
      self.setState({ allFolders: response.data, folderEvent: false });
    })
  }

  updateFolder(idFolderSelected, elementName) {
    const newFolder = { _id: idFolderSelected, elementName: elementName }
    const self = this;
    axios.put('http://localhost:3000/api/folders', newFolder).then(function (response) {
      self.getFolders();
    })
  }
  deleteFolder(idFolder) {
    const self = this;
    const deleteFolder = { _id: idFolder };
    axios.delete('http://localhost:3000/api/folders', { data: deleteFolder }).
      then(function (response) {
        self.getFolders();
      })
  }
  addEvent() {
    if (this.props.idAction === 'Folders') {
      this.props.onClickAddElement(this.state.elementName, "add");
    }
  }

  getFolderName() {
    const self = this;
    const getFolder = { _id: this.props.idSelectedFolder };
    axios.get('http://localhost:3000/api/folders/' + getFolder._id).then(function (response) {
      if(self.props.actionType=="editFolderNote"){
        self.props.onClickEditNoteFolder(response.data.name);
      }
      else{
        self.props.onClickNoteFolderInfo(response.data.name);
      } 
    })
  }
  setFolderName(name) {
    this.setState({ elementName: name, resetName: name, resetControl: true });
    this.state.elementName = name;
  }
  render() {

    const folders = this.state.allFolders;
    const self = this;
    let showFolder = false;
    switch (this.props.actionType) {

      case "viewFolders":
        if (this.state.folderEvent === true) {
          this.getFolders();
          this.state.folderEvent = false;
        }
        else {
          this.state.folderEvent = true;
        }
        break;
      case "addFolder":
        if (this.state.folderEvent === true) {
          this.addFolder();
          this.state.folderEvent = false;
        }
        else {
          this.state.folderEvent = true;
        }
        break;
      case "searchFolders":
        break;
      case "editFolder":
        if (this.state.folderEvent === true) {
          this.updateFolder();
          this.state.folderEvent = false;
        }
        else {
          this.state.folderEvent = true;
        }
        break;
      case "editFolderNote":
        if (this.state.folderEvent === true) {
         this.getFolderName(this.props.idSelectedFolder);
          this.state.folderEvent = false;
        }
        else {
          this.state.folderEvent = true;
        }
        break;
        case "infoNote": 
          if (this.state.folderEvent === true) {
         this.getFolderName(this.props.idSelectedFolder);
          this.state.folderEvent = false;
        }
        else {
          this.state.folderEvent = true;
        }
        break;
    }

    return (

      <div className="containerOfElements">
        {
          folders.map((item) => {
            return (
              <Folders
                key={item._id}
                folderId={item._id}
                showFolder={true}
                elementName={item.name}
                showAllFolders={self.props.showAllFolders}
                onClickShowEvent={self.showSpecificFolder}
                onClickDeleteEvent={this.deleteFolder}
                onClickEditEvent={self.updateFolder}
                setFolderName={this.setFolderName}
              />
            );
          })
        }
      </div>
    );
  }
};


export default FoldersContainer;  