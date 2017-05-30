import preload from '../../public/db.json';
import React, { Component } from 'react';
import Tag from '../Components/Tags/Tags';
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
    };
    this.deleteSpecificTag = this.deleteSpecificTag.bind(this);
    // this.editTag = this.editTag.bind(this);
  } //Close the constructor

  componentWillMount() {
    console.log("action type es:" + this.props.actionType);
    console.log("ESTOY EN TAGSS* CONTAINER!!!!");
  }

  componentDidMount() {   

    this.getAllTags();
  }

  getAllTags(showTags) {
    const self = this;
    let result;

  }

  deleteSpecificTag(id) {
    console.log("show specific tag***!");
    this.setState({ showSpecificTag: true, idTagSelected: id, tagEvent: false });

  }

  addTag() {
    console.log("Entre a addTag() en TagContainer")
    console.log("ESTE SI DEBE SALIR "+ this.props.tagName  )
    const newTag = { name: this.props.tagName }
    const self = this;
    console.log("DESPUES **"+ newTag )
    console.log("ESTE SI DEBE SALIR "+ this.props.tagName  )
    console.log("DESPUES  this.props.tagName**"+  this.props.tagName )
    axios.post('http://localhost:3000/api/tags', newTag).then(() => {
    console.log("DESPUESS DE POST en addTag() en TagContainer")
       console.log("DESPUES neee tagg**"+ newTag )
      //Se realiza un get de todas los tags 
      self.getTags();
    });
  }


  getTags() {
    console.log("GET en addTag() en TagContainer")
    const self = this;
    axios.get('http://localhost:3000/api/tags').then(function (response) {
      self.setState({ allTags: response.data, tagEvent: false });
    })
  }
  editTags(idTagSelected, tagName) {
    console.log("TENGO QUE EDITAR tagg!!!! " + idTagSelected + " " + tagName );
    this.props.onClickEditTag(tagName, idTagSelected);
    console.log();
  }
  updateTag() {
    const newTag= { _id: this.props.idTagSelected, tagName: this.props.tagName }
    console.log("ENTRE A HACER UPDATE!" + this.props.idTagSelected);
    const self = this;
    axios.put('http://localhost:3000/api/tags', newTag).then(function (response) {
       self.getTags();
    })
  }

  render() {
    const tags = this.state.allTags;
    const self = this;
    console.log("ENTRE A RENDER DE UNA VEZ!");

    let showTag = false;

    switch (this.props.actionType) {
      case "viewTags":
        console.log("VIEW tags EVENT!!");
        if (this.state.tagEvent === true) {
          this.getTags();
          this.state.tagEvent = false;
        }
        else {
          this.state.tagEvent = true;
        }
        break;
      case "addTag":
        console.log("ADD tag EVENT!!");
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
        console.log("ID EN ACTION tagss CONTAINER ES: " + this.props.idTagSelected);
        if (this.state.tagEvent === true) {
          this.updateTag();
          this.state.tagEvent = false;
        }
        else {
          this.state.tagEvent = true;
        }
        break;
    }
    return <div className="containerOfElements">{tags.map((item) => {
      showTag = false;
      if (this.state.showSpecificTag === true) {
        console.log("el id es: " + this.state.idTagSelected);
        console.log("entre a show specific taggg!! verdadero")
        if (item._id === this.state.idTagSelected) {
          showTag = true;
        }
      }
      console.log("showTag vale: " + showTag);
      return <Tag
        key={item._id}
        tagId={item._id}
        showTag={showTag}
        tagName={item.tagName}
        showAllTags={self.props.showAllTags}
        onClickDeleteEvent={self.deleteSpecificTag}
        onClickEditEvent={self.editTag} />
    })}</div>;
  }
}

export default TagsContainer;