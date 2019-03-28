import { PROFILE_ACTION, ORDERS } from '../../common/constants/actionString';

const initialState = {
    showAuthModal: false,
    showCheckoutModal: false,
    showCartModal: false,
    isSignInForm: true,
    isLoggedIn: false,
    cart: [],
    orders: [],
    ordersLoading: false,
    paymentInfo: null
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
            return { ...state, orders: [...state.orders, action.payload] }
        default:
            return state
    }
}