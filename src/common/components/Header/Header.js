import React from 'react';
import { Navbar, Nav, Form, Badge, NavDropdown } from 'react-bootstrap';
import { EcomPureComponent } from '../EcomPureComponent';
import AuthMenuHeader from './AuthMenuHeader';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.scss';

// to={{ pathname: `shopmate-product-browse/${department.name}&${category.name}`, state: { department, category } }}
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
                                    // <a onMouseOver={} id={link.department_id} key={link.department_id} className="nav-link nav-menu-item" >{link.name}</a>
                                )
                            }
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
