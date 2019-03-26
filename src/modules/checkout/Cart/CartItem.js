import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { EcomPureComponent } from '../../../common/components/EcomPureComponent';
import { connect } from 'react-redux';
import { URLS } from '../../../common/constants/stringConstants';

class CartItem extends EcomPureComponent {
    render() {
        return (
            <Row className="margin-top-20">
                <Col md={{ span: 5 }}>
                    <CartProductView product={dummyProduct} />
                </Col >
                <Col md={{ span: 2 }}>
                    {
                        dummyProduct.attributes
                    }
                </Col>
                <Col md={{ span: 3 }}>
                    {}                        
                </Col>
                <Col md={{ span: 1 }}>
                    {dummyProduct.subtotal}
                </Col>
            </Row>
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
                        <img className="product-image" src={URLS.IMAGE_BASE_URL+'products/' + product.image} />
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