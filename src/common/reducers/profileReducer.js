import { PROFILE_ACTION, ORDERS, SHIPPING } from '../../common/constants/actionString';

const initialState = {
    showAuthModal: false,
    showCheckoutModal: false,
    showCartModal: false,
    isSignInForm: true,
    isLoggedIn: false,
    orderValue: 0,
    cart: [],
    orders: [],
    ordersLoading: false,
    paymentInfo: null,
    currentStep: 0,
}

export const profile = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_ACTION.OPEN_AUTH_MODAL:
            return { ...state, ...action.payload }
        case PROFILE_ACTION.TOGGLE_AUTH_FORM:
            return { ...state, isSignInForm: !state.isSignInForm }
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
        case SHIPPING.FINISH_STEP:
            return { ...state, cart: [], orders: [], currentStep: 0, orderValue: 0 }

        case ORDERS.PROCEED_TO_PAYMENT:
            return { ...state, ...action.payload, currentStep: state.currentStep + 1, showCheckoutModal: false }
        default:
            return state
    }
}