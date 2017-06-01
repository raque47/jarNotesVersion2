import React from 'react';
import { Link } from 'react-router-dom';
import dropDownItemsStyle from './_dropDownItems.scss';

class DropDownItems extends React.Component {
  constructor(props) {
    super(props);
    this.getItem = this.getItem.bind(this);
  }
  getItem(event) {
   this.props.getItemId(event.target.id, event.target.value);
  }
  render() {
    return (
      <ul className="dropdown-menu">
        {this.props.items.map((item) => {
          return <li key={item._id}><button id={item._id} onClick={this.getItem} value={item.name} className="btnDropDown">{item.name}</button> </li>
        })}
      </ul>
    );
  }
};

export default DropDownItems;  