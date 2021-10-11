import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import FormField from "../common/FormField";
import {Button, Col} from "react-bootstrap";
import {categoryFormFields} from "./FormFields";

class CategoryForm extends Component {


    renderFields() {
        return categoryFormFields.map(({label, name, type, options, required, data}, i) => {
            return (
                <Field key={i} label={label} name={name} type={type} required={required}
                       component={FormField}/>
            )

        })
    }

    render() {
        const {onCategorySubmit} = this.props
        return (
            <form onSubmit={this.props.handleSubmit(onCategorySubmit)}>
                {this.renderFields()}
                <Col md={12} style={{marginTop: '5px'}}> <Button type='submit' variant="success">Save</Button></Col>
            </form>
        )
    }
}

function validate(values) {
    const errors = {}
    categoryFormFields.forEach(({name, required}) => {
        if (!values[name] && required) {
            errors[name] = 'required'
        }
    })
    return errors
}

function mapStateToProps({categories}) {
    return {
        categories,
        initialValues:
        categories.categoryItem

    }

}

CategoryForm = reduxForm({validate, form: 'CategoryForm'})(CategoryForm)

export default connect(mapStateToProps)(CategoryForm)