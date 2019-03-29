import React, { Component } from 'react';
import { connect } from 'react-redux';
import './checkout.scss';
import ShopmateButton from '../../common/components/Button';
import { handleFinishStep } from '../../common/actions/shippingCartAction';
import { EcomPureComponent } from '../../common/components/EcomPureComponent';

class FinishShoping extends EcomPureComponent {
    render() {
        return (
            <div className="center">
                Order Placed Successfully.
                <div className="margin-top-20">
                    <ShopmateButton onClick={this.props.handleFinishStep} label="Continue Shoping" />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        profile: state.profile
    }
}

function mapDispatchToProps(dispatchEvent) {
    return {
        handleFinishStep: () => dispatchEvent(handleFinishStep())
    }
}

export const FinishStep = connect(mapStateToProps, mapDispatchToProps)(FinishShoping);