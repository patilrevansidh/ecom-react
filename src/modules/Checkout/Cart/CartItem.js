import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { EcomPureComponent } from '../../../common/components/EcomPureComponent';
import { connect } from 'react-redux';
import { URLS } from '../../../common/constants/stringConstants';
import { QuantityInput, ShopmateButton } from '../../../common/components/importer';
import { handleModal } from '../../../common/actions/authAction';
import { updateItemQuantity, deleteCartItem } from '../../../common/actions/shippingCartAction';

class CartProductView extends EcomPureComponent {
    handleDelete = () => {
        this.props.onDelete(this.props.product.item_id)
    }

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
                    <div className="title"> {product.name}  </div>
                    <div onClick={this.handleDelete} className="remove"> Remove </div>
                </div>
            </Row>
        )
    }
}
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
                                <CartProductView onDelete={this.props.onDelete} product={product} />
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
                {
                    this.props.cart.length > 0 && <div className="row-container pull-right">
                        < ShopmateButton onClick={this.handleNavigation} label="Checkout" />
                    </div>
                    || <div className="text-center margin-top-20 empty-cart-text"> Cart Empty </div>
                }
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
        updateItemQuantity: (payload, cart_id) => { dispatchEvent(updateItemQuantity(payload, cart_id)) },
        onDelete: (item_id) => { dispatchEvent(deleteCartItem(item_id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
