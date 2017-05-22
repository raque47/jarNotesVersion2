const React = require('react');
const _editionBar = require('../scss/pages/_editionBar.scss');

const EditionBar = React.createClass({
   activateItemsName() {
       this.props.onClickButton();
   },
   render() {

      return (
         <nav className="editionBar__nav">
            <button id="toggleBar" onClick={this.activateItemsName} className="editionBar__button buttons openMenu"><img src={require('../images/menu-button.svg')} className="navBar__images openMenu" /></button>
            <button className="editionBar__button buttons"><img src={require('../images/alarm-clock-button.svg')} className="navBar__images" /><span className={"editionBar__span buttonFont " + (this.props.displayEvent ? 'showControl' : 'hiddenControl')}>Set Reminder</span></button>
            <button className="editionBar__button buttons"><img src={require('../images/star-button.svg')} className="navBar__images" /><span className={"editionBar__span buttonFont " + (this.props.displayEvent ? 'showControl' : 'hiddenControl')}>Add Shortcut</span></button>
            <button className="editionBar__button buttons"><img src={require('../images/information.-button.svg')} className="navBar__images" /><span className={"editionBar__span buttonFont " + (this.props.displayEvent ? 'showControl' : 'hiddenControl')}>Note info</span></button>
            <button className="editionBar__button buttons"><img src={require('../images/trash-button.svg')} className="navBar__images" /><span className={"editionBar__span buttonFont " + (this.props.displayEvent ? 'showControl' : 'hiddenControl')}>Delete Note</span></button>
            <button className="editionBar__button buttons"><img src={require('../images/share-links.svg')} className="navBar__images" /><span className={"editionBar__span buttonFont " + (this.props.displayEvent ? 'showControl' : 'hiddenControl')}>Copy Notelink</span></button>
         </nav>
      );
   },
});


module.exports = EditionBar;


