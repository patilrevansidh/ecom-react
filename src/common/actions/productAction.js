import { PRODUCTS } from '../constants/actionString';
import { Products } from '../services/promises/productPromises';

export function getProducts() {
    return async (dispatch) => {
        try {
            dispatch({ type: PRODUCTS.PRODUCTS_LOADING })
            const response = await Products.fecth();
            dispatch({ type: PRODUCTS.FETCH_PRODUCTS_COMPLETE, payload: { count: response.count, products: response.rows } })
        } catch (error) {
            console.log('Error in Products', error)
        }
    }
}

export function getProductDetail(id) {
    return async (dispatch) => {
        try {
            dispatch({ type: PRODUCTS.PRODUCT_DETAIL_LOADING, payload: id })
            const product = await Products.fetchDetails(id);
            dispatch({ type: PRODUCTS.FETCH_PRODUCT_DETAILS_COMPLETE, payload: product })
        } catch (error) {
            console.log("error", error)
        }
    }
}

export function clearSelectedProduct() {
    return (dispatchEvent) => {
        dispatchEvent({ type: PRODUCTS.CLEAR_SELECTED_PRODUCT })
    }
}