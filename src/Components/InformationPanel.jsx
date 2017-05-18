const React = require('react');
const InformationContainer = require('../Containers/InformationContainer');
const AddNewElement = require('../Components/AddNewElement');
const Search = require('../Components/Search');

const InformationPanel = React.createClass({
    render() {
        return (
            <div id="panelInformation" className="infoPanel">
              { /* TITLE COMPONENT <div>
                  <h2 id="informationPanelTittle" className="fontFamily"> Notes</h2>
                </div> */}
              <Search/>
              <InformationContainer/>
              <AddNewElement buttonName = "hola"/>
            </div>

        );
    },
});

module.exports = InformationPanel;  

