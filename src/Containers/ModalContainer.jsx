import React from 'react';
import axios from '../../node_modules/axios';
import Modal from '../Components/Modal/Modal';


class ModalContainer extends React.Component {
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
        return (
            <Modal showModal={this.props.showModal}
                onClickAcceptFolder={this.props.onClickAcceptFolder}
                actionType={this.props.actionType} folders={this.state.allFolders}  />
        );
    }
};

export default ModalContainer;  