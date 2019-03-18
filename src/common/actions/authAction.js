import { PROFILE_ACTION } from '../constants/actionString';

export const handleAuthModal = (flag) => {
    return (dispatchEvent) => {
        dispatchEvent({ type: PROFILE_ACTION.OPEN_AUTH_MODAL, payload: flag })
    }
}