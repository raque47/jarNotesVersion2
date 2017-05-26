const React = require('react');
const render = require('react-dom');
const image = require('../../images/logo.png')
const NavBar = require('../NavBar/NavBar');
const NoteEditionContainer = require('../../Containers/NoteEditionContainer');
const EditionBarContainer = require('../../Containers/EditionBarContainer');
const InformationPanel = require('../InformationPanel/InformationPanel');

const reactRouter = require('react-router-dom');
const Link = reactRouter.Link;
const Route = reactRouter.Route;
const Switch =reactRouter.Switch;
const BrowserRouter =reactRouter.BrowserRouter;

const Main = React.createClass({
  render() {
    return (
      <div> 
          <Route path ="/" render={ () => (
            <NavBar
              onClickMainButtonEvent={this.props.onClickMainButtonEvent}
              onClickSearchEvent={this.props.onClickSearchEvent}
              onClickViewEvent={this.props.onClickViewEvent}
              onClickAddEvent={this.props.onClickAddEvent} />
             )}
          />  

            <div className="container-fluid container-fluid-fix ">
              <div className="row edition secondContainer">
                <div className="col-md-1 firstElement">
                 <EditionBarContainer/>
                </div>
                <div className="col-md-8 col-sm-11  col-xs-12 secondElement">


                <Switch>
                  <Route path="/editNote" render={() => (
                      <NoteEditionContainer onClickAddNote={this.props.onClickAddNote}
                        noteTitle={this.props.noteTitle}
                        noteContent={this.props.noteContent}
                        editNote={true}
                      />
                    )}/>
           
                  <Route exact path="/" render={() => (
                      <NoteEditionContainer onClickAddNote={this.props.onClickAddNote}  editNote={false}/>  
                  )}/>

                  <Route path="/" render={() => (
                      <NoteEditionContainer onClickAddNote={this.props.onClickAddNote}  editNote={false}/>  
                  )}/>

                </Switch>
                    
        



                </div>
                <div className="col-md-3 col-sm-11 col-xs-12 thirthElement">
                  <InformationPanel
                    onClickMainButtonEvent={this.props.mainButtonEvent}
                    activeSearch={this.props.activeSearch}
                    activeView={this.props.activeView}
                    activeAddElement={this.props.activeAddElement}
                    idAction={this.props.idAction}
                    noteTitle={this.props.noteTitle}
                    noteContent={this.props.noteContent}
                    actionType={this.props.actionType}
                    showAllNotes={this.props.showAllNotes}
                    addNoteEvent={this.props.addNoteEvent}
                    onClickEditNote = {this.props.onClickEditNote}>
                    </InformationPanel>
                </div>
              </div>
            </div>
        
      </div>
    );
  },
});

module.exports = Main;