import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import ProductList from '../Products/List/ProductList';
import { getShippingDetails } from '../../common/actions/shippingCartAction';
import { EcomPureComponent } from '../../common/components/EcomPureComponent';

class Home extends EcomPureComponent {
    render = () => <Row>
        <ProductList history={this.props.history} data={this.props.products} isLoading={this.props.isLoading} />
    </Row>
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        isLoading: state.products.isLoading,
    }
}

export default connect(mapStateToProps)(Home);