const React = require('react');
const notesStyle = require('./_notes.scss');

const Notes = React.createClass({
showNote(){
console.log("show vale: " + this.props.showNote);
this.props.onClickShowEvent("hola");
},
editNote(){
console.log("EDIT!! NOTEEEE!!");
},
render() {
return (
<div className={"infoPanelElements borderStyle " +
(this.props.activeAddNote ? "showComponent" : "hideComponent")} >
<span className="noteAddedTitle">{this.props.titleNote}</span>
<button className="buttons infoPanelButtons"
onClick={this.showNote}><img
src={require("../../images/view-button.svg")}
className="navBar__images"/></button>
<button className="buttons infoPanelButtons"
onClick={this.editNote}><img
src={require("../../images/edit-button.svg")}
className="navBar__images"/></button>
{console.log("SHOW NOTE ES: " + this.props.showNote)}
<p className={"noteContentFont " + (this.props.showNote ? 
"showComponent showNoteAnimation" :
"hideComponent")}>
{console.log("SHOW NOTE ES: " + this.props.showNote)}
{this.props.textNote}</p>
</div>
);
},
});

module.exports = Notes;