import { ATTRIBUTES_CATEGORIES_PRODUCT_ACTION } from '../constants/actionString';
import { Attributes, Departments, Categories, Products } from '../services/promises/propDeptPromises';

export function getProducts() {
    return async (dispatchEvent) => {
        try {
            const response = await Products.fecth();
            dispatchEvent({ type: ATTRIBUTES_CATEGORIES_PRODUCT_ACTION.FETCH_PRODUCT, payload: response })
        } catch (error) {
            console.log('Error in Products', error)
        }
    }
}

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
            response = response.map(dept => ({ ...dept, categories: [] }))
            dispatchEvent({ type: ATTRIBUTES_CATEGORIES_PRODUCT_ACTION.FECTH_DEPARTMENTS, payload: response })

            const departments = await Departments.fetchDepartmentCategories(response)
            dispatchEvent({ type: ATTRIBUTES_CATEGORIES_PRODUCT_ACTION.FECTH_DEPARTMENTS, payload: departments })
        } catch (error) {
            console.log('Error in Departments', error)
        }
    }
}