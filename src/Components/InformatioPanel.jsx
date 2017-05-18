
const IformationPanel = React.createClass({
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

              {/* LISTA DE NOTAS/FOLDERS/TAGS */}
              <InformationContainer/>
     
              {/* ADD FOLDER/TAG COMPONENT */}
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

                
            </div>

        );
    },
});

module.exports = IformationPanel;  
