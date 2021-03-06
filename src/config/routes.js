import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, AuthModal, ProductDetailContainer } from '../modules/moduleImports';
import { AppFooter, AppHeader } from '../common/components/importer';
import { EcomPureComponent } from '../common/components/EcomPureComponent';
import { connect } from 'react-redux'
import { getProducts } from '../common/actions/productAction';
import { getAttributes, getCategories, getDepartments, getCustomerInfo } from '../common/actions/landingAction';
import CheckoutModal from '../modules/Checkout/CheckoutModal';
import CartModal from '../modules/Checkout/Cart/CartModal';
import { getShippingDetails } from "../common/actions/shippingCartAction";
import '../common/assets/styles/theme.scss';


const ComponentWithHeader = ({ showCartModal, showCheckoutModal, showAuthModal, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                return <React.Fragment>
                    <AppHeader {...props} />
                    <main className="container">
                        <Component {...props} />
                        {showCheckoutModal && <CheckoutModal />}
                        {showAuthModal && <AuthModal />}
                        {showCartModal && <CartModal />}
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
        this.props.getCustomerInfo();
    }

    render() {
        const { showAuthModal, showCartModal, showCheckoutModal } = this.props.profile
        return (
            <div className="theme-light" >
                <Router basename="/" >
                    <Switch>
                        <ComponentWithHeader showCartModal={showCartModal} showCheckoutModal={showCheckoutModal}
                            showAuthModal={showAuthModal} showAuthMenu
                            exact path="/" component={Home} />
                        <ComponentWithHeader showAuthModal={showAuthModal} showCartModal={showCartModal} showCheckoutModal={showCheckoutModal}
                            path="/shopmate-product/" component={ProductDetailContainer} />
                        <ComponentWithHeader showAuthModal={showAuthModal} showCartModal={showCartModal} showCheckoutModal={showCheckoutModal}
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
        getCustomerInfo: () => { dispatchEvent(getCustomerInfo()) },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
