import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {Component} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import ProductList from "./containers/product/ProductList";
import ProductEdit from "./containers/product/ProductEdit";
import CategoryList from "./containers/category/CategoryList";
import CategoryEdit from "./containers/category/CategoryEdit";


class App extends Component {


    render() {
        return (
            <div>
                <Router>
                    <Container>
                        <nav className="navbar navbar-expand navbar-brand">
                            <ul className="navbar-nav">
                                <li>
                                    <Link className="nav-link" to="/product">Products</Link>
                                </li>
                                <li><Link className="nav-link" to="/category">Categories</Link></li>
                            </ul>
                        </nav>
                    </Container>
                    <div>
                        <Switch>
                            <Route exact path="/" component={ProductList}/>
                            <Route exact path="/product" component={ProductList}/>
                            <Route exact path="/product/add" component={ProductEdit}/>
                            <Route exact path="/product/edit/:id" component={ProductEdit}/>
                            <Route exact path="/category" component={CategoryList}/>
                            <Route exact path="/category/add" component={CategoryEdit}/>
                            <Route exact path="/category/edit/:id" component={CategoryEdit}/>
                        </Switch>
                    </div>
                </Router>

            </div>
        );
    }
}

export default App;
