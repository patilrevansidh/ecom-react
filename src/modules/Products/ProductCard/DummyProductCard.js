import React, { Component } from 'react';
import { Card, Col } from 'react-bootstrap';
import './product.scss';

export class DummyProductCard extends Component {

    render() {
        return (
            <Col sm={{ span: 10, offset: 2 }} md={{ span: 3, offset: 0 }}>
                <div className="shopmante-card-container mb-3">
                    <DummyProductImage />
                    <Card.Body>
                        <Card.Title className="dummy-product-title" />
                        <Card.Title className="dummy-product-price" />
                    </Card.Body>
                </div>
            </Col>
        );
    }
}

const DummyProductImage = (props) => <div className="dummy-image" >
    <i className="fas fa-images"></i>
</div>