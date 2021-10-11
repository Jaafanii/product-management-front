import {EXCHANGE_RATES_LIST} from "../types/ExchangeRateTypes";

export default function (state = [], action) {
    switch (action.type) {
        case EXCHANGE_RATES_LIST:
            console.log(action.payload)
            return action.payload?.conversion_rates.EUR
        default:
            return state
    }
}