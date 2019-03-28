import { ATTRIBUTES_CATEGORIES_PRODUCT_ACTION, PROFILE_ACTION } from '../constants/actionString';
import { Attributes, Departments, Categories } from '../services/promises/propDeptPromises';
import { Customer } from '../services/promises/authPromise';

export function getAttributes() {
    return async (dispatchEvent) => {
        try {
            const response = await Attributes.fecth();
            dispatchEvent({ type: ATTRIBUTES_CATEGORIES_PRODUCT_ACTION.FETCH_ATTRIBUTES, payload: response })
        } catch (error) {
            console.log('Error in Attributes', error)
        }
    }
}

export function getCategories() {
    return async (dispatchEvent) => {
        try {
            const response = await Categories.fecth();
            dispatchEvent({ type: ATTRIBUTES_CATEGORIES_PRODUCT_ACTION.FECTH_CATEGORIES, payload: response })
        } catch (error) {
            console.log('Error in Categories', error)
        }
    }
}

export function getDepartments() {
    return async (dispatchEvent) => {
        try {
            let response = await Departments.fecth();
            const departments = await Departments.fetchDepartmentCategories(response)
            dispatchEvent({ type: ATTRIBUTES_CATEGORIES_PRODUCT_ACTION.FECTH_DEPARTMENTS, payload: departments })
        } catch (error) {
            console.log('Error in Departments', error)
        }
    }
}

export function getCustomerInfo() {
    return async (dispatchEvent) => {
        try {
            const customer = await Customer.get()
            dispatchEvent({ type: PROFILE_ACTION.FETCH_INFO, payload: customer })
        } catch (error) {
            console.log('Error in Departments', error)
        }
    }
}