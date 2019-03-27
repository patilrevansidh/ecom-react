import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { EcomPureComponent } from '../../../common/components/EcomPureComponent';
import { connect } from 'react-redux';
import { URLS } from '../../../common/constants/stringConstants';
import { QuantityInput, ShopmateButton } from '../../../common/components/importer';
import { handleModal } from '../../../common/actions/authAction';
import { updateItemQuantity } from '../../../common/actions/shippingCartAction';

class CartItem extends EcomPureComponent {

    handleQuantityChange = (quantity, product) => {
        const payload = {
            quantity: quantity,
            item_id: product.item_id
        }
        this.props.updateItemQuantity(payload, this.props.cart_id)
    }

    handleNavigation = () => {
        this.props.handleModal({ showCartModal: false, showCheckoutModal: true })
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.cart.map((product, index) => {
                        return <div key={index} style={{ marginTop: 20 }} className="margin-top-20 row">
                            <Col className="row-container" md={{ span: 5 }}>
                                <CartProductView product={product} />
                            </Col >
                            <Col className="row-container" md={{ span: 2 }}>
                                <div className="attribute-value"> {product.attributes} </div>
                            </Col>
                            <Col className="row-container" md={{ span: 3 }}>
                                <QuantityInput
                                    quantity={product.quantity || this.props.quantity || 1} onChange={(quantity) => this.handleQuantityChange(quantity, product)} />
                            </Col>
                            <Col className="row-container" md={{ span: 1 }}>
                                <div className="product-price"> ${product.subtotal} </div>
                            </Col>
                            <div className="center" >
                            </div>
                        </div>
                    })
                }
                <div className="row-container pull-right">
                    < ShopmateButton onClick={this.handleNavigation} label="Checkout" />
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.shippingCart.cart,
        cart_id: state.shippingCart.cart_id
    }
}
function mapDispatchToProps(dispatchEvent) {
    return {
        handleModal: (payload) => { dispatchEvent(handleModal(payload)) },
        updateItemQuantity: (payload, cart_id) => { dispatchEvent(updateItemQuantity(payload, cart_id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);

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