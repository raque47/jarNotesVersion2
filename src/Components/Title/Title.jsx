import React from 'react';
import titleStyle from './_title.scss';


class Title extends React.Component {
  constructor(props) {
    super(props);
  }

   render() {
return (
      <h2 id="informationPanelTittle" className="fontFamily">{this.props.panelTitle}</h2>
    );
   }
}

export default Title;