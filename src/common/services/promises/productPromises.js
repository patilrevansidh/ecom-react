import { URLS } from '../../constants/stringConstants';
import { HTTPService } from '../HttpService';
// import { store } from '../../../config/redux';

export class Products {
    static fecth() {
        return HTTPService.get(URLS.API_URL_PATH.PRODUCTS)
    }

    static async fetchDetails(id) {
        try {
            const details = await HTTPService.get(URLS.API_URL_PATH.PRODUCTS + id);
            const locations = await HTTPService.get(URLS.API_URL_PATH.PRODUCTS + id + '/locations');
            const reviews = await HTTPService.get(URLS.API_URL_PATH.PRODUCTS + id + '/reviews');
            return { ...details, locations, reviews }
        } catch (error) {

        }
    }

    static reviewProduct(id, payload) {
        return HTTPService.put(URLS.API_URL_PATH.PRODUCTS + id, payload)
    }
}