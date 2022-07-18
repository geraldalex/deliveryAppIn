
import {omit} from 'lodash'
import { ADD_TO_CART, REMOVE_FROM_CART } from "../constans/actionTypes"

const initialState = {};

const favoriteReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TO_CART:

            return {
                ...state,
                ...action.payload
            }

        case REMOVE_FROM_CART:
            return omit(state, [action.payload])

        default:
            return state;
    }
}

export default favoriteReducer;