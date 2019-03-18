import React, { Component } from 'react';
import { Navbar, Nav, Form, Badge, NavDropdown } from 'react-bootstrap';
import { NAV_CONST, NAV_CONST_ARRAY } from '../../../common/constants/navLink';
import { Link } from 'react-router-dom';
import './headerDark.scss';
export class AppHeader extends Component {
    render() {
        return (
            <header>
                <Navbar fixed expand="lg" className="bg-dark" >
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

const SearchForm = (props) => {
    return (
        <Form inline>
            <div className="search-bar">
                <input className="search_input" type="text" name="" placeholder="Search..." />
                <a href="#" className="search_icon"><i className="fas fa-search" />
                </a>
            </div>
        </Form>
    )
}
