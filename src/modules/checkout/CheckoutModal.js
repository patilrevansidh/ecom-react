import React from 'react';
import { EcomPureComponent } from '../../common/components/EcomPureComponent';
import { Modal, Row, Col } from 'react-bootstrap';
import { Steps } from 'antd';
import { DeliveryForm } from '../checkout/DeliveryForm';

const Step = Steps.Step;

class CheckoutModal extends EcomPureComponent {
    state = {
        current: 0
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
                    <Modal size='lg' show={true} >
                        <Modal.Header>
                            <Modal.Title>CheckOut</Modal.Title>
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

export default CheckoutModal;