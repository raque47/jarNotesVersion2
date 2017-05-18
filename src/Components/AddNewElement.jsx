const React = require('react');

const AddNewElement = React.createClass({
  render() {
    return (
      <div id="addNewElementForm" className="addNewElementPanel addNewElementFormHidden">
        <div className="addNewElementTittleType">
          <h4 id="" className="fontFamily"> Add a new tag</h4>
        </div>
        <div className="formAddNewElement">
          <input id="addNewElementTittle" type="text" placeholder="Title" className="titleNoteControl" />
          <textarea id="addNewElementContent" className="textAreaAddElement"></textarea>
          <button id="addNoteButton" className="editionButtonControls addNewElementButton"><span className="editionTextControl">{this.props.buttonName}</span></button>
        </div>
      </div>
    );
  },
});

module.exports = AddNewElement;  