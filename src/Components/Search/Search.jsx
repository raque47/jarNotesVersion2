import React from 'react';
import searchStyle from './_search.scss';
import Tags from '../Tags/Tags';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChangeSearch = this.handleOnChangeSearch.bind(this);
    }
    handleOnChangeSearch(event) {
      //
        const searchInput = event.currentTarget.value;
        this.props.onChangeSearch(searchInput);
         //console.log('ENTREEEEE mi searchInput es'+searchInput);
    }
    render() {
        return (
        console.log('KKK ' + this.props.tags),
        <div>
            <div className={"navbar-form " + (this.props.activeSearch ? "searchFormActive" : "searchFormHidden")} role="search">
            <div id="searchForm__input"
                className={"input-group " + (this.props.activeSearch ? "searchFormActive" : "searchFormHidden")}>
                <input type="text" className="form-control " placeholder="Search" name="srch-term" id="srch-term" onChange={this.handleOnChangeSearch} />
            </div>
            </div>
            <div className="containerOfElements">
            
            {this.props.tags.filter((item) => item.name.toUpperCase().indexOf(this.props.searchInput.toUpperCase()) >= 0)
                .map((item) => (
                console.log('TAGSS ' + tags),
                console.log('Search Input esssS ' + this.props.searchInput),
                console.log('RESULTADO  ' + item.name.toUpperCase().indexOf(this.props.searchInput.toUpperCase())),
                console.log('Name ' + item.name),
                <Tags
                    key={item._id}
                    tagId={item._id}
                    showTag={true}
                    elementName={item.name}
                    showAllTags={this.props.showAllTags}
                    onClickDeleteEvent={this.props.deleteTag}
                    setTagName={this.props.setTagName}
                    activeSearch={this.props.activeSearch}
                />
                ))
            }
            </div>
        </div>
        );
    }
}
    
export default Search;

                
