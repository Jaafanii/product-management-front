import {combineReducers} from 'redux'
import CategoryReducer from './categoryReducer'
import ExchangeRateReducer from './ExchangeRateReducer'
import ProductReducer from './ProductReducer'
import {reducer as reduxForm} from 'redux-form'


const rootReducers = combineReducers({
    products: ProductReducer,
    categories: CategoryReducer,
    exchangeRates: ExchangeRateReducer,
    form: reduxForm

})

export default rootReducers