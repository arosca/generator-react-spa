/** @jsx React.DOM */
'use strict';

var React = require('react'),
    Modal = require('react-bootstrap/modal'),
    ModalTrigger = require('react-bootstrap/modaltrigger'),
    Button = require('react-bootstrap/button');

var Header = require('components/header'),
    Footer = require('components/footer');

var TestModal = React.createClass({
    render: function() {
        return this.transferPropsTo(
            <Modal title="Modal heading" animation={false}>
                <div className="modal-body">
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
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
        <Button bsStyle="success">Launch demo modal</Button>
    </ModalTrigger>
);

var ProductsPage = React.createClass({
    render: function() {
        return (
            <div>
                <Header />

                <div className="jumbotron">
                    <p className="lead">Using bootstrap components</p>
                    {TestModalTrigger}
                </div>

                <p>For more information on Bootstrap components visit: <a href="http://react-bootstrap.github.io/components.html">React Bootstrap</a></p>

                <Footer />
            </div>
        );
    }
});

module.exports = ProductsPage;
