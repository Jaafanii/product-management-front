import * as TYPES from "../types/ProductTypes";


export default function (state = [], action) {
    switch (action.type) {
        case TYPES.PRODUCT_LIST:
            return {productPage: action.payload, currentPage: action.currentPage}
        case TYPES.PRODUCT_SAVE:
            return {saved: true, msg: 'Product created successfully'}
        case TYPES.PRODUCT_UPDATE:
            return {...state, saved: true, msg: 'Product Updated successfully'}
        case TYPES.PRODUCT_GET_ONE:
            return {productItem: action.payload}
        default:
            return state
    }
}