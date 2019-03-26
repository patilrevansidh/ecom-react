import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, AuthModal, ProductDetailContainer } from '../modules/moduleImports';
import { AppFooter, AppHeader } from '../common/components/importer';
import { EcomPureComponent } from '../common/components/EcomPureComponent';
import { connect } from 'react-redux'
import { getProducts } from '../common/actions/productAction';
import { getAttributes, getCategories, getDepartments } from '../common/actions/landingAction';
import '../common/assets/styles/theme.scss';
import CheckoutModal from '../modules/checkout/CheckoutModal';
import { getShippingDetails } from "../common/actions/shippingCartAction";


const ComponentWithHeader = ({ showAuthModal, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                return <React.Fragment>
                    <AppHeader {...props} />
                    <main className="container">
                        <Component {...props} />
                        {/* <CheckoutModal/> */}
                        {showAuthModal && <AuthModal />}
                    </main>
                    <AppFooter />
                </React.Fragment>
            }
            }
        />
    )
}
class Routes extends EcomPureComponent {
    componentWillMount() {
        this.initializeRedux()
    }

    initializeRedux() {
        this.props.fetchDepartments();
        this.props.fetchCategogies();
        this.props.fetchAttributes();
        this.props.fetchProducts();
        this.props.getShippingDetails()
    }

    render() {
        return (
            <div className="theme-light" >
                <Router basename="/" >
                    <Switch>
                        <ComponentWithHeader
                            showAuthModal={this.props.profile.showAuthModal} showAuthMenu
                            exact path="/" component={Home} />
                        <ComponentWithHeader showAuthModal={this.props.profile.showAuthModal}
                            path="/shopmate-product/" component={ProductDetailContainer} />
                        <ComponentWithHeader showAuthModal={this.props.profile.showAuthModal}
                            path="/shopmate-product-browse/" component={Home} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        profile: state.profile
    }
}

function mapDispatchToProps(dispatchEvent) {
    return {
        fetchProducts: () => { dispatchEvent(getProducts()) },
        fetchCategogies: () => { dispatchEvent(getCategories()) },
        fetchAttributes: () => { dispatchEvent(getAttributes()) },
        fetchDepartments: () => { dispatchEvent(getDepartments()) },
        getShippingDetails: () => { dispatchEvent(getShippingDetails()) },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
