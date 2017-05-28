import React from'react';
import addNewElementStyle from './_addNewElement.scss';

class AddNewElement extends React.Component {
  constructor(props) {
    super(props);
  }
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
  }
};

export default AddNewElement;  