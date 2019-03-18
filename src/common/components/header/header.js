import React from 'react';
import { Navbar, Nav, Form, Badge } from 'react-bootstrap';
import { NAV_CONST_ARRAY } from '../../../common/constants/navLink';
import { Link } from 'react-router-dom';
import { EcomPureComponent } from '../EcomPureComponent';
import Authmenuheader from './authmenuheader';
import './header.scss';
export class AppHeader extends EcomPureComponent {
    render() {
        return (
            <header>
                {this.props.showAuthMenu && <Authmenuheader/>}
                <Navbar fixed expand="lg" className="shopmate-bg-light" >
                    <Navbar.Brand className="brand" href="/">Brand</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {NAV_CONST_ARRAY.map(link => <Link key={link.LINK} className="nav-link nav-menu-item" to={link.LINK}>{link.TITLE}</Link>)}
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
