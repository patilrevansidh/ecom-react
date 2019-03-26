import React, { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../ProductDetail/productDetail.scss';
import './product.scss';
import { EcomPureComponent } from '../../../common/components/EcomPureComponent';
import { ReviewList } from '../ProductDetail/ReviewComponents';

export class DummyProductCard extends EcomPureComponent {

    render() {
        const productCard = <Col sm={{ span: 10, offset: 2 }} md={{ span: 3, offset: 0 }}>
            <div className="shopmante-card-container mb-3">
                <DummyProductImage detail={true} />
                <Card.Body>
                    <Card.Title className="dummy-product-title" />
                    <Card.Title className="dummy-product-price" />
                </Card.Body>
            </div>
        </Col>
        if (!this.props.detail) return productCard;
        return (
            <div className="shopmate-product-detail-container">
                <div className="margin-top-20">
                    {productCard}
                </div>
                <div className="review-container">
                    <div className="review-layout" >
                        <div className="title"> Product Reviews </div>
                        <div className="user-review" >
                            {
                                [1, 2, 3].map(item => {
                                    return <div key={item} style={{ marginBottom: 25 }}>
                                        <div className="dummy-text" />
                                        <div className="dummy-text dummmy-extra-width" />
                                        <div className="dummy-text" />
                                    </div>
                                })
                            }
                            <div className="divider" />
                        </div>
                        {/* <AddReviewForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}
                            {...this.state} handleRate={this.handleRate}
                        /> */}
                    </div>
                </div>
            </div>
        );
    }
}

const DummyProductImage = (props) => <div className="dummy-image" >
    <i className="fas fa-images"></i>
</div>


export class DummyReviewCard extends EcomPureComponent {
    render() {
        return (
            <Row>
                <Col md={{ span: 4 }} >
                    <div className="dummy-text" />
                    <div className="dummy-text" />
                </Col>
                <Col md={{ span: 8 }} >
                    <div className="dummy-text" />
                </Col>
            </Row>
        )
    }
}