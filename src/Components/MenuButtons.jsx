const React = require('react');
// const bootstrap = require('../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');
const style= require('../scss/pages/_MenuButtonsStyle.scss');
//const _menuButtonsStyle = require('../scss/pages/_MenuButtonsStyle.scss');
{/*this.props.visibility*/} 
const MenuButtons = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
    activateHiddenButtons(event) {
      var idButton = event.target.id;
      this.props.onClickMainButton(idButton);
     // this.props.onClick(event.target.id);
      console.log(event.target.id);
   //   this.setState({ searchTerm: event.target.value })
  },
  render() {
    return (
        <div className="inlineContainer">
          <button id={this.props.id} onClick= {this.activateHiddenButtons}  className="navBar__button buttons displayType"><img src={require(`../images/${this.props.mainButton}`)} className="navBar__images" data-toggle="tooltip" data-placement="top" title={this.props.tooltipName} /><span className="navElementSpanVisible">{this.props.buttonName}</span></button>
          <div id="" className={this.props.displayEvent}  >
            <button id="" className='hiddenButtons__button buttons displayType'><img src={require(`../images/${this.props.searchIcon}`)} className="navBar__hiddenImages" /> <span className="buttonFontHidden"> {this.props.searchText}</span></button>
            <a href="#addNewElementForm" id="" className='hiddenButtons__button buttons displayType' ><img src={require(`../images/${this.props.hiddenIcon}`)} className="navBar__hiddenImages" /> <span className="buttonFontHidden"> {this.props.text}</span></a>
          </div>
        </div>
    );
  },
});

module.exports = MenuButtons;  