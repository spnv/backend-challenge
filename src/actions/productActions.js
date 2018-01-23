"use strict"
import axios from 'axios';

export function getProducts(catagory) {
    return function (dispatch) {
        axios.get("/products/" + catagory)
            .then(function (respone) {
                dispatch({
                    type: "GET_PRODUCTS",
                    payload: respone.data
                })
            })
            .catch(function (err) {
                dispatch({
                    type: "GET_PRODUCTS_REJECTED",
                    payload: err.response.data
                })
            })
    }
}