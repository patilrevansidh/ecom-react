import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { EcomPureComponent } from '../../../common/components/EcomPureComponent';

class CartItem extends EcomPureComponent {
    render() {
        return (
            <Row>
                <Col md={{ span: 5 }}> a</Col >
                <Col md={{ span: 2 }}>s </Col>
                <Col md={{ span: 3 }}>as </Col>
                <Col md={{ span: 1 }}> as</Col>
            </Row>
        );
    }
}
c
export default CartItem;