/** @jsx React.DOM */
'use strict';

var React = require('react');

var Header = require('components/header'),
    Footer = require('components/footer'),
    Actions = require('actions');


var ContactPage = React.createClass({
    render: function() {
        return (
            <div>
                <Header />

                <div className="jumbotron">
                    <p className="lead">Finally, get some user data</p>
                </div>

                <form onSubmit={this._handleSubmit}>
                    <div className="form-group">
                        <textarea className="form-control" id="message" placeholder="Message" ref="message"></textarea>
                    </div>
                    <input className="btn btn-primary" type="submit" />
                </form>

                <Footer />
            </div>
        );
    },

    _handleSubmit: function(e) {
        e.preventDefault();
        var message = this.refs.message.getDOMNode().value.trim();
        Actions.userMessage(message);
        this.refs.message.getDOMNode().value = '';
        return;
    }
});

module.exports = ContactPage;
