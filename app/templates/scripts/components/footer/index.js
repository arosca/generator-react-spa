/** @jsx React.DOM */
'use strict';

var React = require('react');

var Footer = React.createClass({
    render: function() {
        return (
            <footer>
            	<p><a href="https://github.com/arosca/generator-react-spa" target="_blank">Frok me on Github</a></p>
            </footer>
        );
    }
});

module.exports = Footer;
