import { ATTRIBUTES_CATEGORIES_PRODUCT_ACTION } from '../../common/constants/actionString';

const initialState = [
]

export const departments = (state = initialState, action) => {
    switch (action.type) {
        case ATTRIBUTES_CATEGORIES_PRODUCT_ACTION.FECTH_DEPARTMENTS:
            return action.payload;
        default:
            return state
    }
}