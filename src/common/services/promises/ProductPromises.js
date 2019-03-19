import { URLS } from '../../constants/stringConstants';
import { HTTPService } from '../HttpService';
import { store } from '../../../config/redux';

export class Products {
    static fecth() {
        return HTTPService.get(URLS.API_URL_PATH.PRODUCTS)
    }

    static async fetchDetails(id) {
        return HTTPService.get(URLS.API_URL_PATH.PRODUCTS + id)
    }

    static reviewProduct(id, payload) {
        return HTTPService.put(URLS.API_URL_PATH.PRODUCTS + id, payload)
    }
}