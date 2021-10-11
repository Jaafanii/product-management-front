import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getOne, productCreate, productUpdate} from "../../actions/ProductActions";
import {categoriesFetch} from "../../actions/CategoryActions";
import ProductForm from "../../components/products/ProductForm";

class ProductEdit extends Component {

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.getOne(this.props.match.params.id)
        }
        this.props.categoriesFetch();
    }


    render() {
        const {formValues, match, productCreate, productUpdate, productItem} = this.props
        return (
            <div>
                <div className="container">
                    <div className="col-md-5">
                        {match.path.indexOf('add') > 0 && (
                            <div>
                                <h2>Add new Product</h2>
                                <ProductForm onProductSubmit={async () => {
                                    await productCreate(formValues);
                                    this.props.history.push('/product')
                                }
                                }/>
                            </div>

                        )}
                        {match.path.indexOf('edit') > 0 && (
                            <div>
                                <h2>Update product</h2>

                                <ProductForm onProductSubmit={async () => {
                                    await productUpdate(productItem.id, formValues)
                                    this.props.history.push('/product')
                                }}/>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps({form, products, categories}) {
    return {
        formValues: form.ProductForm
            ? form.ProductForm.values
            : null,
        products,
        productItem: products.productItem,
        categories
    }
}

export default connect(mapStateToProps, {categoriesFetch, productCreate, productUpdate, getOne})(ProductEdit)
