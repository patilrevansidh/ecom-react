import React from 'react';
import { EcomPureComponent } from '../../common/components/EcomPureComponent';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { proceedtoPayment } from '../../common/actions/shippingCartAction';
import { ShopmateButton } from '../../common/components/importer';
import './checkout.scss';

class OrderConfirmationStep extends EcomPureComponent {

    getTotalOrderValue = () => {
        return this.props.orders.reduce((a, b) => a + parseFloat(b.subtotal || 0), 0)
    }
    handleProceedToNavigation = () => {
        this.props.proceedtoPayment({ orderValue: this.getTotalOrderValue() })
    }
    render() {
        return (
            <div>
                <Row>
                    <Col md={{ span: 6 }}>
                        <div className="confirmation-order-title"> Item </div>
                    </Col>
                    <Col md={{ span: 2 }}>
                        <div className="confirmation-order-title"> Qty </div>
                    </Col>
                    <Col md={{ span: 2 }}>
                        <div className="confirmation-order-title"> Price </div>
                    </Col>
                </Row>
                {
                    this.props.orders.map((item) => {
                        return <Row className="margin-top-20">
                            <Col md={{ span: 6 }}>
                                <div className="order-item-name">{`${item.product_name} ${item.attributes}`}</div>
                            </Col>
                            <Col md={{ span: 2 }}>
                                <div className="order-item-name"> {item.quantity} </div>
                            </Col>
                            <Col md={{ span: 2 }}>
                                <div className="order-item-price"> {item.subtotal} </div>
                            </Col>
                        </Row>
                    })
                }
                <Row>
                    <Col className="margin-top-20 pull-right" md={{ span: 3, offset: 3 }}>
                        <div className="confirmation-order-title">SubTotal</div>
                        <div className="order-item price" > {this.getTotalOrderValue()} </div>
                    </Col>
                    <Col className="margin-top-20 pull-right" md={{ span: 3 }}>
                        <div className="confirmation-order-title">Shipping</div>
                        <div className="order-item price" > Free </div>
                    </Col>
                </Row>
                <div className="pull-right">
                    <ShopmateButton onClick={this.handleProceedToNavigation} label="Proceed to Payment" />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        orders: state.profile.orders,
    }
}
function mapDispatchToProps(dispatchEvent) {
    return {
        proceedtoPayment: (payload) => dispatchEvent(proceedtoPayment(payload))
    }
}

export const OrderConfirmation = connect(mapStateToProps, mapDispatchToProps)(OrderConfirmationStep)