import React, { Component } from "react";
import Customer from "./Customer";

class CustomerList extends Component {
    onDelete = (id) => {
     this.props.onDelete(id);
        //console.log("customer list", id);
         
};
    render() {
        const customers = this.props.customers;
        return <div className="data">
            <table className="ui celled table">
                <thead>
                    <th style={{ width: '50px', textAlign: "center"}}>#</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th style={{width: "148px" }} >Açao</th>
                </thead>
                <tbody>
                {customers && customers.map(customer => {
    return <Customer customer={customer} key={customer.id} onDelete={this.onDelete} />;
})}
                </tbody>

            </table>
        </div>
    }
}
export default CustomerList;