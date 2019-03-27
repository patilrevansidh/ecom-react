import { HTTPService } from '../HttpService';
import { store } from '../../../config/redux';

const url = 'shoppingcart/';

export class ShopCart {

    static fetchCardId() {
        return HTTPService.get(url + 'generateUniqueId/');
    }

    static async fetchShipingDetails() {
        const regions = await HTTPService.get('shipping/regions');
        if (Array.isArray(regions)) {
            return new Promise(async (resolve, reject) => {
                try {
                    let regionsDetails = regions.map((region) => HTTPService.get("shipping/regions/" + region.shipping_region_id))
                    regionsDetails = await Promise.all(regionsDetails);
                    const regionAndShippingDetails = regions.map((item, index) => {
                        return {
                            region: item,
                            shipping_details: regionsDetails[index]
                        }
                    })
                    resolve(regionAndShippingDetails)
                } catch (error) {
                    reject(error)
                }
            })
        }
    }

    static async fetchTaxDetails() {
        return new Promise(async (resolve, reject) => {
            try {
                const taxes = await HTTPService.get('tax');
                let taxesDetails = taxes.map((tax) => HTTPService.get('tax/' + tax.tax_id));
                taxesDetails = await Promise.all(taxesDetails);
                resolve(taxesDetails)
            } catch (error) {
                reject(error)
            }
        })
    }

    static addToCart(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                let addCartItems = await HTTPService.post(url + 'add', payload)
                const shippingCart = store.getState().products.products;
                addCartItems = addCartItems.map((item) => {
                    const product = shippingCart.find(product => product.product_id === payload.product_id);
                    return {
                        image: product.thumbnail,
                        ...payload,
                        ...item
                    }
                })
                resolve(addCartItems)
            } catch (error) {
                reject(error)
            }
        })
    }

    static fetchCartDetails(id) {
        return HTTPService.get(url + id);
    }

    static updateCartItem(payload) {
        return new Promise(async (resolve, reject) => {
            try {
                const shippingCart = store.getState().shippingCart.cart;
                const response = await HTTPService.put(url + 'update/' + payload.item_id, payload)
                const cartItems = shippingCart.map((item) => {
                    if (item.item_id === response.item_id) {
                        console.log("updated data", { ...item, ...response })
                        return { ...item, ...response }
                    }
                    return item
                })
                resolve(cartItems)
            } catch (error) {
                reject(error)
            }
        })
    }

    static deleteCart(cart_id) {
        return HTTPService.delete(url + 'empty/' + cart_id);
    }

    static fetchtotalCartAmount(cart_id) {
        return HTTPService.get(url + cart_id);
    }

    static deleteCartItem(item_id) {
        return HTTPService.delete(url + 'removeProduct/' + item_id)
    }
}