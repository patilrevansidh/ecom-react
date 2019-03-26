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

export function handleAddCart(payload, product) {
    return async (dispatchEvent) => {
        const response = await ShopCart.addToCart(payload)
        const cartItem = { ...response, ...product }
        dispatchEvent({ type: SHIPPING.ADD_TO_CART_COMPLETE, payload: cartItem })
    }
}