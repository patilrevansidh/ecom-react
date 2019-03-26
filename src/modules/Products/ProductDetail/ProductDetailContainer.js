import React from 'react';
import { connect } from 'react-redux';
import { getProductDetail, clearSelectedProduct, postReview } from '../../../common/actions/productAction';
import { handleAuthModal } from '../../../common/actions/authAction';
import { EcomPureComponent } from '../../../common/components/EcomPureComponent';
import { Col, Button } from 'react-bootstrap';
import { URLS } from '../../../common/constants/stringConstants';
import { AddReviewForm, ReviewList } from './ReviewComponents';
import './productDetail.scss';
import { DummyProductCard } from '../ProductCard/DummyProductCard';

class ProductDetailContainer extends EcomPureComponent {
    state = { review: '', name: '', rating: 0, selectedColor: null, selectedSize: null, quantity: 1 }
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
        this.props.handleAuthModal({ showAuthModal: true })
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
        console.log("Added to Cart", this.props.selectedProduct)
    }

    handleQuantityIncrementDecrement = (operation) => {
        if (operation === 'minus') {
            if (this.state.quantity - 1 < 1) return;
            this.setState({ quantity: this.state.quantity - 1 });
            return;
        }
        this.setState({ quantity: this.state.quantity + 1 });
    }

    render() {
        if (this.props.isDetailLoading) return <DummyProductCard detail={true} />
        if (!this.props.selectedProduct) return null;
        const { selectedProduct } = this.props
        return (
            <div className="shopmate-product-detail-container">
                <div className="product-view-container row">
                    <Col md={{ span: 6 }} xs={{ span: 12 }} className="margin-top-20" >
                        <img src={URLS.IMAGE_BASE_URL + 'products/' + selectedProduct.image} />
                        {
                            <div className="" >
                            </div>
                        }
                    </Col>
                    <Col md={{ span: 6 }} xs={{ span: 12 }}>
                        <div className="product-detail">
                            <div className="product-title"> {selectedProduct.name} </div>
                            <div className="product-description other-text"> {selectedProduct.description} </div>
                            <div className="product-price">$ {selectedProduct.price}</div>
                            <div className="attribute-details">
                                <div className="attribute-label"> Color </div>
                                <div className="attribute-options">
                                    {selectedProduct.attributes.Color.map((color) => {
                                        const isWhite = color.attribute_value.toLowerCase() === 'white' && { border: 'dotted 3px black' } || null;
                                        const selected = this.state.selectedColor === color.attribute_value_id && { border: '6px solid #2878B5' } || null
                                        return <div onClick={() => this.setState({ selectedColor: color.attribute_value_id })} className="attribute-color-circle" style={{ backgroundColor: color.attribute_value.toLowerCase(), ...isWhite, ...selected }} />
                                    })}
                                </div>
                                <div className="attribute-label"> Size </div>
                                <div className="attribute-options" >
                                    {
                                        selectedProduct.attributes.Size.map((size) => {
                                            const className = this.state.selectedSize === size.attribute_value_id && 'attribute-color-reactangle-selected' || 'attribute-color-reactangle'
                                            return <div onClick={() => this.setState({ selectedSize: size.attribute_value_id })} className={className}>{size.attribute_value}</div>
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
    return {
        selectedProduct, isDetailLoading,
        profile: state.profile
    }
}

function mapDispatchToProps(dispatchEvent) {
    return {
        getProductDetail: (id) => { dispatchEvent(getProductDetail(id)) },
        clearSelectedProduct: () => { dispatchEvent(clearSelectedProduct()) },
        handleAuthModal: (flag) => { dispatchEvent(handleAuthModal(flag)) },
        handleSubmitReview: (id, formData) => { dispatchEvent(postReview(id, formData)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer);