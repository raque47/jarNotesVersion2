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
    this.editFolders = this.editFolders.bind(this);
    this.updateFolders = this.updateFolders.bind(this);
    this.deleteFolders = this.deleteFolders.bind(this);
    this.addEvent = this.addEvent.bind(this);
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

  editFolders(idFolderSelected, folderName) {
    this.props.onClickEditTag(folderName, idFolderSelected);
    console.log("Edit folder");
  }
  updateFolder() {
    const newTag= { _id: this.props.idTagSelected, tagName: this.props.tagName }
    const self = this;
    axios.put('http://localhost:3000/api/folders', newTag).then(function (response) {
       self.getFolders();
    })
  }
  deleteFolder(idFolder){
    const self = this;
    const  deleteFolder= {_id: idFolder};
     console.log("BORRARR id es: " + deleteFolder + " con id: " + deleteFolder._id);
    axios.delete('http://localhost:3000/api/folders',  {data: deleteTag}).
    then(function (response) {
       //Se realiza un get de todas las notas 
      self.getFolders();
    })
  }
  addEvent() {
    if(this.props.idAction === 'Folders'){
        console.log("!!AddEvent (folders) Entre a"+this.props.idAction);
        this.props.onClickAddElement(this.state.folderName, "add");
        //this.onClickAddElement(this.state.tagName, "add");
        console.log("AddEvent y mi folderName es:" + this.state.folderName);
    }
  }

  render() {
    if (this.props.actionType === "chooseFolder" && this.state.folderEvent === true) {
      if (this.state.folderEvent === true) {
        this.getFolders();
        this.state.folderEvent = false;
      }
      else {
        this.state.folderEvent = true;
      }
    }
    const folders = this.state.allFolders;
    const self = this;
    return (<div>{

      folders.map((item) => {
        return <Folders
          key={item._id}
          name={item.name} />
      })
    }</div>
    ); //Cierra el return
  }
};

export default FoldersContainer;  