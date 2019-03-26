import { SHIPPING } from '../constants/actionString';
import { ShopCart } from '../services/promises/shopPromise';

export const getShippingDetails = () => {
    return async (dispatchEvent) => {
        const cart_id = await ShopCart.fetchCardId();
        const shippingCartDetails = await ShopCart.fetchShipingDetails();
        const payload = {
            details: shippingCartDetails,
            cart_id: cart_id.cart_id
        }
        dispatchEvent({ type: SHIPPING.FETCH_SHIPPING_REGION_COMPLETE, payload })
    }
}