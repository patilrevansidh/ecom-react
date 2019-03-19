import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard, Home, AuthModal } from '../modules/moduleImports';
import { AppFooter, AppHeader } from '../common/components/importer';
import { EcomPureComponent } from '../common/components/EcomPureComponent';
import { connect } from 'react-redux'
import { withList } from "../common/components/hoc/withList";
import '../common/assets/styles/theme.scss';



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
    render() {
        return (
            <div className="theme-light" >
                <Router basename="/" >
                    <Switch>
                        <ComponentWithHeader showAuthModal={this.props.profile.showAuthModal} showAuthMenu exact path="/" component={Home} />
                        <Route exact path="/dashboard" component={Dashboard} />
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

export default connect(mapStateToProps)(Routes)


const SampleA = (props) => <p> Card A {props.data}</p>
const SampleB = (props) => <p> Card B {props.data}</p>