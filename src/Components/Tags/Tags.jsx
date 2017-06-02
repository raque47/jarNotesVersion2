import React from 'react';
import { Link } from 'react-router-dom';
import InlineEdit from 'react-edit-inline';
import tagsStyle from './_tags.scss';

class Tags extends React.Component {
  
  constructor(props) {
    super(props);
    this.deleteTag = this.deleteTag.bind(this);
    this.dataChanged = this.dataChanged.bind(this);
  }
  deleteTag(event) {
    const idTagSelected = this.props.tagId;
    this.props.onClickDeleteEvent(idTagSelected);
  }
  dataChanged(data) {
    const idTagSelected = this.props.tagId;
    this.setState({data})
    this.setState({name:data.message});
    this.props.onClickEditEvent(idTagSelected, data.message);
  }
  customValidateText(text) {
    return (text.length > 0 && text.length < 64);
  }
  render() {
    return (     
      <div id={this.props.tagId} className={"infoPanelElements borderStyle "} >
        <div className="tagContainer" >
          <InlineEdit
            validate={this.customValidateText}
            activeClassName="editing"
            text={this.props.elementName}
            paramName="message"
            change={this.dataChanged}
            className="tagAddedName"
            style={{ minWidth: 150, display: 'inline-block', outline: 0,borderColor: 'E7E7E7'}}
          />
          <button className="trashButton infoPanelButtons"
            onClick={this.deleteTag}><img
              src={require("../../images/trash-button.svg")}
              className="navBar__images" />
          </button>
        </div>
      </div>
    );
  }
};

export default Tags;

