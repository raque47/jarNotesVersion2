const React = require('react');
const InformationContainer = require('../Containers/InformationContainer');

const Search = React.createClass({
    render() {
        return (
            <div>

                  <div id="searchForm__input" className="input-group searchFormHidden">
                    <input type="text" className="form-control searchFormHidden" placeholder="Search" name="srch-term" id="srch-term" />
                    <div className="input-group-btn">
                      <button className="btn btn-default" type="submit"><img src={require('../images/search-button.svg')} className="searchButtonInformationPanel" /> </button>
                    </div>
                  </div>



                  { /*<input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placeholder='Search' /> */ }
            </div>
        );
    },
});

module.exports = Search;

