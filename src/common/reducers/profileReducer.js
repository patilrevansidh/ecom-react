import { PROFILE_ACTION } from '../../common/constants/actionString';

const initialState = {
    showAuthModal: false,
    isSignInForm: true,
    isLoggedIn: false,
    cart: []
}

export const profile = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_ACTION.OPEN_AUTH_MODAL:
            return { ...state, ...action.payload }
        case PROFILE_ACTION.SIGN_IN:
            return { ...state, ...action.payload, showAuthModal: false, isLoggedIn: true, isSignInForm: false, }
        case PROFILE_ACTION.SIGN_UP:
            return { ...state, ...action.payload, showAuthModal: false, isLoggedIn: true, isSignInForm: false,}
        default:
            return state
    }
}