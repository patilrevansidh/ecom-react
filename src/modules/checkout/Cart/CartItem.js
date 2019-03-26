import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { EcomPureComponent } from '../../../common/components/EcomPureComponent';
import { connect } from 'react-redux';
import { URLS } from '../../../common/constants/stringConstants';
import { QuantityInput } from '../../../common/components/importer';

class CartItem extends EcomPureComponent {
    render() {
        return (
            <div style={{ marginTop: 20 }} className="margin-top-20 row">
                <Col className="row-container" md={{ span: 5 }}>
                    <CartProductView product={dummyProduct} />
                </Col >
                <Col className="row-container" md={{ span: 2 }}>
                    <div className="attribute-value"> XL </div>
                </Col>
                <Col className="row-container" md={{ span: 3 }}>
                    <QuantityInput quantity={1} />
                </Col>
                <Col className="row-container" md={{ span: 1 }}>
                    <div className="product-price"> $21 </div>
                </Col>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.shippingCart.cart,
    }
}
function mapDispatchToProps(dispatchEvent) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);


const dummyProduct = {
    product_id: 1,
    name: "Arc d'Triomphe",
    description: "This beautiful and iconic T-shirt will no doubt lead you to your own triumph.",
    price: "14.99",
    discounted_price: "0.00",
    image: "arc-d-triomphe.gif",
    image_2: "arc-d-triomphe-2.gif",

}
class CartProductView extends EcomPureComponent {
    render() {
        const { product } = this.props
        return (
            <Row>
                <div>
                    <div className="product-image-container">
                        <img className="product-image" src={URLS.IMAGE_BASE_URL + 'products/' + product.image} />
                    </div>
                </div>
                <div className="cart-product-details">
                    <p className="title"> {product.name}  </p>
                    <p className="remove"> Remove </p>
                </div>
            </Row>
        )
    }
}