import {Component} from "react";
import {Col, Pagination, Row} from "react-bootstrap";

export class PaginationComponent extends Component {

    gotToPage = (page) => {
        this.props.paginate(page)
    }

    render() {
        const {currentPage, totalElements} = this.props
        return <Row className="text-center">
            <Col md={12}>
                <center>
                    <Pagination className="text-center">
                        {currentPage > 0 && <Pagination.Prev onClick={e => this.gotToPage(currentPage - 1)}/>}
                        <Pagination.Item onClick={e => this.gotToPage(0)}
                                         active={currentPage === 0}>1</Pagination.Item>
                        {currentPage !== 0 && <Pagination.Ellipsis/>}
                        {currentPage !== 0 &&
                        <Pagination.Item onClick={e => this.gotToPage(currentPage)}
                                         active={currentPage !== 0}>{currentPage + 1}</Pagination.Item>}
                        {currentPage + 1 !== totalElements &&
                        <Pagination.Ellipsis/>
                        }
                        {currentPage + 1 !== totalElements &&
                        <Pagination.Item
                            onClick={e => this.gotToPage(totalElements - 1)}>{totalElements}</Pagination.Item>}
                        {currentPage + 1 !== totalElements &&
                        <Pagination.Next onClick={e => this.gotToPage(currentPage + 1)}/>}
                    </Pagination>
                </center>
            </Col>
        </Row>
    }
}

export default PaginationComponent