const React = require('react');
// const bootstrap = require('../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');
const style= require('../scss/pages/_MenuButtonsStyle.scss');
//const _menuButtonsStyle = require('../scss/pages/_MenuButtonsStyle.scss');
{/*this.props.visibility*/} 

const render  = require('react-dom');
const MenuButtons = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
    activateHiddenButtons(event) {

      //Get the id of the button
      const idButton = event.target.id;
      this.props.onClickMainButton(idButton);

  },
  render() {
    return (
        <div className="inlineContainer">
          <button id={this.props.idMainButton} onClick= {this.activateHiddenButtons} className="navBar__button  buttons visibleControl "><img src={require(`../images/${this.props.mainButton}`)} className="navBar__images" data-toggle="tooltip" data-placement="top" title={this.props.tooltipName} /><span className="navElementSpanVisible">{this.props.buttonName}</span></button>
          <div id="" className={this.props.showHiddenButtons ? 'visibleControl' : 'invisibleControl'}  >
            <button id="" className='hiddenButtons__button buttons displayType'><img id={this.idHiddenImage1} src={require(`../images/${this.props.searchIcon}`)} className="navBar__hiddenImages" /> <span className="buttonFontHidden"> {this.props.searchText}</span></button>
            <button id="" className='hiddenButtons__button buttons displayType' ><img id={this.idHiddenImage2} src={require(`../images/${this.props.hiddenIcon}`)} className="navBar__hiddenImages" /> <span className="buttonFontHidden"> {this.props.text}</span></button>
          </div>
        </div>
    );
  },
});

module.exports = MenuButtons;  