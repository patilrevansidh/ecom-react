import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { EcomPureComponent } from './EcomPureComponent';
import '../assets/styles/baseComponent.scss';

class ShopmateButton extends EcomPureComponent {
    render = () => <Button variant='none' className="shopmate-primary-button" {...this.props}> {this.props.label} </Button>
}

export default ShopmateButton;