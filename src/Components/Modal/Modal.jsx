import React from 'react';
import mainStyle from './_modal.scss'
import FoldersContainer from '../../Containers/FoldersContainer'

import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.acceptFolder = this.acceptFolder.bind(this);
    }
    acceptFolder() {
        this.props.onClickAcceptFolder();
    }

    render() {
        return (
            <div className={"opac " + (this.props.showModal ? "showModal" : "hideModal")}>
                <div className="modalStyle showModalAnimation">
                    <h4 className="folderLabel">Choose a notebook to add your note:</h4>
                    <div className="containerElectionFolder">
                        <img src={require('../../images/folder-button.svg')} className="folderImage" />
                        <div className="dropdown foldersDropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Choose Folder  <span className="caret"></span></button>
                            <ul className="dropdown-menu">
                                {FoldersContainer}
                            </ul>
                        </div>
                    </div>
                    <button type="button" onClick={this.acceptFolder} className="closeModal editionButtonControls" ><span className="editionTextControl" data-toggle="tooltip" data-placement="top" title="Add Note">Accept</span></button>
                </div>
            </div>

        )
    }
}

export default Modal;