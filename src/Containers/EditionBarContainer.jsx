import React from 'react';
import EditionBar from '../Components/EditionBar/EditionBar';


class EditionBarContainer extends React.Component {
constructor(props) {
        super(props);
        this.state = { displayEvent: false };
    }
  /*  showItemsName() {
        if (this.props.editionBarVisible === true) {
            this.setState({ displayEvent: false });
        }
        else {
            this.setState({ displayEvent: true });
        }
    } */
    render() {
        return (
            <EditionBar
                displayEvent={this.props.editionBarVisible}
                noteTitleSelected={this.props.noteTitleSelected}
                onClickEditEvent={this.props.onClickEditEvent}
                onClickDeleteEvent = {this.props.onClickDeleteEvent}
                onClickEditNoteFolder={this.props.onClickEditNoteFolder}
                />
        );
    }
};

export default EditionBarContainer;

