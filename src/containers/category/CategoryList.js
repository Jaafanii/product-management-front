import {Component} from "react";
import {categoriesFetch, categoryDelete} from "../../actions/CategoryActions";
import {connect} from 'react-redux'
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import PaginationComponent from "../../components/common/PaginationComponent";

class CategoryList extends Component {

    componentWillMount() {
        this.props.categoriesFetch()
    }

    paginate = (page) => {
        this.props.categoriesFetch(page)
    }

    render() {
        const {categories, currentPage} = this.props
        return (
            <Container>
                <Row>
                    <Col md={12} style={{margin: '15px 0'}}>
                        <Button variant="success" style={{float: 'right'}}
                                onClick={(e) => this.props.history.push('category/add/')
                                }>New Category</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>code</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {categories?.list?.map(
                                category => (
                                    <tr key={category.id}>
                                        <td>{category.id}</td>
                                        <td>{category.name}</td>
                                        <td>{category.description}</td>
                                        <td>
                                            <Row>
                                                <Col md={6}><i className="bi bi-pencil-square" onClick={() => {
                                                    this.props.history.push('/category/edit/' + category.id)
                                                }}></i></Col>
                                                <Col md={6}><i className="bi bi-trash-fill" onClick={async () => {
                                                    if (window.confirm("Are you sure want to delete the category number " + category.id)) {
                                                        await this.props.categoryDelete(category.id)
                                                        this.setState(
                                                            {reload: true},
                                                            () => this.setState({reload: false})
                                                        )
                                                    }
                                                }}></i></Col>
                                            </Row>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </Table>
                    </Col>
                </Row>
                {categories?.totalElements > 1 &&
                <PaginationComponent paginate={this.paginate} currentPage={currentPage}
                                     totalElements={categories?.totalElements}/>}
            </Container>
        )
    }
}

function mapStateToProps({categories}) {
    return {
        categories: categories.categoryPage,
        currentPage: categories.currentPage
    }
}


export default connect(mapStateToProps, {categoriesFetch, categoryDelete})(CategoryList)