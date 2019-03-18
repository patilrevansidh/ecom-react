import { ATTRIBUTES_CATEGORIES_PRODUCT_ACTION } from '../../common/constants/actionString';

const initialState = {
    products: []
}

export const products = (state = initialState, action) => {
    switch (action.type) {
        case ATTRIBUTES_CATEGORIES_PRODUCT_ACTION.FETCH_PRODUCT:
            return { ...state, ...action.payload }
        default:
            return state
    }
}