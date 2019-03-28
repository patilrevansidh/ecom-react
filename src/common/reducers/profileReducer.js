import { PROFILE_ACTION, ORDERS, SHIPPING } from '../../common/constants/actionString';

const initialState = {
    showAuthModal: false,
    showCheckoutModal: true,
    showCartModal: false,
    isSignInForm: true,
    isLoggedIn: false,
    orderValue: 0,
    cart: [],
    orders: [
        {
            "order_id": 148,
            "product_id": 20,
            "attributes": "XL, Yellow",
            "product_name": "Torch",
            "quantity": 1,
            "unit_cost": "17.95",
            "subtotal": "17.95"
        }, {
            "order_id": 148,
            "product_id": 6,
            "attributes": "S, White",
            "product_name": "Alsace",
            "quantity": 2,
            "unit_cost": "16.50",
            "subtotal": "33.00"
        }
    ],
    ordersLoading: false,
    paymentInfo: null,
    currentStep: 1,
}

export const profile = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_ACTION.OPEN_AUTH_MODAL:
            return { ...state, ...action.payload }
        case PROFILE_ACTION.TOGGLE_MODAL:
            return { ...state, ...action.payload }
        case PROFILE_ACTION.SIGN_IN:
            return { ...state, ...action.payload, showAuthModal: false, isLoggedIn: true, isSignInForm: false, }
        case PROFILE_ACTION.SIGN_UP:
            return { ...state, ...action.payload, showAuthModal: false, isLoggedIn: true, isSignInForm: false, }
        case PROFILE_ACTION.UPDATE_ADDRESS:
            return { ...state, user: { ...state.customer, ...action.payload } }
        case PROFILE_ACTION.FETCH_INFO:
            return { ...state, user: { ...state.user, ...action.payload }, isLoggedIn: true }

        case ORDERS.PLACE_ORDER_COMPLETE:
            return { ...state, orders: [...state.orders, ...action.payload] }
        case SHIPPING.CHECKOUT_NEXT_STEP:
            return { ...state, currentStep: state.currentStep + 1 }

        case ORDERS.PROCEED_TO_PAYMENT:
            return { ...state, ...action.payload, currentStep: state.currentStep + 1 }
        default:
            return state
    }
}