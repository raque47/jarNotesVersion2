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
<<<<<<< HEAD
    this.updateSearchInput = this.updateSearchInput.bind(this);
=======
    this.addTagsOfNote = this.addTagsOfNote.bind(this);
    this.setIdTagsNote = this.setIdTagsNote.bind(this);
>>>>>>> 9fca531bd1b0e08b983c1c16e3f9fda89625a6fc
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

  addTagsOfNote() {
    let newTag = {};
    const self = this;
    let allTagsAdded = false;
    let tagAdded = 0;
    let counter = 0;
    var postPromises = [];

    /* for (let i = 0; i < this.props.tagsNote.length; ++i) {
       newTag = { name: this.props.tagsNote[i] }
       let promise = axios.post('http://localhost:3000/api/tags', newTag).then(() => {
         counter=counter+1;
         postPromises.push(promise)
         console.log("estoy en pooooost!!!");
       });
     };
 
     Promise.all(postPromises).then(console.log("El counter vale: " + counter)); */

    /*  Promise.all(this.props.tagsNote.map(function (item) {
         newTag = { name: item }
         return (axios.post('http://localhost:3000/api/tags', newTag).then(() => {
           console.log("estoy en pooost");
         }));
     })).then(console.log("Promesas cumplidas!! ")); */

    var x = this.prueba();
    var y = this.prueba2();

   /* var z = new Promise((resolve, reject) => {
      this.prueba3();
    }); */

    //  var z  = this.prueba3();
    var g = z[0];
    //  var resolvedPromisesArray = [Promise.(g) ];
    var p = Promise.all([g]);
    // immediately logging the value of p
    console.log(p);
    // using setTimeout we can execute code after the stack is empty
    setTimeout(function () {
      console.log('Promesas cumplidas!! ');
      console.log(p);
    });

    Promise.all([y, z, g]).then(console.log("Promesas cumplidas!! "));
  }

  prueba() {
    axios.get('http://localhost:3000/api/tags').then(console.log("prueba 1 funcion"));
  }

  prueba2() {
    axios.get('http://localhost:3000/api/tags');
    console.log("prueba 2 funcion");
  }

  prueba3() {
      var x = (this.props.tagsNote.map(function (item) {
      const newTag = { name: item };
      return (axios.get('http://localhost:3000/api/tags').then(() => {
        console.log("estoy en geeeeeeeeet");
      }));
    }));

    return x;
    // console.log("el contenido de map es: " + x + " contenido:" + x[0]);
  }


  setIdTagsNote() {
    const self = this;
    let counter = 0;
    let idNoteTags = [];
    axios.get('http://localhost:3000/api/tags').then(function (response) {
      for (let i = 0; i < self.props.tagsNote.length; ++i) {
        counter = 0;
        while (counter < response.data.length && self.props.tagsNote[i] != response.data[counter].name) {
          ++counter;
        }
        if (counter < response.data.length) {
          idNoteTags.push(response.data[counter]._id);
          self.props.setIdTagsNote(idNoteTags);
        }
      }
    })
  }


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
          //     this.addTag();
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
        console.log("ENTRE AL CASO DE INFO TAGS NOTE" + "EL SECOND ACTION ES: " + this.props.secondActionType);
        if (this.props.secondActionType == "saveTags") {
          console.log("ESTOY ENTRANDO A AGREGAR TAGS DE NOTA!!!");
          if (this.state.tagEvent === true) {
            console.log("");
            self.addTagsOfNote();
            // self.setIdTagsNote()

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