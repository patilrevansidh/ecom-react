import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard, Home, FacebookLogin } from '../modules/moduleImports';
import { AppFooter, AppHeader } from '../common/components/importer';
import { Container } from 'react-bootstrap';
import { withList } from "../common/components/hoc/withList";
import '../common/assets/styles/theme.scss'



const ComponentWithHeader = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                <React.Fragment>
                    <AppHeader />
                    <main style={{ height: '80vh' }} className="container">
                        <Component {...props} />
                    </main>
                    <AppFooter />
                </React.Fragment>
            }
        />
    )
}
export default class Routes extends React.Component {
    render() {
        return (
            <div className="theme-light" >
                <Router basename="/" >
                    <Switch>
                        <ComponentWithHeader exact path="/" component={FacebookLogin} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/a" component={withList(SampleA, [1, 2, 3, 4,])} />
                        <Route exact path="/b" component={withList(SampleB, [1, 2, 3, 4,])} />
                    </Switch>
                </Router>
            </div>
        )
    }
}


const SampleA = (props) => <p> Card A {props.data}</p>

const SampleB = (props) => <p> Card B {props.data}</p>