const React = require('react');
const _addNewElement = require('../scss/pages/_addNewElement.scss');
const Title = require('./Title');
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
          <button id="addNoteButton" className="editionButtonControls addNewElementButton"><span className="editionTextControl">{this.props.buttonName}</span></button>
        </div>
      </div>
    );
  },
});

module.exports = AddNewElement;  