const React = require('react');

const Notes = React.createClass({   
render(){
     return (
     <li>HOOOOLAAAA</li>
    );
  },

   createListItem: function(note) {
    return (
      <li key={note.id}> 
      </li>
    );
  }


});

module.exports = Notes;  