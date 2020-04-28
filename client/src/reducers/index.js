import {
    LOGIN,
    LOGOUT
} from '../actions'

import { REHYDRATE } from 'redux-persist'

const initialState = {
    user: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.user
            }

        case LOGOUT:
            return {
                ...state,
                user: null
            }

        case REHYDRATE:
            if (action.payload)
                return {...state }
            else
                return state

        default:
            return (state)
    }
}

export default reducer