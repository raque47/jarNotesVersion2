import React from 'react';
import tagsSelectionStyle from './_tagsSelection.scss'
import TagsContainer from '../../Containers/TagsContainer'
import DropDownTags from '../DropDownTags/DropDownTags'
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';


class TagsSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idTag: "",
            title: "Your tags"
        }
        this.acceptTag = this.acceptTag.bind(this);
        this.getTagId = this.getTagId.bind(this);
    }
    acceptTag() {
        this.props.onClickAcceptTag(this.state.idTag, null, null);
    }
    getTagId(idSelectedTag, nameSelectedTag) {
        this.state.idTag = idSelectedTag;
        this.setState({ title: nameSelectedTag });
    }
    sendNewTagName(event) {
        const newTagName = event.target.value;
        this.props.getNewTagName(newTagName);
    }
    render() {
        return (
            <div className={"opac " + (this.props.showTagSelectionModal ? "showModal" : "hideModal")}>
                <div className="modalStyle showModalAnimation">
                    <h4 className="tagLabel">Add or choose a tag for your new note:</h4>
                    <div className="containerInfo">
                        <div className="containerElectionTags">
                            <input type="text"
                                onChange={this.sendNewTagName}
                                value={this.props.resetTitle}
                                placeholder="Title"
                                className="titleNoteControl"
                                id="newTagOfNote"
  
                            />
                            <div className="dropdown foldersDropdown">
                                <button className="btn btn-primary dropdown-toggle"
                                    type="button"
                                    data-toggle="dropdown"
                                    data-hover="dropdown">
                                    {this.state.title}
                                    <span className="caret"></span>
                                </button>
                                <DropDownTags tags={this.props.tags} getTagId={this.getTagId} />
                            </div>
                        </div>
                        <div className="containerSelectedTags">
                            <div className="listSelectedTags">
                                No tag(s) selected yet!
                            </div>
                            <button type="button" onClick={this.acceptFolder} className="closeModal editionButtonControls" >
                                <span className="editionTextControl" data-toggle="tooltip" data-placement="top" title="Add Note">
                                    Accept
                                </span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default TagsSelection;