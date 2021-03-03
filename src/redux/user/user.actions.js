import CartActionTypes from '../cart/cart.types';
import { userActionTypes } from './user.types';

export const toggleCartHidden = item => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const setCurrentUser = item => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: item
});