const preload = require('../../public/db.json');
const React = require('react');
const Notes = require('../Components/Notes/Notes');

const NotesContainer = React.createClass({
getInitialState() {
return {
showNote: false,
}
},
showNoteEvent(name) {
console.log("estoy en showNoteEvent" + name);
if (this.state.showNote === false) {
this.setState({ showNote: true });
}
else {
this.setState({ showNote: false });
}
},
render: function () {

if (this.props.totalNotes.length > 0) {

    return <div>
      {preload.notes.map((item) => {
        return <Notes
          showNote={this.state.showNote}
          activeAddNote="true"
          titleNote={item.noteTitle} 
          textNote={item.noteContent}
          onClickShowEvent={this.showNoteEvent}
          />;      
      }
      
      )  };  
     </div>;
    /*// console.log("cantidad de elementos es: " + this.props.totalNotes.length );
    let notesComponents = this.props.totalNotes.map(function (item) {
      console.log("EN MAP: " + item.note.title);
      console.log("EN MAP: " + item.note.id);

      //console.log("Total: " + this.props.totalNotes.length );
      return <Notes key={item.note.id}
      showNote="true"
      activeAddNote="true"
      titleNote={item.note.title}
      textNote={item.note.noteContent}
      onClickShowEvent={this.showNoteEvent} />;
    });*/

    // return <div>{notesComponents}</div>;
}
return null;

}
});

module.exports = NotesContainer;

  /*render: function () {

   // if (this.props.totalNotes.length > 0) {
    //  console.log("cantidad de elementos es: " + this.props.totalNotes.length );
    // let notesComponents = this.props.totalNotes.map(function (item) {
     
     return <div>
      {preload.notes.map((item) => {
        return <Notes
          showNote="true"
          activeAddNote="true"
          titleNote={item.note.title} 
          textNote={item.note.noteContent}
          onClickShowEvent={this.showNoteEvent}
          noteElement={ item.note } />;      
      }
      
      )  };  
     </div>;
   //}
   // return null; 
  }
}
);*/