import { PROFILE_ACTION } from '../constants/actionString';
import { Customer } from '../services/promises/authPromise';

export const handleAuthModal = (payload) => {
    return (dispatchEvent) => {
        dispatchEvent({ type: PROFILE_ACTION.OPEN_AUTH_MODAL, payload })
    }
}

export const handleCustomerSignIn = (formData) => {
    return async (dispatchEvent) => {
        try {
            const response = await Customer.signIn(formData);
            // localStorage.setItem('',response.accessToken)
            dispatchEvent({ type: PROFILE_ACTION.SIGN_IN, payload: response })
        } catch (error) {

        }
    }
}

export const handleCustomerSignUp = (formData) => {
    return async (dispatchEvent) => {
        try {
            const response = await Customer.signUp(formData);
            dispatchEvent({ type: PROFILE_ACTION.SIGN_UP, payload: response })
        } catch (error) {

        }
    }
}
