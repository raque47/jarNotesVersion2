import React from 'react';
import axios from '../../node_modules/axios';
import Folders from '../Components/Folders/Folders';


class FoldersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allFolders: [],
      folderEvent: true,
      showFolder: false,
      idFolderSelected: ""
    };
    this.getAllFolders = this.getAllFolders.bind(this);
    this.addFolder = this.addFolder.bind(this);
    this.getFolders = this.getFolders.bind(this);
    this.editFolder = this.editFolder.bind(this);
    this.updateFolder = this.updateFolder.bind(this);
    this.deleteFolder = this.deleteFolder.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.getFolderName = this.getFolderName.bind(this);
  }
  getAllFolders(showFolders) {
    const self = this;
    let result;

  }

  addFolder() {
    const newFolder = { name: this.props.folderName }
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

  editFolder(idFolderSelected, folderName) {
    this.props.onClickEditFolder(folderName, idFolderSelected);
    console.log("Edit folder");
  }
  updateFolder() {
    const newFolder = { _id: this.props.idFolderSelected, folderName: this.props.folderName }
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
      this.props.onClickAddElement(this.state.folderName, "add");
      console.log("AddEvent y mi folderName es:" + this.state.folderName);
    }
  }
  getFolderName(){
    console.log("ESTOY EN OBTENER NOMBRE DEL FOLDER CON ESTE ID: " + this.props.idSelectedFolder );
  }

  render() {

    const folders = this.state.allFolders;
    const self = this;
    let showFolder = false;
    console.log("VIEWWWWW WOWOW");
    console.log("Folders:" + folders);
    console.log("id:" + folders.id);
    console.log("idAction" + folders.idAction);
    console.log("idFolderSelected" + folders.idFolderSelected);
    console.log("item" + folders.item);
    switch (this.props.actionType) {

      case "viewFolders":
        console.log("VIEWWWWW WOWOW");
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
      case "editFolderNote":
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
                folderName={item.name}
                showAllFolders={self.props.showAllFolders}
                onClickShowEvent={self.showSpecificFolder}
                onClickDeleteEvent={this.deleteFolder}
                onClickEditEvent={self.editFolder}
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