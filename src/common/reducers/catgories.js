import { ATTRIBUTES_CATEGORIES_PRODUCT_ACTION } from '../../common/constants/actionString';

const initialState = {
    categories: []
}

export const categories = (state = initialState, action) => {
    switch (action.type) {
        case ATTRIBUTES_CATEGORIES_PRODUCT_ACTION.FECTH_CATEGORIES:
            return { ...state, ...action.payload }
        default:
            return state
    }
}