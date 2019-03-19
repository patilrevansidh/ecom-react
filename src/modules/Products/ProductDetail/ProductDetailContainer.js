import React from 'react';
import { connect } from 'react-redux';
import { getProductDetail } from '../../../common/actions/productAction';
import { EcomPureComponent } from '../../../common/components/EcomPureComponent';

class ProductDetailContainer extends EcomPureComponent {
    componentWillMount() {
        this.getProduct()
    }

    getProduct() {
        const product_id = this.props.location.state && this.props.location.state.product_id || null
        if (product_id) {
            this.props.getProductDetail(product_id)
        }
    }

    render() {
        console.log("this.props.selectedProduct", this.props.selectedProduct)
        return (
            <div>
                sdfd
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