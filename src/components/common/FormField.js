import React, {Component} from 'react'
import {Form} from "react-bootstrap";

class FormField extends Component {
    render() {
        const {input, label, type, required, meta, disabled} = this.props
        return (
            <div className='form-group'>
                <Form.Group className="mb-12">
                    <Form.Label>{label}</Form.Label>
                    <Form.Control disabled={disabled} type={type} required={required} {...input}/>

                </Form.Group>
                {
                    meta.error && meta.touched && (
                        <div className='mt-2 text-danger title'>{meta.error}</div>
                    )
                }

            </div>
        )
    }
}

export default FormField;