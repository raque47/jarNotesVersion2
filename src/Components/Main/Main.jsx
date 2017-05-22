const React = require('react');
const render = require('react-dom');
const image = require('../../images/logo.png')
const NavBar = require('../NavBar/NavBar');
const NoteEditionContainer = require('../../Containers/NoteEditionContainer');
const EditionBarContainer = require('../../Containers/EditionBarContainer');
const InformationPanel = require('../InformationPanel/InformationPanel');

const Main = React.createClass({
  render() {
    return (
      <div>
        <Switch>
        <NavBar
          onClickSearchEvent={this.props.onClickSearchEvent}
          onClickViewEvent={this.props.onClickViewEvent}
          onClickAddEvent={this.props.onClickAddEvent} />
        <div className="container-fluid container-fluid-fix ">
          <div className="row edition secondContainer">
            <div className="col-md-1 firstElement">
              <EditionBarContainer />
            </div>
            <div className="col-md-8 col-sm-11  col-xs-12 secondElement">
              <NoteEditionContainer onClickAddNote={this.props.onClickAddNote}>
              

              </NoteEditionContainer>
            </div>
            <div className="col-md-3 col-sm-11 col-xs-12 thirthElement">
              <InformationPanel
                activeSearch={this.props.activeSearch}
                activeView={this.props.activeView}
                activeAddElement={this.props.activeAddElement}
                idAction={this.props.idAction}
                activeAddNote={this.props.activeAddNote}
                noteTitle={this.props.noteTitle}
                noteContent={this.props.noteContent}
                totalNotes={this.props.totalNotes} >
                </InformationPanel>
            </div>
          </div>
        </div>
        </Switch>
      </div>
    );
  },
});

module.exports = Main;