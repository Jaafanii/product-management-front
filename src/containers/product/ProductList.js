import {Component} from "react";
import {productDelete, productsFetch} from "../../actions/ProductActions";
import {connect} from 'react-redux'
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import PaginationComponent from "../../components/common/PaginationComponent";

class ProductList extends Component {

    componentWillMount() {
        this.props.productsFetch()
    }

    paginate = (page) => {
        this.props.productsFetch(page)
    }

    render() {
        const {products, currentPage} = this.props
        return (
            <Container>
                <Row>
                    <Col md={12} style={{margin: '15px 0'}}>
                        <Button variant="success" style={{float: 'right'}}
                                onClick={(e) => this.props.history.push('product/add/')
                                }>New Product</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>code</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {products?.list?.map(
                                product => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.category?.name}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            <Row>
                                                <Col md={6}><i className="bi bi-pencil-square" onClick={() => {
                                                    this.props.history.push('/product/edit/' + product.id)
                                                }}></i></Col>
                                                <Col md={6}><i className="bi bi-trash-fill" onClick={async () => {
                                                    if (window.confirm("Are you sure want to delete the product number " + product.id)) {
                                                        await this.props.productDelete(product.id)
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
                {products?.totalElements > 1 && <PaginationComponent paginate={this.paginate} currentPage={currentPage}
                                                                     totalElements={products?.totalElements}/>}
            </Container>
        )
    }
}

function mapStateToProps({products}) {
    return {
        products: products.productPage,
        currentPage: products.currentPage
    }
}


export default connect(mapStateToProps, {productsFetch, productDelete})(ProductList)