import React from 'react';
import Notes from '../Components/Notes/Notes';
import InformationPanel from '../Components/InformationPanel/InformationPanel';


class InformationPanelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <InformationPanel
          activeSearch={this.props.activeSearch}
          activeView={this.props.activeView}
          activeAdd={this.props.activeAdd}
          idAction={this.props.idAction}
          totalNotes={this.props.totalNotes}
          typeNotesAction={this.props.typeNotesAction}
          onClickEditNote = {this.props.onClickEditNote}
          idNoteSelected={this.props.idNoteSelected}/>
      </div>
    );
  }
};

export default InformationPanelContainer;  