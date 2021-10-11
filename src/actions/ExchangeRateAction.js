import axios from "axios";
import {EXCHANGE_RATES_LIST} from "../types/ExchangeRateTypes";

export function getExchangeRate(currency) {
    return dispatch => {
        axios.get('https://v6.exchangerate-api.com/v6/2b84926d23b7950f0080ca06/latest/' + currency)
            .then(
                res => {
                    dispatch({
                        type: EXCHANGE_RATES_LIST,
                        payload: res.data
                    })
                }
            )
    }
}