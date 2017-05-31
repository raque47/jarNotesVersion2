import React from 'react';
import axios from '../../node_modules/axios';
import Folders from '../Components/Folders/Folders';


class FoldersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allFolders: [], folderEvent: true };
  }
  getFolders() {
    const self = this;
    axios.get('http://localhost:3000/api/folders').then(function (response) {
      self.setState({ allFolders: response.data, folderEvent: false });
    })
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