/** @jsx React.DOM */
'use strict';

var React = require('react'),
    Modal = require('react-bootstrap/modal'),
    ModalTrigger = require('react-bootstrap/modaltrigger'),
    Button = require('react-bootstrap/button');

var Header = require('components/header'),
    Footer = require('components/footer'),
    Actions = require('actions');

var TestModal = React.createClass({
    render: function() {
        return this.transferPropsTo(
            <Modal title="Modal heading" animation={false}>
                <div className="modal-body">
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                </div>
                <div className="modal-footer">
                    <Button onClick={this.props.onRequestHide}>Close</Button>
                </div>
            </Modal>
        );
    }
});

var TestModalTrigger = (
    <ModalTrigger modal={<TestModal />}>
        <Button bsStyle="primary">Launch demo modal</Button>
    </ModalTrigger>
);

var ContactPage = React.createClass({
    render: function() {
        return (
            <div>
                <Header />

                <div className="jumbotron">
                    <p className="lead">Finally, get some user data</p>
                    {TestModalTrigger}
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
