import React from 'react';
import Notes from '../Components/Notes/Notes';
import Tags from '../Components/Tags/Tags';
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
          onClickMainButtonEvent={this.props.mainButtonEvent}
          activeSearch={this.props.activeSearch}
          activeView={this.props.activeView}
          activeAddElement={this.props.activeAddElement}
          idAction={this.props.idAction}
          noteTitle={this.props.noteTitle}
          noteContent={this.props.noteContent}
          actionType={this.props.actionType}
          showAllNotes={this.props.showAllNotes}
          onClickEditNote={this.props.onClickEditNote}
          idNoteSelected={this.props.idNoteSelected}
          onClickAddTag={this.props.onClickAddTag}
          idTagSelected={this.props.idTagSelected}
          tagName={this.props.tagName}
          showAllTags={this.props.showAllTags}
          getTagName={this.props.getTagName}
          onClickAddTag={this.props.onClickAddTag}>
        </InformationPanel>
      </div>
    );
  }
};

export default InformationPanelContainer;  