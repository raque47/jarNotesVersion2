import preload from '../../public/db.json';
import React, { Component } from 'react';
import Tags from '../Components/Tags/Tags';
import axios from '../../node_modules/axios';
import Search from '../Components/Search/Search';
//import tagsStyle from '../Components/Tags/_tags.scss'

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ""
        };
       this.onChangeSearch = this.onChangeSearch.bind(this);
    }


    // updateSearchInput(searchInput) {
    //   console.log('Dentro del updateSearch en tagsContainer searchInput esSs:' + this.state.searchInput);
    //   this.state.searchInput = searchInput;
    //   console.log('Despues dentro del updateSearch en tagsContainer searchInput esSs:' + this.state.searchInput);
    // }


    onChangeSearch(searchInput) {
        //console.log('ENTREEEEE mi searchInput es'+searchInput);
        console.log('ENTREEEEE mi searchInput es '+searchInput);
        //const searchInput = event.currentTarget.value;
        //this.props.updateSearchInput(searchInput);
       //this.state.searchInput = searchInput;
       this.setState({searchInput:searchInput});
       console.log('Despues dentro del updateSearch en tagsContainer searchInput esSs:' + this.state.searchInput);
    
    }
    render() {
        const tags = this.state.allTags;
        console.log('');
        return (
            <Search
                showTag={true}
                showAllTags={this.props.showAllTags}
                onClickDeleteEvent={this.props.deleteTag}
                setTagName={this.props.setTagName}
                activeSearch={this.props.activeSearch}
                tags = {this.props.tags}
                searchInput = {this.state.searchInput}
                onChangeSearch = {this.onChangeSearch}

            />

        );
    }
};
export default SearchContainer;