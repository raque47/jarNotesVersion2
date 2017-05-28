import React from 'react';
import searchStyle from './_search.scss';


class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={"navbar-form " + (this.props.activeSearch ? "searchFormActive" : "searchFormHidden")} role="search">
                <div id="searchForm__input"
                    className={"input-group " + (this.props.activeSearch ? "searchFormActive" : "searchFormHidden")}>
                    <input type="text"
                        className={"form-control " + (this.props.activeSearch ? "searchFormActive" : "searchFormHidden")}
                        placeholder="Search"
                        name="srch-term" id="srch-term" />

                    <div className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                            <img src={require('../../images/search-button.svg')}
                                className="searchButtonInformationPanel" />
                        </button>

                    </div>
                </div>
                { /*<input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placeholder='Search' /> */}
            </div>
        );
    }
}
    
export default Search;

