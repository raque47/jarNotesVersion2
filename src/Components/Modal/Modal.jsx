import React from 'react';
import mainStyle from './_modal.scss'
import Folder from '../Folder/Folder'


import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';


class Modal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div className="opac">
                <div className="modalStyle showModalAnimation">
                    <h4 className="folderLabel">Choose your notebook:</h4>
                    <div className="containerElectionFolder">
                        <img src={require('../../images/folder-button.svg')} className="folderImage" />
                        <div className="dropdown foldersDropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Choose Folder  <span className="caret"></span></button>
                            <ul className="dropdown-menu">
                                {this.props.folders}
                            </ul>
                        </div>
                    </div>
                    <button type="button" className="closeModal editionButtonControls" ><span className="editionTextControl" data-toggle="tooltip" data-placement="top" title="Add Note">Accept</span></button>
                </div>
            </div>

        )
    }
}

export default Modal;