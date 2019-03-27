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
                const products = store.getState().products.products;
                let addCartItems = await HTTPService.post(url + 'add', payload)
                const shippingCart = store.getState().shippingCart.cart;

                resolve(
                    addCartItems.map((item) => {
                        const isAlreadyCalculated = shippingCart.find(cItem => cItem.item_id === item.item_id)
                        if (isAlreadyCalculated) return isAlreadyCalculated;
                        const product = products.find(product => product.product_id === payload.product_id);
                        return { ...item, product_id: product.product_id, image: product.thumbnail }
                    })
                )

            } catch (error) {
                reject(error)
            }
        })
    }

    static fetchCartDetails(id) {
        return HTTPService.get(url + id);
    }

    static updateCartItem(payload, cart_id) {
        return new Promise(async (resolve, reject) => {
            try {
                const cartItems = store.getState().shippingCart.cart;
                await HTTPService.put(url + 'update/' + payload.item_id, payload);
                let cartDetails = await HTTPService.get(url + cart_id);

                // cartDetails = 
                resolve(
                    cartDetails.map((item) => {
                        const product = cartItems.find(it => it.item_id === item.item_id)
                        if (product) return { ...product, ...item }
                    })
                )
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