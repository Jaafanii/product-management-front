import React, {Component} from 'react'
import {connect} from 'react-redux'
import {change, Field, reduxForm} from 'redux-form'
import FormField from "../common/FormField";
import FormSelectField from "../common/FormSelectField";
import {Button, Col} from "react-bootstrap";
import {productFormFields} from "./FormFields";
import currencies from "../../data/currencies.json"
import {getExchangeRate} from "../../actions/ExchangeRateAction";

class ProductForm extends Component {

    constructor() {
        super();
        this.state = {price: null, currency: null, exchangeRate: 1}

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.exchangeRate !== this.props.exchangeRate) {
            this.calculate(this.state.price, nextProps.exchangeRate)
        }
    }

    calculate = (price, exchangeRate) => {
        if (price && exchangeRate) {
            this.props.dispatch(change("ProductForm", "exchangeRate", exchangeRate));
            const againstValue = price * exchangeRate
            this.props.dispatch(change("ProductForm", "againstValue", againstValue));

        }
    }

    handleChange(name, value) {
        if (name === 'price') {
            this.calculate(value, this.state.exchangeRate)
            this.setState({price: value})
        } else if (name === 'currency') {
            this.props.getExchangeRate(value)
        }

    }

    renderFields() {
        const currenciesList = currencies;
        return productFormFields.map(({label, name, type, options, required, defaultOptionMessage, disabled}, i) => {
            if (type !== 'select')
                return (
                    <Field key={i} label={label} name={name} type={type} required={required} props={{disabled}}
                           onChange={(e) => {
                               this.handleChange(name, e.target.value)
                           }}
                           component={FormField}/>
                )
            return (
                <Field key={i} label={label} name={name} props={{defaultOptionMessage: defaultOptionMessage}}
                       options={name === 'currency' ? currenciesList : this.props.categories.categoryPage}
                       type={type} required={required}
                       onChange={(e) => {
                           this.handleChange(name, e.target.value)
                       }}
                       component={FormSelectField}/>
            )
        })
    }

    render() {
        const {onProductSubmit} = this.props
        return (
            <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
                {this.renderFields()}
                <Col md={12} style={{marginTop: '5px'}}> <Button type='submit' variant="success">Save</Button></Col>
            </form>
        )
    }
}

function validate(values) {
    const errors = {}
    productFormFields.forEach(({name, required}) => {
        if (!values[name] && required) {
            errors[name] = 'required'
        }
    })
    return errors
}

function mapStateToProps({products, categories, exchangeRates}) {
    return {
        categories,
        exchangeRate: exchangeRates,
        initialValues: products && products.productItem && {
            name: products.productItem.name,
            price: products.productItem.price,
            quantity: products.productItem.quantity,
            categoryId: products.productItem.category?.id,
        }
    }
}

ProductForm = reduxForm({validate, form: 'ProductForm'})(ProductForm)

export default connect(mapStateToProps, {getExchangeRate})(ProductForm)