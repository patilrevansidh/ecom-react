import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import ProductList from '../Products/List/ProductList';
import { EcomPureComponent } from '../../common/components/EcomPureComponent';

class Home extends EcomPureComponent {
    render = () => <Row>
        <ProductList history={this.props.history} data={this.props.products} count={this.props.count} isLoading={this.props.isLoading} />
    </Row>
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        count: state.products.count,
        isLoading: state.products.isLoading,
    }
}

export default connect(mapStateToProps)(Home);