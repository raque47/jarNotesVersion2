const React = require('react');
const bootstrap = require('../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');
const MenuButtonsContainer = require('../Containers/MenuButtonsContainer');

const syle=require('../scss/pages/_NavBarStyle.scss');

const NavBar = React.createClass({
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>    
                        </button>
                        <a className="navbar-brand pull-left" href="#"><img src={require('../images/logo.png')} /></a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <div className="nav navbar-nav navbar-right">                         
                            <MenuButtonsContainer/>
                        </div>
                    </div>
                </div>
            </nav>
        );
    },
});

module.exports = NavBar;  
