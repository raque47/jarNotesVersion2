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
      showSpecificTag: false,
      idTagSelected: ""
    };
    this.getAllTags = this.getAllTags.bind(this);
    this.showSpecificTag= this.showSpecificTag.bind(this);
    this.addTag = this.addTag.bind(this);
    this.getTags = this.getTags.bind(this);
    this.editTags = this.editTags.bind(this);
    this.updateTag = this.updateTag.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.setTagName = this.setTagName.bind(this);



  } //Close the constructor

  getAllTags(showTags) {
    const self = this;
    let result;

  }
  showSpecificTag(id) {
    console.log("SHOWWWSPECIFIC!!");
    this.setState({ showSpecificTag: true, idTagSelected: id, tagEvent: false });

  }

  addTag() {
    const newTag = { name: this.props.tagName }
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
  editTags(idTagSelected, tagName) {
    this.props.onClickEditTag(tagName, idTagSelected);
    console.log();
  }
  updateTag() {
    const newTag= { _id: this.props.idTagSelected, tagName: this.props.tagName }
    const self = this;
    axios.put('http://localhost:3000/api/tags', newTag).then(function (response) {
       self.getTags();
    })
  }
  deleteTag(idTag){
    const self = this;
    const  deleteTag= {_id: idTag};
     console.log("BORRARR id es: " + deleteTag + " con id: " + deleteTag._id);
    axios.delete('http://localhost:3000/api/tags',  {data: deleteTag}).
    then(function (response) {
       //Se realiza un get de todas las notas 
      self.getTags();
    })
  }
  addEvent() {
    if(this.props.idAction === 'Tags'){
        console.log("!!AddEvent (tags) Entre a"+this.props.idAction);
        this.props.onClickAddElement(this.state.tagName, "add");
        //this.onClickAddElement(this.state.tagName, "add");
        console.log("AddEvent y mi tagName es:" + this.state.tagName);
    }
  }
  setTagName(name) {
    console.log("Entre a setTagName y mi name ANTES es::" + name);
    console.log("Entre a setTagName y mi tagName ANTES es:" + this.state.tagName);
    this.setState({ tagName: name, resetName:name, resetControl:true });
    this.state.tagName = name;
    console.log("Entre a setTagName y mi name DESPUES es::" + name);
    console.log("Entre a setTagName y mi tagName DESPUES es:" + this.state.tagName);
  }
  // componentWillMount() {
  //   console.log("action type es:" + this.props.actionType);
  //   console.log("ESTOY EN TAGSS* CONTAINER!!!!");
  // }

  // componentDidMount() {   

  //   this.getAllTags();
  // }


  render() {
    const tags = this.state.allTags;
    const self = this;
    let showTag = false;
    console.log("VIEWWWWW WOWOW");
    console.log("tags:" +tags);
    console.log("id:" +tags.id);
    console.log("idAction" +tags.idAction);
    console.log("idTagSelected" +tags.idTagSelected);
    console.log("item" +tags.item);
    switch (this.props.actionType) {
      case "viewTags":
        console.log("VIEWWWWW WOWOW");
        if (this.state.tagEvent === true) {
          this.getTags();
          console.log("Hice el getTags");
          this.state.tagEvent = false;
        }
        else {
          this.state.tagEvent = true;
        }
        break;
      case "addTag":
        console.log("ADDD WOWOW!!");
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
        console.log("EDITTTTT WOWOWOWWOW: " + this.props.idTagSelected);
        if (this.state.tagEvent === true) {
          this.updateTag();
          this.state.tagEvent = false;
        }
        else {
          this.state.tagEvent = true;
        }
        break;
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
            tagName={item.name}
            showAllTags={self.props.showAllTags}
            onClickShowEvent ={self.showSpecificTag}
            onClickDeleteEvent={this.deleteTag}
            onClickEditEvent={self.editTag}
            setTagName = {this.setTagName}
          />
        );
      })
    }
    </div>
    );
  }
  };
export default TagsContainer;