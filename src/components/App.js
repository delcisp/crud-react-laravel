import Form from "./Form";
import React, { Component } from "react";
import CustomerList from "./CustomerList";
import "./app.css";
import axios from "axios";
import Loader from "./Loader";

class App extends Component {
    state = {
        customers: [], 
        loader: false,
        url: "http://localhost/laravel-rest-api/public/api/customers"
    };

    getCustomers = async () => {
            this.setState({loader: true });
            const response = await axios.get(this.state.url);
            this.setState({ customers: response.data, loader: false });
    }
    
    componentDidMount() {
        this.getCustomers();
    }

    deleteCustomer = async id => {
        this.setState({loader:true });
      await axios.delete(`${this.state.url}/${id}`);

      this.getCustomers();
    };

    onDelete = (id) => {
        this.deleteCustomer(id);
    }

    render() {
        return (
        <div>
            <div className="ui fixed inverted menu">
            <div className="ui container">
                <a href="/#" className="header item"> 
                REACT JS CRUD COM LARAVEL API </a>
            </div>
            </div>
            <div className="ui main container">
                <Form/>
                {this.state.loader ? <Loader/> : ""}
                <CustomerList customers={this.state.customers} onDelete={this.onDelete} />
            </div>
        </div>
            )
    }
}
export default App;