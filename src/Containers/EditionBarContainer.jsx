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
                noteTitle = "This is my first note and I am so happy!"
                />
        );
    }
};

export default EditionBarContainer;

