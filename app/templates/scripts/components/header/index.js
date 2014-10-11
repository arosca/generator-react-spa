/** @jsx React.DOM */
'use strict';

var React = require('react'),
    Link = require('react-router').Link;

var Header = React.createClass({
    render: function() {
        return (
            <header>
                <h1>React SPA</h1>
                <ul className="nav nav-pills">
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="products">Products</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </header>
        );
    }
});

module.exports = Header;
