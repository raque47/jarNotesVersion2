import preload from '../../public/db.json';
import React, { Component } from 'react';
import Tags from '../Components/Tags/Tags';
import axios from '../../node_modules/axios';
import Search from '../Components/Search/Search';
import SearchContainer from './SearchContainer';
//import tagsStyle from '../Components/Tags/_tags.scss'

class TagsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTag: false,
      allTags: [],
      tagEvent: true,
      idTagSelected: "",
      activeSearch: false,
      searchInput: ""
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
    this.updateSearchInput = this.updateSearchInput.bind(this);
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
  // updateSearchInput(searchInput) {
  //   console.log('Dentro del updateSearch en tagsContainer searchInput esSs:' + this.state.searchInput);
  //   this.state.searchInput = searchInput;
  //   console.log('Despues dentro del updateSearch en tagsContainer searchInput esSs:' + this.state.searchInput);


  // }

  updateSearchInput(event) {
    //console.log('ENTREEEEE mi searchInput es'+searchInput);
    //console.log('ENTREEEEE mi searchInput es'+searchInput);
    //const searchInput = event.currentTarget.value;
    //this.props.updateSearchInput(searchInput);
    const input = event.currentTarget.value;
    this.setState({ searchInput: input });
    this.state.searchInput = event.currentTarget.value;
  }
  render() {
    const tags = this.state.allTags;
    console.log('TAGSSS:' + tags);
    // console.log('TAGSSS:' + tags.item.elementName);
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
        console.log('ActiveSearch ess: ' + this.props.activeSearch);
        if (this.props.activeSearch === true) {

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
        console.log("WIIIIII SOY YO!!!!");
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
        if (this.props.getTagsEvent === true) {
          if (this.state.tagEvent === true) {
            this.getTagsName();
            this.state.tagEvent = false;
          }
          else {
            this.state.tagEvent = true;
          }
        }

        break;
      default:
        console.log("No entre a ningun caso EN TAGS!");
    }

    return (
      <SearchContainer
        showTag={true}
        showAllTags={this.props.showAllTags}
        onClickDeleteEvent={this.deleteTag}
        setTagName={this.setTagName}
        activeSearch={this.props.activeSearch}
        tags = {this.state.allTags}
      />
    );
  }
};
export default TagsContainer;