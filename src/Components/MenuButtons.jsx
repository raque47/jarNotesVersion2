const React = require('react');

const MenuButtons = React.createClass({
  render() {
    return (
      <div>
        <div className="navContainerNotes">
          <button id="" className="navBar__button buttons"><img src={require(`../images/${this.props.mainButton}`)} className="navBar__images" data-toggle="tooltip" data-placement="top" title={this.props.tooltipName} /><span className="navElementSpanVisible">{this.props.buttonName}</span></button>
          <div id="" className="hiddenButtons">
            <button id="" className="hiddenButtons__button buttons"><img src={require(`../images/${this.props.searchIcon}`)} className="navBar__hiddenImages" /> <span className=""> {this.props.searchText}</span></button>
            <a href="#addNewElementForm" id="" className="hiddenButtons__button buttons"><img src={require(`../images/${this.props.hiddenIcon}`)} className="navBar__hiddenImages" /> <span className="buttonFontHidden"> {this.props.text}</span></a>
          </div>
        </div>
        <button className="dropdown-toggle navBar__button buttons" data-toggle="dropdown"><img src={require('../images/user-button.svg')} className="navBar__images" /><span className="caret"></span></button>
        <ul className="dropdown-menu">
          <li><a href="#">Settings</a></li>
          <li><a href="#">Log Out</a></li>
        </ul>
      </div>
    );
  },
});

module.exports = MenuButtons;  