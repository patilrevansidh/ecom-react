import { PROFILE_ACTION } from '../constants/actionString';

export const handleAuthModal = (payload) => {
    return (dispatchEvent) => {
        dispatchEvent({ type: PROFILE_ACTION.OPEN_AUTH_MODAL, payload })
    }
}