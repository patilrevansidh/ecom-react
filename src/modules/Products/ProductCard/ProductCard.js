import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { URLS } from '../../../common/constants/stringConstants';
import './product.scss';
import { EcomPureComponent } from '../../../common/components/EcomPureComponent';

export class ProductCard extends EcomPureComponent {

    handleDetailsView = () => {
        const { item } = this.props;
        this.props.history.push({ pathname: '/shopmate-product/' + item.name, state: item })
    }

    handleImageLoading = (flag) => {
        this.setState({ isImageLoading: flag });
    }

    render() {
        const { item } = this.props
        const imageUrl = `${URLS.IMAGE_BASE_URL}/products/${item.thumbnail}`;
        return (
            <Col sm={{ span: 10, offset: 2 }} md={{ span: 3, offset: 0 }}>
                <div className="shopmante-card-container mb-3"  >
                    <img onClick={this.handleDetailsView} alt={'shopmate' + item.name} className="product-image" variant="top" src={imageUrl} />
                    <Card.Body>
                        <Card.Title onClick={this.handleDetailsView} className="product-title" > {item.name}</Card.Title>
                        <Card.Title className="product-price">
                            $ {item.price}
                        </Card.Title>
                    </Card.Body>
                </div>
            </Col>
        );
    }
}
