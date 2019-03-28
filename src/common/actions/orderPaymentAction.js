import { ORDERS } from '../constants/actionString';
import { ShopCart } from '../services/promises/shopPromise';

export function placeOrder(payload) {
    return async (dispatchEvent) => {
        try {
            dispatchEvent({ type: ORDERS.PLACE_ORDER_LOADING, payload: response })
            const response = await ShopCart.placeOrder(payload);
            dispatchEvent({ type: ORDERS.PLACE_ORDER_COMPLETE, payload: response })
        } catch (error) {

        }
    }
}