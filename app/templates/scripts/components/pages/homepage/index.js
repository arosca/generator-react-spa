/** @jsx React.DOM */
'use strict';

var React = require('react');

var Header = require('components/header'),
    Footer = require('components/footer'),
    Store = require('store'),
    Actions = require('actions');

var HomePage = React.createClass({
    getInitialState: function() {
        return Store.getCount();
    },

    componentDidMount: function() {
        Store.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        Store.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            <div>
                <Header />

                <div className="jumbotron">
                    <h1>'Allo, 'Allo!</h1>
                    <p className="lead">This is how state works</p>
                    <p><a className="btn btn-lg btn-success" href="#" onClick={this._clickHandler}>Clicked {this.state.count} times!</a></p>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <h4>React</h4>
                        <p>A javascript library for building user interfaces</p>

                        <h4>Flux</h4>
                        <p>Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a unidirectional data flow. It's more of a pattern rather than a formal framework, and you can start using Flux immediately without a lot of new code.</p>

                        <h4>Browserify</h4>
                        <p>Browserify lets you require('modules') in the browser by bundling up all of your dependencies.</p>
                    </div>

                    <div className="col-lg-6">
                        <h4>Sass</h4>
                        <p>Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>

                        <h4>Bootstrap</h4>
                        <p>Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.</p>

                        <h4>Gulp</h4>
                        <p>The streaming build system</p>
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
        this.setState(Store.getCount());
    }
});

module.exports = HomePage;
