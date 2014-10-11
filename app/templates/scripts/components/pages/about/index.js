/** @jsx React.DOM */
'use strict';

var React = require('react'),
    Button = require('react-bootstrap/button');

var Header = require('components/header'),
    Footer = require('components/footer'),
    Store = require('store'),
    Actions = require('actions');

var AboutPage = React.createClass({
    getInitialState: function() {
        return Store.toJSON();
    },

    componentDidMount: function() {
        Store.listenTo(Store, 'change:text', this._onChange);
    },

    componentWillUnmount: function() {
        Store.stopListening(Store, 'change:text', this._onChange);
    },

    render: function() {
        return (
            <div>
                <Header />

                <div className="jumbotron">
                    <p className="lead">This text is loaded using ajax in the store</p>
                    <Button bsStyle="success" onClick={this._handleClick}>Get new text</Button>
                </div>
                <p>{this.state.text}</p>
                <Footer />
            </div>
        );
    },

    _onChange: function() {
        this.setState(Store.toJSON());
    },

    _handleClick: function() {
      Actions.getText();
    }
});

module.exports = AboutPage;
