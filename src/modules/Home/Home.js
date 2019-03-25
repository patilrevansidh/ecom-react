import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import ProductList from '../Products/List/ProductList';
import { getShippingDetails } from '../../common/actions/shippingCartAction';

class Home extends Component {
    componentWillMount() {
        this.props.getShippingDetails()
    }
    render() {
        return (
            <Row>
                <ProductList history={this.props.history} data={this.props.products} isLoading={this.props.isLoading} />
            </Row>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        isLoading: state.products.isLoading,
    }
}

function mapDispatchToProps(dispatchEvent) {
    return {
        getShippingDetails: () => { dispatchEvent(getShippingDetails()) },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);