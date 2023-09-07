import { ActionTypes } from "../constants/actions-types"

const initialState = {
    products: [{
        id: 1,
        title: "vishi",
        category: "programmer"
    }]
}

export const productReducer = (state, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state
    }
}