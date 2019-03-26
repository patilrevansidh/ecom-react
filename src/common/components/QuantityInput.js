import React from 'react';
import '../assets/styles/baseComponent.scss';
import { EcomPureComponent } from './EcomPureComponent';

export class QuantityInput extends EcomPureComponent {
    render() {
        const { handleQuantityIncrementDecrement, quantity, handleQuantityChange } = this.props;
        return (
            <React.Fragment>
                <div className="base-component-quanity">
                    <div className="quantity-oval" id="minus" onClick={() => handleQuantityIncrementDecrement('minus')}> <i className="fas fa-minus" /> </div>
                    <input min={1} value={quantity} onChange={handleQuantityChange} className="quntity-input" type="text" />
                    <div className="quantity-oval" id="plus" onClick={() => handleQuantityIncrementDecrement('plus')}> <i className="fas fa-plus" /> </div>
                </div>
            </React.Fragment>
        )
    }
}
