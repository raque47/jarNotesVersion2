import React from 'react';
import { Link } from 'react-router-dom';
import dropDownTagsStyle from './_dropDownTags.scss';

class DropDownTags extends React.Component {
  constructor(props) {
    super(props);
    this.getTag = this.getTag.bind(this);
  }
  getTag(event) {
   this.props.getTagId(event.target.id, event.target.value );
  }
  render() {
    return (
      <ul className="dropdown-menu">
        {this.props.tags.map((item) => {
          return <li key={item._id}>
                   <button id={item._id} onClick={this.getTag} 
                     value={item.name} className="btnDropDown">{item.name}
                    </button> </li>
        })}
      </ul>
    );
  }
};

export default DropDownTags;  