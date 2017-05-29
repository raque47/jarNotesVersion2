import React from 'react';
import EditionBar from '../Components/EditionBar/EditionBar';


class EditionBarContainer extends React.Component {
constructor(props) {
        super(props);
        this.state = { displayEvent: false };
    }
    showItemsName() {
        if (this.state.displayEvent === true) {
            this.setState({ displayEvent: false });
        }
        else {
            this.setState({ displayEvent: true });
        }
    }
    render() {
        return (
            <EditionBar
                onClickButton={this.showItemsName}
                displayEvent={this.state.displayEvent} />
        );
    }
};

export default EditionBarContainer;

