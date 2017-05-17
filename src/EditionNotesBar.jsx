const React = require('react');

const EditionNotesBar = React.createClass({ 

 render(){
     return (           
            <div class="col-md-8 col-sm-11  col-xs-12 secondElement">
                <div class="form-group noteText">
                    <input type="text" placeholder="Title" class="titleNoteControl" id="titleNote"/>
                    <textarea class="form-control noteContentFont" rows="5" id="noteContent" placeholder="Write a new note..."></textarea>
                    <div class="editionNotesControl">
                        <button class="editionButtonControls"><img src={require('./images/paint-button.svg')} className="navBar__images" data-toggle="tooltip" data-placement="top" title="Font Color"/></button>
                        <button class="editionButtonControls"><img src="../images/upload-button.svg" class="navBar__images" data-toggle="tooltip" data-placement="top" title="Load Image"/></button>
                        <button id="addNoteButton" class="editionButtonControls"><span class="editionTextControl" data-toggle="tooltip" data-placement="top" title="Add Note">Save Note</span></button>
                    </div>
                </div>            
            </div>

    );
  },
});


module.exports = EditionNotesBar;  
