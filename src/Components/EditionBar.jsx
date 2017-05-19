const React = require('react');
const _editionBar = require('../scss/pages/_editionBar.scss');

const EditionBar = React.createClass({ 

 render(){
     return (
            <nav className="editionBar__nav">
                    <button id="toggleBar" className="editionBar__button buttons openMenu"><img src={require('../images/menu-button.svg')}  className="navBar__images openMenu"/>  </button>
                    <button className="editionBar__button buttons"><img src={require('../images/alarm-clock-button.svg')}  className="navBar__images"/><span className="editionBar__span buttonFont hiddenControl">Set Reminder</span></button>

                    <button className="editionBar__button buttons"><img src={require('../images/star-button.svg')}  className="navBar__images"/><span className="editionBar__span buttonFont hiddenControl">Add Shortcut</span></button>

                    <button className="editionBar__button buttons"><img src={require('../images/information.-button.svg')}  className="navBar__images"/><span className="editionBar__span buttonFont hiddenControl">Note info</span></button>

                    <button className="editionBar__button buttons"><img src={require('../images/trash-button.svg')}  className="navBar__images"/><span className="editionBar__span buttonFont hiddenControl">Delete Note</span></button>

                    <button className="editionBar__button buttons"><img src={require('../images/share-links.svg')}  className="navBar__images"/><span className="editionBar__span buttonFont hiddenControl">Copy Notelink</span></button>
            </nav>
    );
  },
});


module.exports = EditionBar;  


