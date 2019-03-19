import React from 'react';
import { Navbar, Nav, Form, Badge } from 'react-bootstrap';
import { NAV_CONST_ARRAY } from '../../../common/constants/navLink';
import { Link } from 'react-router-dom';
import { EcomPureComponent } from '../EcomPureComponent';
import AuthMenuHeader from './AuthMenuHeader';
import './header.scss';
import { connect } from 'react-redux';
class AppHeaderComponent extends EcomPureComponent {    
    render() {
        return (
            <header>
                {<AuthMenuHeader />}
                <Navbar fixed expand="lg" className="shopmate-bg-light" >
                    <Navbar.Brand className="brand" href="/">Brand</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {Array.isArray(this.props.departments) && this.props.departments.map(link => <a id={link.department_id} key={link.department_id} className="nav-link nav-menu-item" >{link.name}</a>)}
                        </Nav>
                        <div className="search-card-badge">
                            <SearchForm />
                            <i className="fas fa-shopping-cart shoping-cart-icon">
                                <sup><Badge className="card-badge">3</Badge></sup>
                            </i>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        departments: state.departments
    }
}

export const AppHeader = connect(mapStateToProps)(AppHeaderComponent)
class SearchForm extends EcomPureComponent {
    render() {
        return (
            <Form inline>
                <div className="search-bar">
                    <input className="search_input" type="text" name="" placeholder="Search..." />
                    <span className="search_icon"><i className="fas fa-search" />
                    </span>
                </div>
            </Form>
        )
    }
}
