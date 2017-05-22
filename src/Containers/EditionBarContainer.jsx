const React = require('react');
const EditionBar= require('../Components/EditionBar');


const EditionBarContainer = React.createClass({
    getInitialState() {
      return {
         displayEvent: false
      }
   },
   showItemsName() {
      if (this.state.displayEvent === true) {
         this.setState({ displayEvent: false });
      }
      else {
         this.setState({ displayEvent: true });
      }
   },

   render() {

      return (
          <EditionBar 
          onClickButton={this.showItemsName}
          displayEvent = {this.state.displayEvent}/>
        );
    },
});

module.exports = EditionBarContainer;  

               