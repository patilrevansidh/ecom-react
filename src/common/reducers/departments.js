import { ATTRIBUTES_CATEGORIES_PRODUCT_ACTION } from '../../common/constants/actionString';

const initialState = {
    departments: []
}

export const departments = (state = initialState, action) => {
    switch (action.type) {
        case ATTRIBUTES_CATEGORIES_PRODUCT_ACTION.FECTH_DEPARTMENTS:
            return { ...state, ...action.payload }
        default:
            return state
    }
}