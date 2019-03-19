import React from 'react';
import { connect } from 'react-redux';
import { getProductDetail } from '../../../common/actions/productAction';
import { EcomPureComponent } from '../../../common/components/EcomPureComponent';
import { Row, Col, Form } from 'react-bootstrap';
import './productDetail.scss';
import { URLS } from '../../../common/constants/stringConstants';
import { TextInputGroup } from '../../../common/components/Input';

class ProductDetailContainer extends EcomPureComponent {
    componentWillMount() {
        this.getProduct();
    }

    getProduct() {
        const product_id = this.props.location.state && this.props.location.state.product_id || null
        if (product_id) {
            this.props.getProductDetail(product_id)
        }
    }

    handleRate = (index) => {
        console.log('Index', index)
    }

    render() {
        if (!this.props.selectedProduct) return null;
        const { selectedProduct } = this.props
        return (
            <div className="shopmate-product-detail-container">
                <Row>
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
                </Row>
                <Row className="review-container">
                    <div className="review-layout" >
                        <div className="title"> Product Reviews </div>
                        <Form>
                            <div className="title"> Add a review </div>
                            <TextInputGroup label="Choose a nickname" name="name" />
                            <TextInputGroup label="Your Review" name="review" as="textarea" row={3} />
                            <Form.Group as={Row} >
                                <Form.Label column sm={4}> {"Overall Review"} </Form.Label>
                                <Col sm="6">
                                    {[1, 2, 3, 4].map((item) => <i onClick={() => this.handleRate(item)} className="" />)}
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const selectedProduct = state.products.selectedProduct;
    const isDetailLoading = state.products.isDetailLoading;
    return { selectedProduct, isDetailLoading }
}

function mapDispatchToProps(dispatchEvent) {
    return { getProductDetail: (id) => { dispatchEvent(getProductDetail(id)) } }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer);