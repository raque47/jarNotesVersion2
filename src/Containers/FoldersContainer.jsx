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
   // this.editFolder = this.editFolder.bind(this);
    this.updateFolder = this.updateFolder.bind(this);
    this.deleteFolder = this.deleteFolder.bind(this);
    this.addEvent = this.addEvent.bind(this);
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

  // editFolder(idFolderSelected, elementName) {
  //   this.props.onClickEditFolder(elementName, idFolderSelected);
  //   console.log("Edit folder");
  // }
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
    console.log("BORRARR id es: " + deleteFolder + " con id: " + deleteFolder._id);
    axios.delete('http://localhost:3000/api/folders', { data: deleteFolder }).
      then(function (response) {
        //Se realiza un get de todas las notas 
        self.getFolders();
      })
  }
  addEvent() {
    if (this.props.idAction === 'Folders') {
      console.log("!!AddEvent (folders) Entre a" + this.props.idAction);
      this.props.onClickAddElement(this.state.elementName, "add");
      console.log("AddEvent y mi elementName es:" + this.state.elementName);
    }
  }
   setFolderName(name) {
    console.log("Entre a SETFOLDERNAME y mi elementName ANTES es:" + this.state.elementName);
    this.setState({ elementName: name, resetName:name, resetControl:true });
    this.state.elementName = name;
    console.log("Entre a SETFOLDERNAME y mi elementName DESPUES es:" + this.state.elementName);
  }
  render() {

    const folders = this.state.allFolders;
    const self = this;
    let showFolder = false;
    switch (this.props.actionType) {
      case "viewFolders":
        if (this.state.folderEvent === true) {
          this.getFolders();
          console.log("Hice el getFolders");
          this.state.folderEvent = false;
        }
        else {
          this.state.folderEvent = true;
        }
        break;
      case "addFolder":
        console.log("ADDD WOWOW!!");
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
        console.log("EDITTTTT WOWOWOWWOW: " + this.props.idFolderSelected);
        if (this.state.folderEvent === true) {
          this.updateFolder();
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