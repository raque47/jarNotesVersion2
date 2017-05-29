import React from 'react';
import {Link} from 'react-router-dom';

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.deleteTag = this.deleteTag.bind(this);
    this.editTag = this.editTag.bind(this);
  }
 deleteTag(event) {
    const idTagSelected = this.props.tagId;
    this.props.onClickDeleteEvent(idTagSelected);
  }
  editTag(event) {
    console.log("EDIT ** TAAAGGGGGG!!");
    const idTagSelected = this.props.tagId;
    const tagNameSelected = this.props.name;
    this.props.onClickEditEvent(idTagSelected, tagNameSelected);
  }
  render() {
    return (
      <div id= {this.props.tagId} className={"infoPanelElements borderStyle " +
        (this.props.showAllTags ? "showComponent" : "hideComponent")} >
        <div className= "headerNoteContainer" >
          <span className="noteAddedTitle">{this.props.name}</span>
          <button className="buttons infoPanelButtons"
            onClick={this.deleteTag}><img
              src={require("../../images/trash-button.svg")}
              className="navBar__images" /></button>
          <Link to={'/editTag'}>    
            <button className="buttons infoPanelButtons"
                onClick={this.editTag}><img
                  src={require("../../images/edit-button.svg")}
                  className="navBar__images" /></button>
          </Link>
        </div>
      </div>
    );
  }
};

export default Tags;

