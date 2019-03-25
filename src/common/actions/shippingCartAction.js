import { SHIPPING } from '../constants/actionString';
import { ShopCart } from '../services/promises/shopPromise';

export const getShippingDetails = () => {
    return async (dispatchEvent) => {
        const shippingCartDetails = await ShopCart.fetchShipingDetails();
        dispatchEvent({ type: SHIPPING.FETCH_SHIPPING_REGION_COMPLETE, payload: shippingCartDetails })
    }
}