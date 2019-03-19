import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAttributes, getCategories, getDepartments, getProducts } from '../../common/actions/productAction';
import { Row } from 'react-bootstrap';
import ProductList from '../Products/List/ProductList';

class Home extends Component {
    render() {
        console.log("this.props", this.props)
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

export default connect(mapStateToProps)(Home);