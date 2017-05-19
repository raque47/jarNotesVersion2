const React = require('react');
const MenuButtons= require('../Components/MenuButtons');
const DropDown= require('../Components/DropDown');

const MenuButtonsContainer = React.createClass({
     render() {
        const searchIcon = "search-button.svg";
        const viewIcon="view-button.svg";
        return (
            <div >
                <MenuButtons mainButton="notes-button.svg" buttonName="Notes" searchIcon={searchIcon} hiddenIcon={viewIcon} searchText="Search Note" text="View Notes" />
                <MenuButtons mainButton="tag-button.svg" buttonName="Tags" searchIcon={searchIcon} hiddenIcon="add-tag-button.svg" searchText="Search Tag" text="Add Tag" />
                <MenuButtons mainButton="folder-button.svg" buttonName="Folders" searchIcon={searchIcon} hiddenIcon="add-folder-button.svg" searchText="Search Folder" text="Add Folder" />    
                <DropDown userIcon="user-button.svg" item1="Settings" item2="Log Out" />        
            </div>
        );
    },
});

module.exports = MenuButtonsContainer;  

               