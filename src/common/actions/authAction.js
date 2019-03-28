import { PROFILE_ACTION } from '../constants/actionString';
import { Customer } from '../services/promises/authPromise';

export const handleModal = (payload) => {
    return (dispatchEvent) => {
        dispatchEvent({ type: PROFILE_ACTION.TOGGLE_MODAL, payload })
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

export const handleUpdateCustomer = (payload) => {
    return async (dispatchEvent) => {
        try {
            const respose = await Customer.updateAddress(payload);
            dispatchEvent({ type: PROFILE_ACTION.UPDATE_ADDRESS, payload })
        } catch (error) {
            console.log("update user", error)
        }
    }
}