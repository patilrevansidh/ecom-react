import { HTTPService } from '../HttpService';
import { URLS } from '../../constants/stringConstants';


export class Customer {

    static get(id) {
        return HTTPService.get('customer')
    }

    static signIn(formData) {
        return HTTPService.post(URLS.API_URL_PATH.CUSTOMERS + 'login', formData)
    }

    static signUp(formData) {
        return HTTPService.post(URLS.API_URL_PATH.CUSTOMERS, formData)
    }

    static singInWithFacebook(payload) {
        return HTTPService.post(URLS.API_URL_PATH.CUSTOMERS + 'facebook', payload)
    }

    static updateAddress(payload) {
        return HTTPService.put(URLS.API_URL_PATH.CUSTOMERS + 'address', payload)
    }

    static update(payload) {
        return HTTPService.put('customer', payload)
    }

    static updateCreditCard(payload) {
        return HTTPService.post(URLS.API_URL_PATH.CUSTOMERS + 'creditCard', payload)
    }
}

// export function updateCustomer(payload) {
//     return HTTPService.put('customer', payload)
// }

// export function getCustomerInfo(id) {
//     return HTTPService.get('customer' + id)
// }

// export function registerCustomer(payload) {
//     return HTTPService.post(URLS.API_URL_PATH.CUSTOMERS, payload)
// }

// export function customerSignIn(payload) {
//     return HTTPService.post(URLS.API_URL_PATH.CUSTOMERS + 'login', payload)
// }

// export function customerSingInWithFacebook(payload) {
//     return HTTPService.post(URLS.API_URL_PATH.CUSTOMERS + 'facebook', payload)
// }

// export function updateCustomerAddress(payload) {
//     return HTTPService.post(URLS.API_URL_PATH.CUSTOMERS + 'address', payload)
// }

// export function updateCustomerCreditCard(payload) {
//     return HTTPService.post(URLS.API_URL_PATH.CUSTOMERS + 'creditCard', payload)
// }