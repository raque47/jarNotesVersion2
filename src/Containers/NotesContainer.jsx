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
    //  console.log("cantidad de elementos es: " + this.props.totalNotes.length );
      let notesComponents = this.props.totalNotes.map(function (item) {
        console.log("EN MAP: " + item.note.title);

        //console.log("Total: " + this.props.totalNotes.length );
        return <Notes
          showNote="true"
          activeAddNote="true"
          titleNote={item.note.title} 
          textNote={item.note.noteContent}
          onClickShowEvent={this.showNoteEvent} />; 
      });  

   
      for(let i = 0; i < notesComponents.length; ++i ){
        console.log("NOTAAAAS: " + notesComponents[i] );
      }

   //   console.log("el length vale: " + this.props.totalNotes.length );
 /*     let notesComponents;
      for(let i =0; i < this.props.totalNotes.length; ++i ){
           // console.log("el valor de la i es: " + i);
          //  console.log("Note title es:" + this.props.totalNotes[i].note.title); 
          return <Notes
          showNote="true"
          activeAddNote="true"
          titleNote={this.props.totalNotes[i].note.title} 
          textNote={this.props.totalNotes[i].note.noteContent}
          onClickShowEvent={this.showNoteEvent} />; 
      }   */
   // console.log("Note title es:" + this.props.totalNotes[1].note.title); 

     return <div>{notesComponents}</div>;

 //    console.log("Title Nota es: "+ this.state.note.title );

    //  console.log("Title Nota es: "+ (this.props.totalNotes[0].note.title) );
    //  console.log("Note title es:" + (this.props.note).title); 
    }
    return null; 

  {/*  return <Notes showNote={this.state.showNote} onClickShowEvent={this.showNoteEvent} activeAddNote={this.props.activeAddNote} titleNote={this.props.noteTitle} textNote={this.props.noteContent} />*/}
  }
});

module.exports = NotesContainer;  