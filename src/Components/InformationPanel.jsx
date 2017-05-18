const React = require('react');
const InformationContainer = require('../Containers/InformationContainer');
const AddNewElement = require('../Components/AddNewElement');

const InformationPanel = React.createClass({
    render() {
        return (
            <div id="panelInformation" className="infoPanel">

              
              { /* TITLE COMPONENT <div>
                  <h2 id="informationPanelTittle" className="fontFamily"> Notes</h2>
                </div> */}

            { /* SEARCH COMPONENT  <form id="searchForm" className="navbar-form searchFormHidden" role="search">
                  <div id="searchForm__input" className="input-group searchFormHidden">
                    <input type="text" className="form-control searchFormHidden" placeholder="Search" name="srch-term" id="srch-term" />
                    <div className="input-group-btn">
                      <button className="btn btn-default" type="submit"><img src={require('./images/search-button.svg')} className="searchButtonInformationPanel" /> </button>
                    </div>
                  </div>
                </form> */ }

              <InformationContainer/>
              <AddNewElement buttonName = "hola"/>
            </div>

        );
    },
});

module.exports = InformationPanel;  

