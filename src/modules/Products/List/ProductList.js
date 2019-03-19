import React from 'react';
import { connect } from 'react-redux';
import { withList } from '../../../common/components/hoc/withList';
import { DummyProductCard } from '../ProductCard/DummyProductCard';
import { ProductCard } from '../ProductCard/ProductCard';
import { EcomPureComponent } from './../../../common/components/EcomPureComponent';

class ProductList extends EcomPureComponent {
    render() {
        return (
            <React.Fragment>
                {this.props.products.map((item) => <ProductCard item={item} />)}
                {this.props.isLoading && [1, 1, 1, 1, 1, 1, 1, 1].map((item) => <DummyProductCard item={item} />)}
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.products,
        isLoading: state.products.isLoading
    }
}

export default connect(mapStateToProps)(ProductList)