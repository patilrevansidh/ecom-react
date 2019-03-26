import React from 'react';
import { Navbar, Nav, Form, Badge, NavDropdown } from 'react-bootstrap';
import { EcomPureComponent } from '../EcomPureComponent';
import AuthMenuHeader from './AuthMenuHeader';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.scss';
import { handleModal } from '../../actions/authAction';

// to={{ pathname: `shopmate-product-browse/${department.name}&${category.name}`, state: { department, category } }}
class AppHeaderComponent extends EcomPureComponent {

    handleShowCartModal = () => {
        this.props.handleModal({ showCartModal: true })
    }
    
    render() {
        return (
            <header>
                {<AuthMenuHeader />}
                <Navbar fixed expand="lg" className="shopmate-bg-light" >
                    <Link className="brand navbar-brand brand" to="/" >Brand</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {
                                this.props.departments.map(link =>
                                    <NavDropdown title={link.name} key={link.department_id} id={link.department_id} className="nav-menu-item">
                                        {
                                            link.categories.map(cat => {
                                                return <React.Fragment key={cat.category_id} >
                                                    <Link className="nav-link" to={{ pathname: `/shopmate-product-browse/${link.name}&${cat.name}`, state: { department: link, category: cat } }}>{cat.name}</Link>
                                                </React.Fragment>
                                            })
                                        }
                                    </NavDropdown>
                                )
                            }
                        </Nav>
                        <div className="search-card-badge">
                            <SearchForm />
                            <i onClick={this.handleShowCartModal} className="fas fa-shopping-cart shoping-cart-icon">
                                <sup><Badge className="card-badge">{this.props.shopCart.cart.length}</Badge></sup>
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
        departments: state.departments,
        shopCart: state.shippingCart
    }
}

function mapDisptachToProps(dispatchEvent) {
    return {
        handleModal: (payload) => { dispatchEvent(handleModal(payload)) }
    }
}

export const AppHeader = connect(mapStateToProps, mapDisptachToProps)(AppHeaderComponent)
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
