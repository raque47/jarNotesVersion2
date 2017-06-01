import React from 'react';
import { Link } from 'react-router-dom';
import infoNoteStyle from './_infoNote.scss'
import DropDownItems from '../DropDownItems/DropDownItems'

class InfoNote extends React.Component {

  constructor(props) {
    super(props);
    this.closeInfo = this.closeInfo.bind(this);
  }
  getFolderId() {

  }
  closeInfo(){
    this.props.closeInfoNotePanel();
  }
  render() {
    return (
      <div className={"infoNotePanel " + (this.props.showInfoPanel ? 'showPanel' : 'hidePanel')}>
        <div className="infoNoteContainer">
          <img src={require('../../images/information.-button.svg')} className="infoImage" />
          <span className="infoStyle">Note Info</span>
          <span className="titleStyle">{'"' + this.props.noteTitle + '"'}</span>
          <div className="infoContainer">
            <span className="itemsTitle">Note's Notebook:</span>
            <span className="items">{this.props.folderNameNoteEdited}</span>
          </div>
          <div className="infoContainer">
            <span className="itemsTitleTags">Note's Tags:</span>
            <div className="dropdown foldersDropdown">
              <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown">Tags <span className="caret"></span></button>
              <DropDownItems items={this.props.tagsNameNote} getItemId={this.getFolderId} />
            </div>
          </div>
          <button onClick={this.closeInfo} id="addNoteButton" className="editionButtonControls btnCancel"><span className="editionTextControl" data-toggle="tooltip" data-placement="top" title="Cancel">Cancel</span></button>
        </div>
      </div>
    );
  }
};


export default InfoNote;  