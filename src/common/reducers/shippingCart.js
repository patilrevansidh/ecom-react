import { SHIPPING } from '../constants/actionString';

const initialState = {
    cart_id: null,
    shipping: [],
    cart: []
}

export const shippingCart = (state = initialState, action) => {
    switch (action.type) {
        case SHIPPING.GENERATE_CART:
            return { ...state, cart_id: action.payload };
        case SHIPPING.RESTORE_CART_DETAILS:
            return { ...state, cart: action.payload.cart, cart_id: action.payload.cart_id };
        case SHIPPING.FETCH_SHIPPING_REGION_COMPLETE:
            return { ...state, shipping: action.payload.details };
        case SHIPPING.ADD_TO_CART_COMPLETE:
            return { ...state, cart: action.payload }
        case SHIPPING.UPDATE_CART_ITEM:
            return { ...state, cart: action.payload }
        case SHIPPING.DETELTE_CART_ITEM_COMPLETE:
            return { ...state, cart: action.payload }

        case SHIPPING.FETCH_TAX_DETAILS:
            return { ...state }
        case SHIPPING.FINISH_STEP:
            return { ...state, cart: [] }

        default:
            return state
    }
}