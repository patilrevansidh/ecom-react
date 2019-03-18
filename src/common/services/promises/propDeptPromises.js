import { HTTPService } from '../HttpService';
import { URLS } from '../../constants/stringConstants';



export class Attributes {
    static fecth() {
        return HTTPService.get(URLS.API_URL_PATH.ATTRIBUTES)
    }

    static fetchDetails(id) {
        return HTTPService.get(URLS.API_URL_PATH.ATTRIBUTES + id)
    }
}

export class Categories {
    static fecth() {
        return HTTPService.get(URLS.API_URL_PATH.CATEGORIES)
    }

    static fetchDetails(id) {
        return HTTPService.get(URLS.API_URL_PATH.CATEGORIES + id)
    }
}

export class Products {
    static fecth() {
        return HTTPService.get(URLS.API_URL_PATH.PRODUCTS)
    }

    static fetchDetails(id) {
        return HTTPService.get(URLS.API_URL_PATH.PRODUCTS + id)
    }

    static reviewProduct(id, payload) {
        return HTTPService.put(URLS.API_URL_PATH.PRODUCTS + id, payload)
    }
}

export class Departments {
    static fecth() {
        return HTTPService.get(URLS.API_URL_PATH.DEPARTMENTS)
    }
    static fetchDetails(id) {
        return HTTPService.get(URLS.API_URL_PATH.DEPARTMENTS + id)
    }
}

export function fecthAttributes() {
    return HTTPService.get(URLS.API_URL_PATH.ATTRIBUTES)
}

export function fecthDepartments() {
    return HTTPService.get(URLS.API_URL_PATH.DEPARTMENTS)
}

export function fecthProducts() {
    return HTTPService.get(URLS.API_URL_PATH.PRODUCTS)
}

export function fecthCategories() {
    return HTTPService.get(URLS.API_URL_PATH.CATEGORIES)
}

export function fetchAttributeDetails(id) {
    return HTTPService.get(URLS.API_URL_PATH.ATTRIBUTES + id)
}

export function fetchDepartmentDetails(id) {
    return HTTPService.get(URLS.API_URL_PATH.DEPARTMENTS + id)
}

export function fetchProductDetails(id) {
    return HTTPService.get(URLS.API_URL_PATH.PRODUCTS + id)
}

export function reviewProduct(id, payload) {
    return HTTPService.put(URLS.API_URL_PATH.PRODUCTS + id, payload)
}