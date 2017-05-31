import React from 'react';
import { Link } from 'react-router-dom';
import dropDownFoldersStyle from './_dropDownFolders.scss';

class DropDownFolders extends React.Component {
  constructor(props) {
    super(props);
    this.getFolder = this.getFolder.bind(this);
  }
  getFolder(event) {
   this.props.getFolderId(event.target.id);
    console.log("el id en DROP DOWN FOLDER es: " + event.target.id);
  }
  render() {
    return (
      <ul className="dropdown-menu">
        {this.props.folders.map((item) => {
          return <li key={item._id}><button id={item._id} onClick={this.getFolder} className="btnDropDown">{item.name}</button> </li>
        })}
      </ul>
    );
  }
};

export default DropDownFolders;  