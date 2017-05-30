import React from 'react';
import Modal from '../Components/Modal/Modal';


class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal  showModal={this.props.showModal}
      onClickAcceptFolder={this.props.onClickAcceptFolder}/>  
    );
  }
};

export default ModalContainer;  