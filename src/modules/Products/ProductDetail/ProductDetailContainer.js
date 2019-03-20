import React from 'react';
import { connect } from 'react-redux';
import { getProductDetail, clearSelectedProduct } from '../../../common/actions/productAction';
import { handleAuthModal } from '../../../common/actions/authAction';
import { EcomPureComponent } from '../../../common/components/EcomPureComponent';
import { Col } from 'react-bootstrap';
import { URLS } from '../../../common/constants/stringConstants';
import { AddReviewForm, ReviewList } from './ReviewComponents';
import './productDetail.scss';

class ProductDetailContainer extends EcomPureComponent {
    state = { review: '', name: '', rating: 0 }
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
            console.log("Post Reivew", this.state)
            return;
        }
        this.props.handleAuthModal({ showAuthModal: true })
    }

    render() {
        if (!this.props.selectedProduct) return null;
        const { selectedProduct } = this.props
        return (
            <div className="shopmate-product-detail-container">
                <div className="product-view-container">
                    <Col md={{ span: 6 }}>
                        <img src={URLS.IMAGE_BASE_URL + 'products/' + selectedProduct.image} />
                        {
                            <div className="" >

                            </div>
                        }
                    </Col>
                    <Col md={{ span: 6 }}>
                        <div className="product-detail">
                            {selectedProduct.name}
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
        handleAuthModal: (flag) => { dispatchEvent(handleAuthModal(flag)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer);