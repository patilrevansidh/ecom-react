import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, AuthModal, ProductDetailContainer } from '../modules/moduleImports';
import { AppFooter, AppHeader } from '../common/components/importer';
import { EcomPureComponent } from '../common/components/EcomPureComponent';
import { connect } from 'react-redux'
import { withList } from "../common/components/hoc/withList";
import '../common/assets/styles/theme.scss';
import { getProducts } from '../common/actions/productAction';
import { getAttributes, getCategories, getDepartments } from '../common/actions/landingAction';


const ComponentWithHeader = ({ showAuthModal, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                <React.Fragment>
                    <AppHeader />
                    <main className="container">
                        <Component {...props} />
                        {showAuthModal && <AuthModal />}
                    </main>
                    <AppFooter />
                </React.Fragment>
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
    }

    render() {
        return (
            <div className="theme-light" >
                <Router basename="/" >
                    <Switch>
                        <ComponentWithHeader showAuthModal={this.props.profile.showAuthModal} showAuthMenu exact path="/" component={Home} />
                        <ComponentWithHeader showAuthModal={this.props.profile.showAuthModal} path="/shopmate-product/" component={ProductDetailContainer} />
                        <Route exact path="/a" component={withList(SampleA, [1, 2, 3, 4,])} />
                        <Route exact path="/b" component={withList(SampleB, [1, 2, 3, 4,])} />
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
        fetchDepartments: () => { dispatchEvent(getDepartments()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)


const SampleA = (props) => <p> Card A {props.data}</p>
const SampleB = (props) => <p> Card B {props.data}</p>