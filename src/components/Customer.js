import React, { Component } from "react";

class Customer extends Component {
    onDelete = () => {
       // console.log("customer on delete");
       this.props.onDelete(this.props.customer.id);
    }
    render() {
        const {id, firstname, lastname, email} = this.props.customer;
        return (
            <tr>
            <td style={{ textAlign: "center"}}>{id}</td>
            <td>{`${firstname} ${lastname}`}</td>
            <td>{email}</td>
            <td>
                <button className="mini ui blue button">Edit</button>
                <button className="mini ui red button" onClick={this.onDelete} >Delete</button>

            </td>    
            </tr>
            )
    }
}
export default Customer;