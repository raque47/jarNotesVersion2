const React = require('react');
// const bootstrap = require('../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');
const style= require('../scss/pages/_MenuButtonsStyle.scss');
//const _menuButtonsStyle = require('../scss/pages/_MenuButtonsStyle.scss');
{/*this.props.visibility*/} 

const render  = require('react-dom');
const MenuButtons = React.createClass({
  activateHiddenButtons(event) {
      //Get the id of the button
      const idButton = event.target.id;
      this.props.onClickMainButton(idButton);
  },
  activateSearchHiddenEvent(event){
    //Get the id of the hidden button
    const idHiddenButton = event.target.id;
    switch(idHiddenButton)
    {
      case "search notes":
        this.props.onClickSearchEvent("Notes");
        break;
      case "search tags":
        this.props.onClickSearchEvent("Tags");
        break;
      case "search folders":
       this.props.onClickSearchEvent("Folders");
       break;
    }
  },
  activateAddHiddenEvent(event){
    const idHiddenButton = event.target.id;
    console.log('el id es: ' +event.target.id);
    switch(idHiddenButton)
    {
      case "view notes":
        this.props.onClickViewEvent("Notes");
        break;
      case "add tags":
        this.props.onClickAddEvent("Tags");
        break;
      case "add folders":
       this.props.onClickAddEvent("Folders");
       break;
    }
  },
  render() {
    return (
        <div className="inlineContainer">
          <button id={this.props.idMainButton} onClick= {this.activateHiddenButtons} className="navBar__button  buttons visibleControl "><img src={require(`../images/${this.props.mainButton}`)} className="navBar__images" data-toggle="tooltip" data-placement="top" title={this.props.tooltipName} /><span className="navElementSpanVisible">{this.props.buttonName}</span></button>
          <div className={this.props.showHiddenButtons ? 'visibleControl' : 'invisibleControl'}  >
            <button id={this.props.hiddenButton1} onClick={this.activateSearchHiddenEvent} className='hiddenButtons__button buttons displayType'><img src={require(`../images/${this.props.searchIcon}`)} className="navBar__hiddenImages" /> <span className="buttonFontHidden"> {this.props.searchText}</span></button>
            <button id={this.props.hiddenButton2} onClick={this.activateAddHiddenEvent} className='hiddenButtons__button buttons displayType' ><img src={require(`../images/${this.props.hiddenIcon}`)} className="navBar__hiddenImages" /> <span className="buttonFontHidden"> {this.props.text}</span></button>
          </div>
        </div>
    );
  },
});

module.exports = MenuButtons;  