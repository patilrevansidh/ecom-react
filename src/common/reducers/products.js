import { PRODUCTS } from '../../common/constants/actionString';

const initialState = {
    count: 0,
    products: [],
    isLoading: true,
    isDetailLoading: false,
    selectedProduct: null
}

export const products = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS.PRODUCTS_LOADING:
            return { ...state, isLoading: true }

        case PRODUCTS.FETCH_PRODUCTS_COMPLETE:
            return { ...state, ...action.payload, isLoading: false }

        case PRODUCTS.PRODUCT_DETAIL_LOADING:
            return { ...state, isDetailLoading: true }

        case PRODUCTS.FETCH_PRODUCT_DETAILS_COMPLETE:
            return { ...state, selectedProduct: action.payload, isDetailLoading: false }

        default:
            return state
    }
}