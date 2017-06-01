import React from 'react';
import axios from '../../node_modules/axios';
import TagsSelection from '../Components/TagsSelection/TagsSelection';


class TagsSelectionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            allTags: [], 
            tagId:"",
            newTagName:"",  
            resetName: "",
            resetControl: false,          
            allTagsOfTheNote: [] //el nuevo mas los viejos
        };
        this.getNewTagName = this.getNewTagName.bind(this);
    }
    getAllTags() {
        const self = this;
        axios.get('http://localhost:3000/api/tags').then(function (response) {
            self.setState({ allTags: response.data });
        })
    }
    getNewTagName(name) {
        this.setState({ newTagName: name, resetName:name, resetControl:true });
    }
    render() {
        if (this.props.actionType === "chooseTag") {
            this.getAllTags();
        }
        else{
            if (this.props.actionType === "addNewTag"){

            }
        }
        return (
            <TagsSelection 
                showTagSelectionModal={this.props.showTagSelectionModal}
                onClickAcceptTag={this.props.onClickAcceptTag}
                actionType={this.props.actionType} 
                tags={this.state.allTags}
                tagsOfTheNote = {this.state.allTagsOfTheNote}
             />
        );
    }
};

export default TagsSelectionContainer;  