import React from 'react';
import '../assets/styles/baseComponent.scss';
import { EcomPureComponent } from './EcomPureComponent';

export class QuantityInput extends EcomPureComponent {

    handleQuantityIncrementDecrement = (operation) => {
        if (operation === 'minus') {
            if (this.props.quantity - 1 < 1) return;
            this.props.onChange(this.props.quantity - 1);
            return;
        }
        this.props.onChange(this.props.quantity + 1);
    }

    handleQuantityChange = e => {
        if (/[.]/.test(e.target.value)) {
            this.props.onChange(this.props.quantity)
            return;
        };
        const value = e.target.value.replace(/[^0-9]*/g, '');
        this.props.onChange(value);
    }

    render() {
        const { quantity } = this.props;
        return (
            <React.Fragment>
                <div className="base-component-quanity">
                    <div className="quantity-oval" id="minus" onClick={() => this.handleQuantityIncrementDecrement('minus')}> <i className="fas fa-minus" /> </div>
                    <input min={1} value={quantity} onChange={this.handleQuantityChange} className="quntity-input" type="text" />
                    <div className="quantity-oval" id="plus" onClick={() => this.handleQuantityIncrementDecrement('plus')}> <i className="fas fa-plus" /> </div>
                </div>
            </React.Fragment>
        )
    }
}
