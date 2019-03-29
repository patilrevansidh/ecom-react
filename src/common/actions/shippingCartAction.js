import { SHIPPING, ORDERS } from '../constants/actionString';
import { ShopCart } from '../services/promises/shopPromise';

export const getShippingDetails = () => {
    return async (dispatchEvent) => {
        const shippingCartDetails = await ShopCart.fetchShipingDetails();
        const payload = {
            details: shippingCartDetails,
        }
        dispatchEvent({ type: SHIPPING.FETCH_SHIPPING_REGION_COMPLETE, payload })
    }
}

export function getCartDetails() {
    return async (dispatchEvent) => {
        try {
            const isCartExist = localStorage.getItem('cartId')
            if (isCartExist) {
                const cartDetails = await ShopCart.fetchCartDetails(isCartExist)
                dispatchEvent({ type: SHIPPING.RESTORE_CART_DETAILS, payload: { cart_id: isCartExist, cart: cartDetails } })
            } else {
                const cart_id = await ShopCart.fetchCardId();
                localStorage.setItem('cartId', cart_id.cart_id)
                dispatchEvent({ type: SHIPPING.GENERATE_CART, payload: cart_id.cart_id })
            }
        } catch (error) {

        }
    }
}

export function handleAddCart(payload, product) {
    return async (dispatchEvent) => {
        const response = await ShopCart.addToCart(payload)
        dispatchEvent({ type: SHIPPING.ADD_TO_CART_COMPLETE, payload: response })
    }
}

export function updateItemQuantity(payload, cart_id) {
    return async (dispatchEvent) => {
        const response = await ShopCart.updateCartItem(payload, cart_id);
        dispatchEvent({ type: SHIPPING.UPDATE_CART_ITEM, payload: response })
    }
}

export function deleteCartItem(item_id) {
    return async (dispatchEvent) => {
        const response = await ShopCart.deleteCartItem(item_id);
        dispatchEvent({ type: SHIPPING.DETELTE_CART_ITEM_COMPLETE, payload: response })
    }
}

export function proceedtoPayment(payload) {
    return (dispatchEvent) => {
        dispatchEvent({ type: ORDERS.PROCEED_TO_PAYMENT, payload })
    }
}

export function handleNextStep() {
    return (dispatchEvent) => {
        dispatchEvent({ type: SHIPPING.CHECKOUT_NEXT_STEP })
    }
}

export function handleFinishStep() {
    return async (dispatchEvent) => {
        localStorage.removeItem('cartId')
        dispatchEvent({ type: SHIPPING.FINISH_STEP })
        const cart_id = await ShopCart.fetchCardId();
        localStorage.setItem('cartId', cart_id.cart_id)
        dispatchEvent({ type: SHIPPING.GENERATE_CART, payload: cart_id.cart_id })
    }
}