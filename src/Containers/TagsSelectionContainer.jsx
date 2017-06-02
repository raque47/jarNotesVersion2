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
            allTagsOfTheNote: [], //el nuevo mas los viejos
            title:"Your Tags",
            idSelectedTag:"",
            addedTags:[],
            prueba:""
        };
        this.getNewTagName = this.getNewTagName.bind(this);
        this.resetTagInput = this.resetTagInput.bind(this);
        this.getTagId = this.getTagId.bind(this);
        this.addTag = this.addTag.bind(this);
        this.resetTagsAdded = this.resetTagsAdded.bind(this);
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
    resetTagInput(){
        this.setState({ newTagName: "", resetName:"", resetControl:true });
    }
    getTagId(idChosenTag, nameSelectedTag) {
        this.setState({ idSelectedTag:idChosenTag, title: nameSelectedTag });
    }
    addTag(tag){
        this.setState({ addedTags: this.state.addedTags.concat([tag]), prueba:"hola"});
    }
    resetTagsAdded(){
        this.setState({addedTags:[]});
    }
    render() {
        /*if (this.props.actionType === "chooseTag") {
            this.getAllTags();
        }
        else{
            if (this.props.actionType === "addNewTag"){

            }
        } */
           {console.log("added tags en container es: " + this.state.addedTags)}
        return (
            <TagsSelection 
                showModalTagSelection = {this.props.showModalTagSelection}
                showTagSelectionModal={this.props.showTagSelectionModal}
                onClickAcceptTag={this.props.onClickAcceptTag}
                actionType={this.props.actionType} 
                tags={this.state.allTags}
                tagsOfTheNote = {this.state.allTagsOfTheNote}
                getNewTagName={this.getNewTagName}
                resetTagName={this.state.resetName}
                resetTagInput={this.resetTagInput}
                title={this.state.title}
                idSelectedTag={this.state.idSelectedTag}
                addTag={this.addTag}
                addedTags={this.state.addedTags}
                prueba = {this.state.prueba}
                resetTagsAdded={this.resetTagsAdded}
            />
        );
    }
};

export default TagsSelectionContainer;  