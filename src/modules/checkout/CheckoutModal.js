import React from 'react';
import { EcomPureComponent } from '../../common/components/EcomPureComponent';
import { Modal, Col } from 'react-bootstrap';
import { Steps } from 'antd';
import { DeliveryForm } from '../checkout/DeliveryForm';
import { handleModal } from '../../common/actions/authAction';
import { connect } from 'react-redux';

const Step = Steps.Step;

class CheckoutModal extends EcomPureComponent {


    handleCloseCheckoutModal = () => {
        this.props.handleModal({ showCheckoutModal: false })
    }

    render() {
        let currentStepComponent = <DeliveryForm />;
        switch (this.props.profile.current) {
            case 0:
                currentStepComponent = <DeliveryForm />
                break;
            case 1:
                currentStepComponent = <div>Confirmation</div>
                break;
            default:
                currentStepComponent = <DeliveryForm />
                break;
        }
        const steps = [
            { title: 'Delivery' }, { title: 'Confirmation' }, { title: 'Payment' }, { title: 'Finish' },
        ]
        return (
            <React.Fragment>
                <Col span={{ md: 10, xs: 8 }}>
                    <Modal size='lg' show={this.props.showCheckoutModal} onHide={this.handleCloseCheckoutModal} >
                        <Modal.Header>
                            <Modal.Title>  CheckOut</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Steps progressDot current={this.props.profile.current}>
                                {
                                    steps.map(step => {
                                        return <Step key={step.title} title={step.title} />
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
        profile: state.profile,
        cart: state.shippingCart.cart
    }
}

function mapDispatchToProps(dispatchEvent) {
    return {
        handleModal: (payload) => { dispatchEvent(handleModal(payload)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutModal);