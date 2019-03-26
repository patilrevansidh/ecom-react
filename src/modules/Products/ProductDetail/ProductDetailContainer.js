import React from 'react';
import { connect } from 'react-redux';
import { EcomPureComponent } from '../../../common/components/EcomPureComponent';
import { Col, Button } from 'react-bootstrap';
import { URLS } from '../../../common/constants/stringConstants';
import { AddReviewForm, ReviewList } from './ReviewComponents';
import './productDetail.scss';
import { DummyProductCard } from '../ProductCard/DummyProductCard';
import { getProductDetail, clearSelectedProduct, postReview } from '../../../common/actions/productAction';
import { handleModal } from '../../../common/actions/authAction';
import { handleAddCart } from '../../../common/actions/shippingCartAction';

const selectionKey = {
    // size: 'attribute_value_id',
    // color: 'attribute_value_id'
    key: 'attribute_value'
}
class ProductDetailContainer extends EcomPureComponent {
    state = {
        review: '', name: '', rating: 0, selectedImage: null,
        selectedColor: null, selectedSize: null, quantity: 1
    }

    componentWillMount() {
        this.getProduct();
    }

    componentWillUnmount() {
        this.props.clearSelectedProduct()
    }

    getProduct() {
        const product_id = this.props.location.state && this.props.location.state.product_id || null
        if (product_id) {
            this.props.getProductDetail(product_id)
        }
    }

    handleRate = (rating) => {
        this.setState({ rating });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.profile.isLoggedIn) {
            const { selectedProduct } = this.props;
            const { rating, review, name } = this.state;
            const formData = { rating, review, name }
            this.props.handleSubmitReview(selectedProduct.product_id, formData)
            return;
        }
        this.props.handleModal({ showAuthModal: true })
    }

    handleQuantityChange = (e) => {
        if (/[.]/.test(e.target.value)) {
            this.setState({ quantity: this.state.quantity });
            return
        };
        const value = e.target.value.replace(/[^0-9]*/g, '')
        this.setState({ quantity: value });
    }

    handleAddToCart = () => {
        const payload = {
            product_id: this.props.selectedProduct.product_id,
            cart_id: this.props.shippingCart.cart_id,
            attributes: `${this.state.selectedSize}, ${this.state.selectedColor}`,
            quantity: this.state.quantity
        }
        this.props.handleAddCart(payload, this.props.selectedProduct)
    }

    handleQuantityIncrementDecrement = (operation) => {
        if (operation === 'minus') {
            if (this.state.quantity - 1 < 1) return;
            this.setState({ quantity: this.state.quantity - 1 });
            return;
        }
        this.setState({ quantity: this.state.quantity + 1 });
    }

    handleImageSelection = (endpoint) => {
        this.setState({ selectedImage: endpoint });
    }

    render() {
        if (this.props.isDetailLoading) return <DummyProductCard detail={true} />
        if (!this.props.selectedProduct) return null;
        const { selectedProduct } = this.props;
        const selectedImage = this.state.selectedImage || selectedProduct.image
        return (
            <div className="shopmate-product-detail-container">
                <div className="product-view-container row">
                    <Col md={{ span: 6 }} xs={{ span: 12 }}>
                        <div className="product-image-container">
                            <div className="product-image-big-wrap">
                                <img src={URLS.IMAGE_BASE_URL + 'products/' + selectedImage} />
                            </div>
                            <div className="product-image-small-wrap">
                                <img className={this.state.selectedImage !== selectedProduct.image_2 && "preview-image selected" || "preview-image"} src={URLS.IMAGE_BASE_URL + 'products/' + selectedProduct.image} onClick={() => this.handleImageSelection(selectedProduct.image)} />
                                <img className={this.state.selectedImage === selectedProduct.image_2 && "preview-image selected" || "preview-image"} src={URLS.IMAGE_BASE_URL + 'products/' + selectedProduct.image_2} onClick={() => this.handleImageSelection(selectedProduct.image_2)} />
                            </div>
                        </div>
                    </Col>
                    <Col md={{ span: 6 }} xs={{ span: 12 }}>
                        <div className="product-detail">
                            <div className="product-title"> {selectedProduct.name} </div>
                            <div className="product-description other-text"> {selectedProduct.description} </div>
                            <div className="product-price">$ {selectedProduct.price}</div>
                            <div className="attribute-details">
                                <div className="attribute-label margin-top-20"> Color </div>
                                <div className="attribute-options">
                                    {selectedProduct.attributes.Color.map((color) => {
                                        const isWhite = color.attribute_value.toLowerCase() === 'white' && { border: 'dotted 3px black' } || null;
                                        const selected = this.state.selectedColor === color[selectionKey.key] && { border: '6px solid #2878B5' } || null
                                        return <div key={color.attribute_value_id} onClick={() => this.setState({ selectedColor: color[selectionKey.key] })} className="attribute-color-circle" style={{ backgroundColor: color.attribute_value.toLowerCase(), ...isWhite, ...selected }} />
                                    })}
                                </div>
                                <div className="attribute-label margin-top-20"> Size </div>
                                <div className="attribute-options" >
                                    {
                                        selectedProduct.attributes.Size.map((size) => {
                                            const className = this.state.selectedSize === size[selectionKey.key] && 'attribute-color-reactangle selected' || 'attribute-color-reactangle'
                                            return <div key={size.attribute_value_id} onClick={() => this.setState({ selectedSize: size[selectionKey.key] })} className={className}>{size.attribute_value}</div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="quantiy-details margin-top-20" >
                            <div className="quantity-oval" id="minus" onClick={() => this.handleQuantityIncrementDecrement('minus')}> <i className="fas fa-minus" /> </div>
                            <input min={1} value={this.state.quantity} onChange={this.handleQuantityChange} className="quntity-input" type="text" />
                            <div className="quantity-oval" id="plus" onClick={() => this.handleQuantityIncrementDecrement('plus')}> <i className="fas fa-plus" /> </div>
                        </div>
                        <div className="add-button-container">
                            <Button onClick={this.handleAddToCart} className="submit-button" type='submit' variant='none' >Add To Card</Button>
                        </div>
                    </Col>
                </div>
                <div className="review-container">
                    <div className="review-layout" >
                        <div className="title"> Product Reviews </div>
                        <div className="user-review" >
                            <ReviewList data={selectedProduct.reviews} />
                            <div className="divider" />
                        </div>
                        <AddReviewForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}
                            {...this.state} handleRate={this.handleRate}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const selectedProduct = state.products.selectedProduct;
    const isDetailLoading = state.products.isDetailLoading;
    const shippingCart = state.shippingCart;
    return {
        selectedProduct, isDetailLoading,
        profile: state.profile,
        shippingCart
    }
}

function mapDispatchToProps(dispatchEvent) {
    return {
        handleAddCart: (payload, product) => { dispatchEvent(handleAddCart(payload, product)) },
        getProductDetail: (id) => { dispatchEvent(getProductDetail(id)) },
        clearSelectedProduct: () => { dispatchEvent(clearSelectedProduct()) },
        handleModal: (flag) => { dispatchEvent(handleModal(flag)) },
        handleSubmitReview: (id, formData) => { dispatchEvent(postReview(id, formData)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer);