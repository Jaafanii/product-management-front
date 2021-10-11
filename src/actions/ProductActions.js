import axios from 'axios'
import * as types from "../types/ProductTypes";

export const productsFetch = (currentPage = 0, size = 10) => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + '/products?page=' + currentPage + '&size=' + size).then(
            res => {
                dispatch({
                    type: types.PRODUCT_LIST,
                    payload: res.data,
                    currentPage
                })
            }
        )
    }
}

export const getOne = (id) => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + '/products/' + id).then(
            res => {
                dispatch({
                    type: types.PRODUCT_GET_ONE,
                    payload: res.data
                })
            }
        )
    }

}

export const productDelete = id => {
    return dispatch => {
        axios.delete(process.env.REACT_APP_API_URL + '/products/' + id).then(
            res => {
                axios.get(process.env.REACT_APP_API_URL + '/products/').then(
                    res => {
                        dispatch({
                            type: types.PRODUCT_LIST,
                            payload: res.data
                        })
                    }
                )
            }
        )
    }
}
//
export const productCreate = values => {
    return dispatch => {
        axios.post(process.env.REACT_APP_API_URL + '/products/', values).then(
            res => {
                dispatch({type: types.PRODUCT_SAVE})
            }
        )
    }
}

export const productUpdate = (id, values) => {
    return dispatch => {
        axios.put(process.env.REACT_APP_API_URL + '/products/' + id, values).then(
            res => {
                dispatch({type: types.PRODUCT_UPDATE})
            }
        )
    }
}