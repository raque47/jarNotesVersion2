const React = require('react');
const addNewElementStyle = require('./_addNewElement.scss');

const AddNewElement = React.createClass({
  render() {
    return (
      <div id="addNewElementForm" className={"addNewElementPanel " + (this.props.activeAddElement ? "addNewElementFormVisible" : "addNewElementFormHidden" )} >
        <div className="addNewElementTittleType">
          <h4>{"Add " + this.props.idAction}</h4>
        </div>
        <div className="formAddNewElement">
          <input id="addNewElementTittle" type="text" placeholder="Title" className="titleNoteControl" />
          <textarea id="addNewElementContent" className="textAreaAddElement"></textarea>
          <button id="addNoteButton" className="addNewElementControlButton addNewElementButton"><span className="editionTextControl">Add Tag</span></button>
        </div>
      </div>
    );
  },
});

module.exports = AddNewElement;  