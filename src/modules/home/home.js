import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAttributes, getCategories, getDepartments, getProducts } from '../../common/actions/productAction';

class Home extends Component {

    componentWillMount() {
        this.initializeRedux()
    }

    initializeRedux() {
        this.props.fetchAttributes();
        this.props.fetchCategogies();
        this.props.fetchDepartments();
        this.props.fetchProducts();
    }

    render() {
        return (
            <div>
                Home
                 {/* {this.props.tempReducer.isWorking} */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tempReducer: state.tempReducer
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

export default connect(null, mapDispatchToProps)(Home);