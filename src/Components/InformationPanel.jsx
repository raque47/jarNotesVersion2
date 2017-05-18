const React = require('react');
const InformationContainer = require('../Containers/InformationContainer');
const Search = require('../Components/Search');

const InformationPanel = React.createClass({
    render() {
        return (
            <div id="panelInformation" className="infoPanel">

              
              { /* TITLE COMPONENT <div>
                  <h2 id="informationPanelTittle" className="fontFamily"> Notes</h2>
                </div> */}

              <Search/>

              {/* LISTA DE NOTAS/FOLDERS/TAGS */}
              <InformationContainer/>
     
              {/* ADD FOLDER/TAG COMPONENT 
              <div id="addNewElementForm" className="addNewElementPanel addNewElementFormHidden">
                  <div className="addNewElementTittleType">
                    <h4 id="" className="fontFamily"> Add a new tag</h4>
                  </div>
                  <div className="formAddNewElement">
                    <input id="addNewElementTittle" type="text" placeholder="Title" className="titleNoteControl" />
                    <textarea id="addNewElementContent" className="textAreaAddElement"></textarea>
                    <button id="addNoteButton" className="editionButtonControls addNewElementButton"><span className="editionTextControl">Add Tag</span></button>
                  </div>
                </div> 

                */}
            </div>

        );
    },
});

module.exports = InformationPanel;  

