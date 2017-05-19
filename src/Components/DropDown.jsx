
const React = require('react');


const DropDown = React.createClass({
    render() {
        return (
            <div className="inlineContainer">
                <button className="dropdown-toggle navBar__button buttons" data-toggle="dropdown"><img src={require(`../images/${this.props.userIcon}`)} className="navBar__images" /><span className="caret"></span></button>
                <ul className="dropdown-menu">
                    <li><a href="#">{this.props.item1}</a></li>
                    <li><a href="#">{this.props.item2}</a></li>
                </ul>
            </div>
        );
    },
});

module.exports = DropDown;  
