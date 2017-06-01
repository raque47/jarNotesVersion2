import React from 'react';
import mainStyle from './_modal.scss'
import FoldersContainer from '../../Containers/FoldersContainer'
import DropDownFolders from '../DropDownFolders/DropDownFolders'
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { idFolder: "", title: "Choose Folder", modalEvent: false }
        this.acceptFolder = this.acceptFolder.bind(this);
        this.getFolderId = this.getFolderId.bind(this);
    }

    acceptFolder() {
        this.props.onClickAcceptFolder(this.state.idFolder, null, null);
    }
    getFolderId(idSelectedFolder, nameSelectedFolder) {
        this.state.idFolder = idSelectedFolder;
        this.setState({ title: nameSelectedFolder });
    }
    render() {
      if (this.props.actionType == "editNoteFolder" && this.state.modalEvent === false) {
            console.log("ESTOY EN EDIT NOTE FOLDER!!");
            this.state.title = this.props.folderNameNoteEdited;
            this.state.modalEvent = true;         
        }
        return (
            <div className={"opac " + (this.props.showModal ? "showModal" : "hideModal")}>
                <div className="modalStyle showModalAnimation">
                    <h4 className="folderLabel">Choose a notebook to add your note:</h4>
                    <div className="containerElectionFolder">
                        <img src={require('../../images/folder-button.svg')} className="folderImage" />
                        <div className="dropdown foldersDropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown">{this.state.title} <span className="caret"></span></button>
                            <DropDownFolders folders={this.props.folders} getFolderId={this.getFolderId} />
                        </div>
                    </div>
                    <Link to='/editNote'>
                    <button type="button" onClick={this.acceptFolder} className="closeModal editionButtonControls" ><span className="editionTextControl" data-toggle="tooltip" data-placement="top" title="Add Note">Accept</span></button>
                    </Link>
                </div>
            </div>

        )
    }
}

export default Modal;