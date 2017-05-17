// import React from 'react';
// import { render } from 'react-dom';
const React = require('react');
const MenuButtons = require('./MenuButtons');

const NavBar = React.createClass({
  
    // const NavBar = () => (
    render() {
        const searchIcon = "search-button.svg";
        const viewIcon="view-button.svg";
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"></button>
                        <img className = "sr-only" src={require('./images/menu-button.svg')}/>
                        <a className="navbar-brand pull-left" href="#"><img src={require('./images/logo.png')} /></a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <div className="nav navbar-nav navbar-right">
                            <MenuButtons mainButton="notes-button.svg" buttonName="Notes" searchIcon={searchIcon} hiddenIcon={viewIcon} searchText="Search Note" text="View Notes" />
                            <MenuButtons mainButton="tag-button.svg" buttonName="Tags" searchIcon={searchIcon} hiddenIcon="add-tag-button.svg" searchText="Search Tag" text="Add Tag" />
                            <MenuButtons mainButton="folder-button.svg" buttonName="Folders" searchIcon={searchIcon} hiddenIcon="add-folder-button.svg" searchText="Search Folder" text="Add Folder" />                   
                            <button className="dropdown-toggle navBar__button buttons" data-toggle="dropdown"><img src={require('./images/user-button.svg')} className="navBar__images"/><span className="caret"></span></button>
                            <ul className="dropdown-menu">
                                <li><a href="#">Settings</a></li>
                                <li><a href="#">Log Out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    },
});


module.exports = NavBar;  
