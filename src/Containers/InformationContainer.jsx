const React = require('react');
const Notes = require('../Components/Notes');
{/*const Tags = require('./Tags');
const Folders = require('./Folders'); */ }

const InformationContainer = React.createClass({
    render() {
        return (
            <div>
                <ul id="listInformationPanel" className="=infoPanelElements">
                <Notes/>
                </ul>
            </div>
        );
    },
});

module.exports = InformationContainer;  
