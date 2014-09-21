/** @jsx React.DOM */
'use strict';

var React = require('react'),
    Link = require('react-router').Link;

var Header = React.createClass({
    render: function() {
        return (
            <header>
                <ul className="nav nav-pills pull-right">
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
                <h1>React SPA</h1>
            </header>
        );
    }
});

module.exports = Header;