const React = require('react');
const Notes = require('../Components/Notes/Notes');
const InformationPanel = require('../Components/InformationPanel/InformationPanel');

const InformationPanelContainer = React.createClass({
  render() {
    return (
      <div>
        <InformationPanel
          activeSearch={this.props.activeSearch}
          activeView={this.props.activeView}
          activeAdd={this.props.activeAdd}
          idAction={this.props.idAction}
          totalNotes={this.props.totalNotes}/>
      </div>
    );

  },
});

module.exports = InformationPanelContainer;  