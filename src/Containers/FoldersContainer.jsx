const React = require('react');
const Folders = require('../Components/Folders/Folders');

const FoldersContainer = React.createClass({
  getInitialState() {
    return {
    }
  },
  render() {
    return (
      <Folders/>  
    );
  },
});

module.exports = FoldersContainer;  