import React from 'react';
import {Link} from 'react-router-dom';
import InlineEdit from 'react-edit-inline';

class Folders extends React.Component {

 constructor(props) {
    super(props);
    this.deleteFolder = this.deleteFolder.bind(this);
    this.dataChanged = this.dataChanged.bind(this);
    this.state = {
      message: '',
      name: ''
    }
  }
  deleteFolder(event) {
    const idFolderSelected = this.props.folderId;
    this.props.onClickDeleteEvent(idFolderSelected);
  }
  dataChanged(data) {
    const idFolderSelected = this.props.folderId;
    this.setState({data})
    this.setState({name:data.message});
    this.props.onClickEditEvent(idFolderSelected, data.message);
  }
  customValidateText(text) {
    return (text.length > 0 && text.length < 64);
  }
  render() {
    return (
      <div id={this.props.folderId} 
        className={"infoPanelElements borderStyle "} >
        <div className="tagContainer" >
          <InlineEdit
            validate={this.customValidateText}
            activeClassName="editing"
            text={this.props.elementName}
            paramName="message"
            change={this.dataChanged}
            className="tagAddedName"
            style={{ minWidth: 150, display: 'inline-block', outline: 0,borderColor: 'E7E7E7'}}
          />
          <button className="buttons infoPanelButtons"
            onClick={this.deleteFolder}><img
              src={require("../../images/trash-button.svg")}
              className="navBar__images" />
          </button>
        </div>
      </div>
    );
  }
};


export default Folders;  