import React, {Component} from 'react'
import {connect} from 'react-redux'
import {categoryCreate, categoryUpdate, getOne} from "../../actions/CategoryActions";
import CategoryForm from "../../components/categories/CategoryForm";

class CategoryEdit extends Component {

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.getOne(this.props.match.params.id)
        }
    }


    render() {
        const {formValues, match, categories, categoryCreate, categoryUpdate, categoryItem} = this.props
        return (
            <div>
                <div className="container">
                    <div className="col-md-5">
                        {match.path.indexOf('add') > 0 && (
                            <div>
                                <h2>Add new category</h2>
                                <CategoryForm onCategorySubmit={async () => {
                                    await categoryCreate(formValues);
                                    this.props.history.push('/category')

                                }
                                }/>
                            </div>

                        )}
                        {match.path.indexOf('edit') > 0 && (
                            <div>
                                <h2>Update category</h2>

                                <CategoryForm onCategorySubmit={() => {
                                    categoryUpdate(categoryItem.id, formValues)
                                    this.props.history.push('/category')

                                }}/>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps({form, categories}) {
    return {
        formValues: form.CategoryForm
            ? form.CategoryForm.values
            : null,
        categoryItem: categories.categoryItem,
        categories
    }
}

export default connect(mapStateToProps, {categoryCreate, categoryUpdate, getOne})(CategoryEdit)
