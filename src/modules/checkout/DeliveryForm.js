import React, { Component } from 'react';
import { TextInputGroup } from '../../common/components/importer';
import { Form, Dropdown, DropdownButton } from 'react-bootstrap';
import { connect } from 'react-redux';

class DeliveryFormCompnent extends Component {
    handleChange = () => {

    }
    render() {
        console.log("this.[props", this.props.shipping);
        return (
            <Form className="shopmate-form">
                <div className="row" >
                    <TextInputGroup handleChange={this.handleChange} colspan={10} groupAs='col' label="Last Name" name="last_name" />
                    <TextInputGroup handleChange={this.handleChange} colspan={10} groupAs='col' label="First Name" name="first_name" />
                </div>
                <div className="row" >
                    <TextInputGroup handleChange={this.handleChange} colspan={10} groupAs='col' label="Address" name="address" />
                    <TextInputGroup handleChange={this.handleChange} colspan={10} groupAs='col' label="city" name="city" />
                </div>
                <div className="row" >
                    <TextInputGroup handleChange={this.handleChange} colspan={10} groupAs='col' label="State" name="state" />
                    <TextInputGroup handleChange={this.handleChange} colspan={10} groupAs='col' label="ZIP Code" name="zip_code" />
                </div>
                <select>
                    {
                        this.props.shipping.shipping.map((item) =>
                            <option >{item.region.shipping_region}</option>
                        )
                    }

                </select>
            </Form>
        );
    }
}
function mapStateToProps(state) {
    return {
        shipping: state.shippingCart
    }
}
export const DeliveryForm = connect(mapStateToProps)(DeliveryFormCompnent)