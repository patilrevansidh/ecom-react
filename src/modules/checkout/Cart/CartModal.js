import React, { Component } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import { handleModal } from '../../../common/actions/authAction';
import { connect } from 'react-redux';
import './cart.scss';

class CartModal extends Component {

    handleCloseCartModal = () => {
        this.props.handleModal({ showCartModal: false })
    }

    render() {
        return (
            <Modal size='lg' show={this.props.showCartModal} onHide={this.handleCloseCartModal} >
                <Modal.Header>
                    <Modal.Title>{this.props.cart.length} Items in Your Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="shopmate-cart-container" >
                        <Row>
                            <Col className="table-header-item" md={{ span: 5 }} > Item </Col>
                            <Col className="table-header-item" md={{ span: 2 }} > Size </Col>
                            <Col className="table-header-item" md={{ span: 3 }} > Quantity </Col>
                            <Col className="table-header-item" md={{ span: 1 }} > Price </Col>
                        </Row>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}
function mapStateToProps(state) {
    return {
        showCartModal: state.profile.showCartModal,
        cart: state.shippingCart.cart
    }
}

function mapDispatchToProps(dispatchEvent) {
    return {
        handleModal: (payload) => { dispatchEvent(handleModal(payload)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartModal);