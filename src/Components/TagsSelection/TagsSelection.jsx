import React from 'react';
import tagsSelectionStyle from './_tagsSelection.scss'
import TagsContainer from '../../Containers/TagsContainer'
import DropDownTags from '../DropDownTags/DropDownTags'
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';


class TagsSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state={todosTags:[]}
        this.acceptTag = this.acceptTag.bind(this);
        this.sendNewTagName = this.sendNewTagName.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    acceptTag() {
        this.props.onClickAcceptTag(this.props.addedTags);
        this.props.resetTagsAdded();
    }
    sendNewTagName(event) {
        const newTagName = event.target.value;
        this.props.getNewTagName(newTagName);
    }
    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.props.addTag(this.props.resetTagName);
            this.props.resetTagInput();
            this.setState({todosTags: this.props.addedTags});
            console.log("props tiene: " + this.props.addedTags[0]);
        }

    }
    render() {
        const allTags = this.props.addedTags;
        return <div className={"opac " + (this.props.showModalTagSelection ? "showModal" : "hideModal")}>
            <div className="modalTagsStyle showModalAnimation">
                <h4 className="tagLabelTags">Add or choose a tag for your new note:</h4>
                <div className="containerInfo">
                    <div className="containerElectionTags">
                        <input type="text"
                            onChange={this.sendNewTagName}
                            value={this.props.resetTagName}
                            placeholder="Add your new tag"
                            className="newNameControl"
                            id="newTagOfNote"
                            onKeyPress={this.handleKeyPress}
                        />
                    </div>
                    <div className="containerSelectedTags">
                        <div className="listSelectedTags">
                            <ul>{
                                allTags.map((item) => {

                                    return <li>
                                        {item}
                                     </li>
                                })}
                            </ul>
                        </div>
                        <button type="button" onClick={this.acceptTag} className="closeModal editionButtonControls" >
                            <span className="editionTextControl" data-toggle="tooltip" data-placement="top" title="Add Note">
                                Accept
                                </span>
                        </button>
                    </div>
                </div>

            </div>
        </div>

    }
}

export default TagsSelection;