"use strict"

export function productReducers(state = {
    lists: {},
    count: 0,
    message: null
}, action) {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                lists: action.payload.lists,
                count: action.payload.count,
                message: action.payload.message
            }
            break;
        case "GET_PRODUCTS_REJECTED":
            return {
                lists: action.payload.lists,
                count: action.payload.count,
                message: action.payload.message
            }
            break;
    }
    return state
}