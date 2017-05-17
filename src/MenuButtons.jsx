const React = require('react');

const MenuButtons = React.createClass({   
render(){
     return (
      <div className="navContainerNotes">
        <button id="" className="navBar__button buttons"><img src={require(`./images/${this.props.mainButton}`)}  className="navBar__images" data-toggle="tooltip" data-placement="top" title={this.props.tooltipName}/><span className="navElementSpanVisible">{this.props.buttonName}</span></button>
        <div id="" className="">
            <button id="" className="hiddenButtons__button buttons"><img src={require(`./images/${this.props.searchIcon}`)}  className="navBar__hiddenImages"/> <span className=""> {this.props.searchText}</span></button>
            <a href="#addNewElementForm" id="" className="hiddenButtons__button buttons"><img src={require(`./images/${this.props.hiddenIcon}`)} className="navBar__hiddenImages"/> <span className=""> {this.props.text}</span></a>
        </div>
      </div>
    );
  },
});


module.exports = MenuButtons;  