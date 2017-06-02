import preload from '../../public/db.json';
import React, { Component } from 'react';
import Tags from '../Components/Tags/Tags';
import axios from '../../node_modules/axios';
//import tagsStyle from '../Components/Tags/_tags.scss'

class TagsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTag: false,
      allTags: [],
      tagEvent: true,
      idTagSelected: ""
    };
    this.getAllTags = this.getAllTags.bind(this);
    this.addTag = this.addTag.bind(this);
    this.getTags = this.getTags.bind(this);
    //this.editTag = this.editTag.bind(this);
    this.updateTag = this.updateTag.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.setTagName = this.setTagName.bind(this);
    this.getTagsName = this.getTagsName.bind(this);
    this.addTagsOfNote = this.addTagsOfNote.bind(this);
  }

  getAllTags(showTags) {
    const self = this;
    let result;
  }
  addTag() {
    const newTag = { name: this.props.elementName }
    const self = this;
    axios.post('http://localhost:3000/api/tags', newTag).then(() => {
      self.getTags();
    });
  }

  getTags() {
    const self = this;
    axios.get('http://localhost:3000/api/tags').then(function (response) {
      self.setState({ allTags: response.data, tagEvent: false });
    })
  }
  updateTag(idTagSelected, elementName) {
    const newTag = { _id: idTagSelected, name: elementName }
    const self = this;
    axios.put('http://localhost:3000/api/tags', newTag).then(function (response) {
      self.getTags();
    })
  }
  deleteTag(idTag) {
    const self = this;
    const deleteTag = { _id: idTag };
    axios.delete('http://localhost:3000/api/tags', { data: deleteTag }).
      then(function (response) {
        //Se realiza un get de todas las notas 
        self.getTags();
      })
  }
  addEvent() {
    if (this.props.idAction === 'Tags') {
      this.props.onClickAddElement(this.state.elementName, "add");
    }
  }
  setTagName(name) {
    this.setState({ elementName: name, resetName: name, resetControl: true });
    this.state.elementName = name;
  }
  getTagsName() {
    const self = this;
    axios.get('http://localhost:3000/api/tags').then(function (response) {
      let noteTags = [];
      let counter = 0;
      for (let i = 0; i < self.props.idTagsNote.length; ++i) {
        counter = 0;
        while (counter < response.data.length && self.props.idTagsNote[i] != response.data[counter]._id) {
          ++counter;
        }
        if (counter < response.data.length) {
          noteTags.push(response.data[counter]);
        }
      }

      self.props.setTagsName(noteTags);

    })
  }
  addTagsOfNote() {
    let newTag = {};
    for (let i = 0; i < this.props.tagsNote.length; ++i) {
      newTag = { name: this.props.tagsNote[i] }
      axios.post('http://localhost:3000/api/tags', newTag).then(() => {
      });
    }
  }

  render() {
    const tags = this.state.allTags;
    const self = this;
    let showTag = false;
    switch (this.props.actionType) {
      case "viewTags":
        if (this.state.tagEvent === true) {
          this.getTags();
          this.state.tagEvent = false;
        }
        else {
          this.state.tagEvent = true;
        }
        break;
      case "addTag":
        if (this.state.tagEvent === true) {
          this.addTag();
          this.state.tagEvent = false;
        }
        else {
          this.state.tagEvent = true;
        }
        break;
      case "searchTags":
        break;
      case "editTag":
        if (this.state.tagEvent === true) {
          this.updateTag();
          this.state.tagEvent = false;
        }
        else {
          this.state.tagEvent = true;
        }
        break;
      case "infoTagsNote":
        console.log("ENTRE AL CASO DE INFO TAGS NOTE" + "EL SECOND ACTION ES: " + this.props.secondActionType);
        if (this.props.secondActionType == "saveTags") {
          if (this.state.tagEvent === true) {
            console.log("");
            this.addTagsOfNote();
            this.state.tagEvent = false;
          }
          else {
            this.state.tagEvent = true;
          }
        }

        else {
          if (this.props.getTagsEvent === true) {
            if (this.state.tagEvent === true) {
              this.getTagsName();
              this.state.tagEvent = false;
            }
            else {
              this.state.tagEvent = true;
            }
          }
        }
        break;
      default:
        console.log("No entre a ningun caso EN TAGS!");
    }

    return (
      <div className="containerOfElements">
        {
          tags.map((item) => {
            return (
              <Tags
                key={item._id}
                tagId={item._id}
                showTag={true}
                elementName={item.name}
                showAllTags={self.props.showAllTags}
                onClickDeleteEvent={this.deleteTag}
                onClickEditEvent={self.updateTag}
                setTagName={this.setTagName}
              />
            );
          })
        }
      </div>
    );
  }
};
export default TagsContainer;