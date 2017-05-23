const React = require('react');
const MenuButtons = require('../Components/MenuButtons/MenuButtons');
const DropDown = require('../Components/DropDown/DropDown');

const MenuButtonsContainer = React.createClass({
    getInitialState() {
        return {
            activeNotes: false,
            activeTags: false,
            activeFolders: false,
        }
    },
    showHiddenButtons(id) {
        switch (id) {
            case "notes":
                if (this.state.activeNotes === true) {
                    this.setState({ activeNotes: false, activeTags: false, activeFolders: false });
                }
                else {
                    this.setState({ activeNotes: true, activeTags: false, activeFolders: false });
                }
                break;
            case "tags":
                if (this.state.activeTags === true) {
                    this.setState({ activeNotes: false, activeTags: false, activeFolders: false });
                }
                else {
                    this.setState({ activeNotes: false, activeTags: true, activeFolders: false });
                }
                break;
            case "folders":
                if (this.state.activeFolders === true) {
                    this.setState({ activeNotes: false, activeTags: false, activeFolders: false });
                }
                else {
                    this.setState({ activeNotes: false, activeTags: false, activeFolders: true });
                }
                break;
        }
    },
    render() {
        const searchIcon = "search-button.svg";
        const viewIcon = "view-button.svg";
        return (
            <div >
                <MenuButtons
                    /*  onClick = {this.showHiddenButtons}  */
                    idMainButton="notes"
                    hiddenButton1="search notes"
                    hiddenButton2="view"
                    onClickMainButton={this.showHiddenButtons}
                    showHiddenButtons={this.state.activeNotes}

                    onClickMainButtonEvent={this.props.onClickMainButtonEvent}
                    onClickSearchEvent={this.props.onClickSearchEvent}
                    onClickViewEvent={this.props.onClickViewEvent}
                    onClickAddEvent={this.props.onClickAddEvent}

                    mainButton="notes-button.svg"
                    buttonName="Notes"
                    searchIcon={searchIcon}
                    hiddenIcon={viewIcon}
                    searchText="Search Note"
                    text="View Notes" />
                <MenuButtons
                    idMainButton="tags"
                    hiddenButton1="search tags"
                    hiddenButton2="add tags"
                    onClickMainButton={this.showHiddenButtons}
                    showHiddenButtons={this.state.activeTags}

                    onClickMainButtonEvent={this.props.onClickMainButtonEvent}
                    onClickSearchEvent={this.props.onClickSearchEvent}
                    onClickViewEvent={this.props.onClickViewEvent}
                    onClickAddEvent={this.props.onClickAddEvent}

                    mainButton="tag-button.svg"
                    buttonName="Tags"
                    searchIcon={searchIcon}
                    hiddenIcon="add-tag-button.svg"
                    searchText="Search Tag" text="Add Tag" />
                <MenuButtons
                    idMainButton="folders"
                    hiddenButton1="search folders"
                    hiddenButton2="add folders"
                    onClickMainButton={this.showHiddenButtons}
                    showHiddenButtons={this.state.activeFolders}

                    onClickMainButtonEvent={this.props.onClickMainButtonEvent}
                    onClickSearchEvent={this.props.onClickSearchEvent}
                    onClickViewEvent={this.props.onClickViewEvent}
                    onClickAddEvent={this.props.onClickAddEvent}

                    mainButton="folder-button.svg"
                    buttonName="Folders"
                    searchIcon={searchIcon}
                    hiddenIcon="add-folder-button.svg"
                    searchText="Search Folder"
                    text="Add Folder" />
                <DropDown userIcon="user-button.svg" item1="Settings" item2="Log Out" />
            </div>
        );
    },
});

module.exports = MenuButtonsContainer;

