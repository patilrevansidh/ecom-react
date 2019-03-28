import React from 'react';
import { TextInputGroup, ShopmateButton } from '../../common/components/importer';
import { Form, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { EcomPureComponent } from '../../common/components/EcomPureComponent';

class DeliveryFormCompnent extends EcomPureComponent {

    state = { selectedRegion: null, shipping_id: null }

    handleChange = () => {

    }

    handleSelection = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name === 'selectedRegion') {
            const region = this.props.shipping.shipping.find(({ region }) => region.shipping_region_id == value);
            this.setState({ [name]: region, shipping_id: null });
            return;
        }
        this.setState({ [name]: value });
    }

    render() {
        return (
            <Form className="shopmate-form">
                <div className="row" >
                    <TextInputGroup colspan={10} groupAs='col' label="Last Name" name="last_name"
                        handleChange={this.handleChange} />
                    <TextInputGroup colspan={10} groupAs='col' label="First Name" name="first_name"
                        handleChange={this.handleChange} />
                </div>
                <div className="row" >
                    <TextInputGroup colspan={10} groupAs='col' label="Address" name="address"
                        handleChange={this.handleChange} />
                    <TextInputGroup colspan={10} groupAs='col' label="city" name="city"
                        handleChange={this.handleChange} />
                </div>
                <div className="row" >
                    <TextInputGroup colspan={10} groupAs='col' label="State" name="state"
                        handleChange={this.handleChange} />
                    <TextInputGroup colspan={10} groupAs='col' label="ZIP Code" name="zip_code"
                        handleChange={this.handleChange} />
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
                    this.state.shipping_id && <ShopmateButton label="Next" />
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
export const DeliveryForm = connect(mapStateToProps)(DeliveryFormCompnent)