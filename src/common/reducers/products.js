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
            return { ...state, isLoading: true };

        case PRODUCTS.FETCH_PRODUCTS_COMPLETE:
            return { ...state, ...action.payload, isLoading: false };

        case PRODUCTS.PRODUCT_DETAIL_LOADING:
            return { ...state, isDetailLoading: true };

        case PRODUCTS.FETCH_PRODUCT_DETAILS_COMPLETE:
            return { ...state, selectedProduct: action.payload, isDetailLoading: false };

        case PRODUCTS.CLEAR_SELECTED_PRODUCT:
            return { ...state, selectedProduct: null, isDetailLoading: false };

        case PRODUCTS.POST_PRODUCT_REVIEW:
            const selectedProduct = {
                ...state.selectedProduct,
                reviews: [...state.selectedProduct.reviews, action.payload]
            }
            return { ...state, selectedProduct: selectedProduct, isDetailLoading: false };
        default:
            return state
    }
}