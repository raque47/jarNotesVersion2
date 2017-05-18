const React = require('react');

const NotesEditionPanel = React.createClass({
   render(){
     return (
        <div className="form-group noteText">
            <input type="text" placeholder="Title" className="titleNoteControl" id="titleNote" />
            <textarea className="form-control noteContentFont" rows="5" id="noteContent" placeholder="Write a new note..."></textarea>
            <div className="editionNotesControl">
                <button className="editionButtonControls"><img src={require('../images/paint-button.svg')} className="navBar__images" data-toggle="tooltip" data-placement="top" title="Font Color" /></button>
                <button className="editionButtonControls"><img src={require('../images/upload-button.svg')}  className="navBar__images" data-toggle="tooltip" data-placement="top" title="Load Image" /></button>
                <button onClick="" id="addNoteButton" className="editionButtonControls"><span className="editionTextControl" data-toggle="tooltip" data-placement="top" title="Add Note">Save Note</span></button>
            </div>
        </div>
    );
  },
});

module.exports = NotesEditionPanel;  