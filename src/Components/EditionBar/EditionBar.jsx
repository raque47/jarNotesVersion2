import React from 'react';
import editionBarStyle from './_editionBar.scss';
import {Link} from 'react-router-dom';

class EditionBar extends React.Component {
  constructor(props) {
    super(props);
    this.editNote = this.editNote.bind(this);

  }
  editNote(){
    console.log("EDITAR NOTA!!!!");
  }
   render() {

      return (
         <nav className="editionBar__nav">
            <button className="editionBar__button buttons"><img src={require('../../images/information.-button.svg')} className="navBar__images" /><span className={"editionBar__span buttonFont " + (this.props.displayEvent ? 'showControl' : 'hiddenControl')}>{this.props.noteTitle} info</span></button>
            <button className="editionBar__button buttons"><img src={require('../../images/trash-button.svg')} className="navBar__images" /><span className={"editionBar__span buttonFont " + (this.props.displayEvent ? 'showControl' : 'hiddenControl')}>Delete {this.props.noteTitle}</span></button>
             <Link to={'/editNote'}>
            <button className="editionBar__button buttons"
                onClick={this.editNote}><img
                  src={require("../../images/edit-button.svg")}
                  className="navBar__images" /><span className={"editionBar__span buttonFont " + (this.props.displayEvent ? 'showControl' : 'hiddenControl')}>Edit {this.props.noteTitle}</span></button>
              </Link>
         </nav>
      );
   }
};

export default EditionBar;


