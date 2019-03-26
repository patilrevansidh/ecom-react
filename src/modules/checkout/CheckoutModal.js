import React from 'react';
import { EcomPureComponent } from '../../common/components/EcomPureComponent';
import { Modal, Col } from 'react-bootstrap';
import { Steps } from 'antd';
import { DeliveryForm } from '../checkout/DeliveryForm';
import { handleModal } from '../../common/actions/authAction';
import { connect } from 'react-redux';

const Step = Steps.Step;

class CheckoutModal extends EcomPureComponent {
    state = { current: 0 }

    handleCloseCheckoutModal = () => {
        this.props.handleModal({ showCheckoutModal: false })
    }

    render() {
        let currentStepComponent = <DeliveryForm />;
        switch (this.state.current) {
            case 0:
                currentStepComponent = <DeliveryForm />
                break;
            default:
                currentStepComponent = <DeliveryForm />
                break;
        }
        const steps = [
            { title: 'Delivery' }, { title: 'Confirmation' }, { title: 'Order' }, { title: 'Finish' },
        ]
        return (
            <React.Fragment>
                <Col span={{ md: 10, xs: 8 }}>
                    <Modal size='lg' show={this.props.showCheckoutModal} onHide={this.handleCloseCheckoutModal} >
                        <Modal.Header>
                            <Modal.Title>  CheckOut</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Steps progressDot current={this.state.current}>
                                {
                                    steps.map(step => {
                                        return <Step title={step.title} />
                                    })
                                }
                            </Steps>
                            <div className="steps-content">
                                {currentStepComponent}
                            </div>
                        </Modal.Body>
                    </Modal>
                </Col>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        showCheckoutModal: state.profile.showCheckoutModal,
        cart: state.shippingCart.cart
    }
}

function mapDispatchToProps(dispatchEvent) {
    return {
        handleModal: (payload) => { dispatchEvent(handleModal(payload)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutModal);