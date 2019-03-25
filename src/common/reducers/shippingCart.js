import { SHIPPING } from '../constants/actionString';

const initialState = {
    card_id: null,
    shipping: [],
    cart: []
}

export function shippingCart(state = initialState, action) {
    switch (action.type) {
        case SHIPPING.FETCH_SHIPPING_REGION_COMPLETE:
            return { ...state, shipping: action.payload };
        case SHIPPING.ADD_TO_CART_COMPLETE:
            return { ...state }
        case SHIPPING.DETELTE_CART_ITEM_COMPLETE:
            return { state }
        case SHIPPING.FETCH_TAX_DETAILS:
            return { ...state }
        default:
            return state
    }
}