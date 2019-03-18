import { PROFILE_ACTION } from '../../common/constants/actionString';

const initialState = {
    showAuthModal: false,
}

export const profile = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_ACTION.OPEN_AUTH_MODAL:
            return { ...state, showAuthModal: action.payload }
        default:
            return state
    }
}