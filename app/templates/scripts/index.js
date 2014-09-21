/** @jsx React.DOM */
'use strict';

/*
Views ---> (actions) ----> Dispatcher ---> (registered callback) ---> Stores -------+
Ʌ                                                                                   |
|                                                                                   V
+-- (Controller-Views "change" event handlers) ---- (Stores emit "change" events) --+
*/

var React = require('react'),

    Router = require('react-router'),
    Routes = Router.Routes,
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute;

var HomePage = require('components/pages/homepage'),
    AboutPage = require('components/pages/about'),
    ContactPage = require('components/pages/contact');

var App = React.createClass({

    render: function() {
        return (
            <Routes>
                <Route name="home" path="/" handler={HomePage}>
                </Route>
                <Route name="about" path="about" handler={AboutPage}>
                </Route>
                <Route name="contact" path="contact" handler={ContactPage}>
                </Route>
            </Routes>
        );
    }

});

React.renderComponent(<App />, document.querySelector('#spa'));
