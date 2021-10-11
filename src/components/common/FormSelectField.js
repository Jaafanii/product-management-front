import React, {Component} from 'react'
import {Form} from "react-bootstrap";

class FormSelectField extends Component {
    render() {
        const {input, label, required, defaultOptionMessage, meta, options} = this.props
        return (
            <div className='form-group'>
                <Form.Group className="mb-12">
                    <Form.Label>{label}</Form.Label>
                    <Form.Select required={required} name={input.name} {...input}>
                        <option>{defaultOptionMessage}</option>
                        ) )

                        {options?.list?.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>))
                        }


                    </Form.Select>
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

export default FormSelectField;