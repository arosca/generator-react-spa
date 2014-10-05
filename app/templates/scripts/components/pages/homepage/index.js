/** @jsx React.DOM */
'use strict';

var React = require('react');

var Header = require('components/header'),
    Footer = require('components/footer'),
    Store = require('store'),
    Actions = require('actions');

var HomePage = React.createClass({
    getInitialState: function() {
        return Store.toJSON();
    },

    componentDidMount: function() {
        Store.listenTo(Store, 'change:counter', this._onChange);
    },

    componentWillUnmount: function() {
        Store.stopListening(Store, 'change:counter', this._onChange);
    },

    render: function() {
        return (
            <div>
                <Header />

                <div className="jumbotron">
                    <h1>'Allo, 'Allo!</h1>
                    <p className="lead">This is how state works</p>
                    <p><a className="btn btn-lg btn-success" href="#" onClick={this._clickHandler}>Clicked {this.state.counter} times!</a></p>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <h4>React</h4>
                        <p>A javascript library for building user interfaces.</p>

                        <h4>Flux</h4>
                        <p>Flux is the application architecture that complements React's composable view components by utilizing a unidirectional data flow.</p>

                        <h4>Backbone</h4>
                        <p>Backbone.Models and Backbone.Collections are used as Flux stores.</p>

                        <h4>Browserify</h4>
                        <p>Browserify lets you require('modules') in the browser by bundling up all of your dependencies.</p>
                    </div>

                    <div className="col-lg-6">
                        <h4>Sass</h4>
                        <p>Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>

                        <h4>Bootstrap</h4>
                        <p>Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.</p>

                        <h4>Gulp</h4>
                        <p>The streaming build system.</p>
                    </div>
                </div>

                <Footer />
            </div>
        );
    },

    _clickHandler: function(e) {
        Actions.increment();
        return false;
    },

    _onChange: function() {
        this.setState(Store.toJSON());
    }
});

module.exports = HomePage;
