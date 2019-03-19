import { PRODUCTS } from '../../common/constants/actionString';

const initialState = {
    count: 0,
    products: [],
    isLoading: true
}

export const products = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS.FETCH_PRODUCTS_COMPLETE:
            return { ...state, ...action.payload, isLoading: false }
        case PRODUCTS.PRODUCTS_LOADING:
            return { ...state, isLoading: true }
        default:
            return state
    }
}