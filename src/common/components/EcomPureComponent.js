import React, { Component } from 'react';
import isEqual from 'react-fast-compare';

export class EcomPureComponent extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return !isEqual(nextProps, this.props) || !isEqual(nextState, this.state)
    }

    render() {
        return (
            <div/>
        );
    }
}