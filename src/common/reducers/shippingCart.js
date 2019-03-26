import { SHIPPING } from '../constants/actionString';

const initialState = {
    cart_id: null,
    shipping: [],
    cart: []
}

export const shippingCart = (state = initialState, action) => {
    switch (action.type) {
        case SHIPPING.FETCH_SHIPPING_REGION_COMPLETE:
            return { ...state, shipping: action.payload.details, cart_id: action.payload.cart_id };
        case SHIPPING.ADD_TO_CART_COMPLETE:
            return { ...state, cart: [...state.cart, action.payload] }
        case SHIPPING.DETELTE_CART_ITEM_COMPLETE:
            return { state }
        case SHIPPING.FETCH_TAX_DETAILS:
            return { ...state }
        default:
            return state
    }
}