import * as TYPES from "../types/CategoryTypes";


export default function (state = [], action) {
    switch (action.type) {
        case TYPES.CATEGORY_LIST:
            return {categoryPage: action.payload, currentPage: action.currentPage}
        case TYPES.CATEGORY_SAVE:
            return {saved: true, msg: 'Category created successfully'}
        case TYPES.CATEGORY_UPDATE:
            return {...state, saved: true, msg: 'Category Updated successfully'}
        case TYPES.CATEGORY_GET_ONE:
            return {categoryItem: action.payload}
        default:
            return state
    }
}