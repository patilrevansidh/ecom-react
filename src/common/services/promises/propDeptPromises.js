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
        const url = "departments/"
        return HTTPService.get(url)
    }
    static fetchDetails(id) {
        const url = "departments/" + id;
        return HTTPService.get(url)
    }

    static fetchDepartmentCategories(departments = []) {
        const categories = []
        departments.forEach(async (dept) => {
            const url = '/categories/inDepartment/' + dept.department_id
            categories.push(HTTPService.get(url))
        });
        return new Promise(async (resolve, reject) => {
            try {
                let response = await Promise.all(categories)
                const allCatgories = [];
                response.forEach(item => {
                    item.forEach(i => allCatgories.push(i))
                });
                resolve(
                    departments.map(dept => { return { ...dept, categories: allCatgories.filter(cat => cat.department_id === dept.department_id) } })
                )
            } catch (error) {
                reject(error)
            }
        })
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