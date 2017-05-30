import React from'react';
import addNewElementStyle from './_addNewElement.scss';
import { Link, Route, Switch } from 'react-router-dom';

class AddNewElement extends React.Component {
  constructor(props) {
    super(props);
    this.sendTagName = this.sendTagName.bind(this);
  }
  sendTagName(event){
    const tagName=event.target.value;
    console.log("tagName ESS: " +tagName );
    this.props.setTagName(tagName);
  }

  render() {
    return (
      <div id="addNewElementForm" className={"addNewElementPanel " + (this.props.activeAddElement ? "addNewElementFormVisible" : "addNewElementFormHidden" )} >
        <div className="addNewElementTittleType">
          <h4>{"Add " + this.props.idAction}</h4>
        </div>
        <div className="formAddNewElement">
          <textarea type="text" onChange={this.sendTagName} 
              value={this.props.resetName} 
              placeholder="Title"  
              id="addNewElementTittle" 
              className="textAreaAddElement">
          </textarea>
          <Link to={"/add"+this.props.idAction}>  
            <button onClick={this.props.onClickAddElement} 
                    id="addElementButton" 
                    className="addNewElementControlButton addNewElementButton">
                        <span className="editionTextControl">{"Add " + this.props.idAction}</span>
              </button>
          </Link>
        
        </div>
      </div>
    );
  }
};

export default AddNewElement;  