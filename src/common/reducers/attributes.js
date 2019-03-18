import { ATTRIBUTES_CATEGORIES_PRODUCT_ACTION } from '../../common/constants/actionString';

const initialState = {
    attributes: []
}

export const attributes = (state = initialState, action) => {
    switch (action.type) {
        case ATTRIBUTES_CATEGORIES_PRODUCT_ACTION.FETCH_ATTRIBUTES:
            return { ...state, ...action.payload }
        default:
            return state
    }
}