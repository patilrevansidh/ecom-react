import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAttributes, getCategories, getDepartments, getProducts } from '../../common/actions/productAction';
import { ProductCard } from '../Products/ProductCard/ProductCard';
import { Row } from 'react-bootstrap';
import ProductList from '../Products/List/ProductList';

class Home extends Component {

    componentWillMount() {
        this.initializeRedux()
    }

    initializeRedux() {
        this.props.fetchDepartments();
        this.props.fetchCategogies();
        this.props.fetchAttributes();
        this.props.fetchProducts();
    }

    render() {
        return (
            <Row>
                <ProductList />
            </Row>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        isLoadingProducts: state.products,
    }
}

function mapDispatchToProps(dispatchEvent) {
    return {
        fetchProducts: () => { dispatchEvent(getProducts()) },
        fetchCategogies: () => { dispatchEvent(getCategories()) },
        fetchAttributes: () => { dispatchEvent(getAttributes()) },
        fetchDepartments: () => { dispatchEvent(getDepartments()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);