import React from 'react';
import { TextInputGroup, ShopmateButton } from '../../common/components/importer';
import { Form, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { EcomPureComponent } from '../../common/components/EcomPureComponent';
import { handleModal, handleUpdateCustomer } from '../../common/actions/authAction';
import { ValidationHelper } from '../../common/services/helper/validation';
// import isEqual from 'react-fast-compare';
import { placeOrder } from '../../common/actions/orderPaymentAction';

class DeliveryFormCompnent extends EcomPureComponent {

    state = { selectedRegion: null, shipping_id: null, address_1: '', city: '', country: '', postal_code: '' }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    isValidForm = () => {
        let { postal_code, address_1, city, country } = this.state;
        const { user } = this.props.profile
        postal_code = postal_code || user && user.postal_code;
        address_1 = address_1 || user && user.address_1;
        city = city || user && user.city;
        country = country || user && user.country;

        return !ValidationHelper.isEmptyString(postal_code) && !ValidationHelper.isEmptyString(address_1)
            && !ValidationHelper.isEmptyString(city)
    }

    handleCheckout = () => {
        if (!this.props.profile.isLoggedIn) {
            this.props.handleModal({ showAuthModal: true });
            return;
        }
        if (this.isValidForm() && this.state.shipping_id) {
            this.handleCustomerInfoUpdate()
            const orderPayload = {
                cart_id: this.props.shipping.cart_id,
                customer_id: this.props.profile.user.customer_id,
                shipping_id: this.state.shipping_id,
                tax_id: '1',
            }
            this.props.handlePlaceOrder(orderPayload)
        }
    }

    handleCustomerInfoUpdate() {
        let { postal_code, address_1, city, country } = this.state;
        const { user } = this.props.profile
        postal_code = postal_code || user && user.postal_code;
        address_1 = address_1 || user && user.address_1;
        city = city || user && user.city;
        country = country || user && user.country;
        const payload = {
            postal_code, address_1, city, country,
            region: this.state.selectedRegion.region.shipping_region,
            ...this.state.selectedRegion.region,
            tax_id: 1,
        }
        this.props.handleCustomerAddress(payload);
    }

    handleSelection = (event) => {
        const { name, value } = event.target;
        if (name === 'selectedRegion') {
            const region = this.props.shipping.shipping.find(({ region }) => region.shipping_region_id == value);
            this.setState({ [name]: region, shipping_id: null });
            return;
        }
        this.setState({ [name]: value });
    }

    render() {
        const user = this.props.profile.user
        return (
            <Form className="shopmate-form">
                <div className="row" >
                    <TextInputGroup colspan={10} groupAs='col' label="First Name" name="first_name"
                        handleChange={this.handleChange} value={user && user.name} />
                </div>
                <div className="row" >
                    <TextInputGroup colspan={10} groupAs='col' label="Address" name="address_1"
                        handleChange={this.handleChange} defaultValue={user && user.address_1} />
                    <TextInputGroup colspan={10} groupAs='col' label="City" name="city"
                        handleChange={this.handleChange} defaultValue={user && user.city} />
                </div>
                <div className="row" >
                    <TextInputGroup colspan={10} groupAs='col' label="Country" name="country"
                        handleChange={this.handleChange} defaultValue={user && user.country} />
                    <TextInputGroup colspan={10} groupAs='col' label="ZIP Code" name="postal_code"
                        handleChange={this.handleChange} defaultValue={user && user.postal_code} />
                </div>
                <div className="row">
                    <Form.Group as={Col}>
                        <Form.Label column sm={4}>Select Region</Form.Label>
                        <Col md={12}>
                            <Form.Control name="selectedRegion" onChange={this.handleSelection} as="select">
                                {
                                    this.props.shipping.shipping.map((item, index) =>
                                        <option value={item.region.shipping_region_id} key={item.region.shipping_region_id} >{item.region.shipping_region}</option>
                                    )
                                }
                            </Form.Control>
                        </Col>
                    </Form.Group>
                </div>
                <div className="row" >
                    {
                        this.state.selectedRegion && this.state.selectedRegion.shipping_details.length && <Form.Group as={Col} >
                            <Form.Label column sm={4}>Select Shipping </Form.Label>
                            {this.state.selectedRegion.shipping_details.map((item) => {
                                return <div className="row padding-Left-1rem">
                                    <Form.Check checked={this.state.shipping_id == item.shipping_id} name='shipping_id' onChange={this.handleSelection} type="radio" value={item.shipping_id} aria-label="radio 1" />
                                    <Form.Label>{item.shipping_type} Costs:{item.shipping_cost}</Form.Label>
                                </div>
                            })}
                        </Form.Group>
                    }
                </div>
                {
                    <ShopmateButton onClick={this.handleCheckout} label="Next" />
                }
            </Form>
        );
    }
}
function mapStateToProps(state) {
    return {
        shipping: state.shippingCart,
        profile: state.profile
    }
}
function mapDispatchToProps(dispatchEvent) {
    return {
        handleModal: (payload) => { dispatchEvent(handleModal(payload)) },
        handleCustomerAddress: (payload) => { dispatchEvent(handleUpdateCustomer(payload)) },
        handlePlaceOrder: payload => dispatchEvent(placeOrder(payload))

    }
}
export const DeliveryForm = connect(mapStateToProps, mapDispatchToProps)(DeliveryFormCompnent)