import React, { Component } from 'react';
import { EcomPureComponent } from '../../common/components/EcomPureComponent';
import { connect } from 'react-redux';

class Payment extends EcomPureComponent {
    render() {
        return (
            <div>
                Do Payment of {this.props.profile.orderValue}
            </div>
        );
    }
}

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