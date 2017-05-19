const React = require('react');
const bootstrap = require('../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');
const style= require('../scss/pages/_MenuButtonsStyle.scss');


const MenuButtons = React.createClass({
  render() {
    return (
        <div className="inlineContainer">
          <button id="" className="navBar__button buttons"><img src={require(`../images/${this.props.mainButton}`)} className="navBar__images" data-toggle="tooltip" data-placement="top" title={this.props.tooltipName} /><span className="navElementSpanVisible">{this.props.buttonName}</span></button>
          <div id="" className="hiddenButtons">
            <button id="" className="hiddenButtons__button buttons"><img src={require(`../images/${this.props.searchIcon}`)} className="navBar__hiddenImages" /> <span className="buttonFontHidden"> {this.props.searchText}</span></button>
            <a href="#addNewElementForm" id="" className="hiddenButtons__button buttons"><img src={require(`../images/${this.props.hiddenIcon}`)} className="navBar__hiddenImages" /> <span className="buttonFontHidden"> {this.props.text}</span></a>
          </div>
        </div>
    );
  },
});

module.exports = MenuButtons;  