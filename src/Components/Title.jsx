const React = require('react');
const _titleStyle = require('../scss/pages/_title.scss');

const Title = React.createClass({
  activateItemsName() {
    this.props.onClickButton();
  },
  render() {

    return (
      <h2 id="informationPanelTittle" className="fontFamily">{this.props.panelTitle}</h2>
    );
  },
});

module.exports = Title;