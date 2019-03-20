import { URLS } from '../../constants/stringConstants';
import { HTTPService } from '../HttpService';
// import { store } from '../../../config/redux';

export class Products {
    static fecth() {
        return HTTPService.get(URLS.API_URL_PATH.PRODUCTS)
    }

    static async fetchDetails(id) {
        try {
            let details = await HTTPService.get(URLS.API_URL_PATH.PRODUCTS + id + '/details');
            const locations = await HTTPService.get(URLS.API_URL_PATH.PRODUCTS + id + '/locations');
            const reviews = await HTTPService.get(URLS.API_URL_PATH.PRODUCTS + id + '/reviews');
            details = Array.isArray(details) && details[0] || details
            return { ...details, locations, reviews }
        } catch (error) {

        }
    }

    static reviewProduct(id, payload) {
        const url = URLS.API_URL_PATH.PRODUCTS + id + '/reviews'
        return HTTPService.post(url, payload)
    }

    static async getProductYouMayLike(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const sameCategory = await HTTPService.get(URLS.API_URL_PATH.PRODUCTS + '/inCategory' + id)
                const sameDepartment = await HTTPService.get(URLS.API_URL_PATH.PRODUCTS + '/inDepartment' + id);
                const similar_products = [...sameCategory, sameDepartment]
                resolve(similar_products);
            } catch (error) {
                reject(error)
            }
        })
    }
}