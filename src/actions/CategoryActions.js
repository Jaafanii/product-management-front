import axios from 'axios'
import * as types from "../types/CategoryTypes";

export const path = process.env.REACT_APP_API_URL + '/categories/'

export const categoriesFetch = (currentPage = 0, size = 10) => {
    return dispatch => {
        axios.get(path + '?page=' + currentPage + '&size=' + size).then(
            res => {
                dispatch({
                    type: types.CATEGORY_LIST,
                    payload: res.data,
                    currentPage
                })
            }
        )
    }
}

export const getOne = (id) => {
    return dispatch => {
        axios.get(path + id).then(
            res => {
                dispatch({
                    type: types.CATEGORY_GET_ONE,
                    payload: res.data
                })
            }
        )
    }

}

export const categoryDelete = id => {
    return dispatch => {
        axios.delete(path + id).then(
            res => {
                axios.get(path).then(
                    res => {
                        dispatch({
                            type: types.CATEGORY_LIST,
                            payload: res.data,
                            currentPage: 0
                        })
                    }
                )
            }
        )
    }
}
//
export const categoryCreate = values => {
    return dispatch => {
        axios.post(path, values).then(
            res => {
                dispatch({type: types.CATEGORY_SAVE})
            }
        )
    }
}

export const categoryUpdate = (id, values) => {
    return dispatch => {
        axios.put(path + id, values).then(
            res => {
                dispatch({type: types.CATEGORY_UPDATE})
            }
        )
    }
}