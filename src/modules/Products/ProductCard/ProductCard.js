import React, { Component } from 'react';
import { Card, Col } from 'react-bootstrap';
import { URLS } from '../../../common/constants/stringConstants';
import './product.scss';

export class ProductCard extends Component {

    handleDetailsView = () => {
        console.log("view Product", this.props.item)
    }

    handleImageLoading = (flag) => {
        this.setState({ isImageLoading: flag });
    }

    render() {
        const { item } = this.props
        const imageUrl = `${URLS.IMAGE_BASE_URL}/products/${item.thumbnail}`;
        return (
            <Col sm={{ span: 10, offset: 2 }} md={{ span: 3, offset: 0 }}>
                <div className="shopmante-card-container mb-3" onClick={this.handleDetailsView} >
                    <img alt={'shopmate' + item.name} className="product-image" variant="top" src={imageUrl} />
                    <Card.Body>
                        <Card.Title className="product-title" > {item.name}</Card.Title>
                        <Card.Title className="product-price">
                            {item.price}
                        </Card.Title>
                    </Card.Body>
                </div>
            </Col>
        );
    }
}
