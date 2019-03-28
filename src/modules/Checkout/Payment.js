import React from 'react';
import { EcomPureComponent, } from '../../common/components/EcomPureComponent';
import { ShopmateButton } from '../../common/components/importer';
import { connect } from 'react-redux';
import { CardElement, StripeProvider, Elements, injectStripe } from 'react-stripe-elements';
import { Form } from 'react-bootstrap';
import './checkout.scss';
import { KEYS } from '../../common/constants/stringConstants';
class Payment extends EcomPureComponent {
    render() {
        return (
            <StripeProvider apiKey={KEYS.STRIPE_PUBLIC_KEY}>
                <Elements>
                    <CardForm />
                </Elements>
            </StripeProvider>
        );
    }
}
class Card_Form extends EcomPureComponent {
    handleSubmit = e => {
        e.preventDefault();
        this.props.stripe.createToken().then(payload => console.log(payload))
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <div className="payment-form-input text-box form-control" >
                    <CardElement />
                </div>
                <ShopmateButton onClick={this.handleSubmit} type="submit" label="Pay" />
            </Form >
        )
    }
}
const CardForm = injectStripe(Card_Form)

function mapStateToProps(state) {
    return {
        profile: state.profile
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}

export const ShopmatePayment = connect(mapStateToProps, mapDispatchToProps)(Payment)