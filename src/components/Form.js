import React, { Component } from "react";

class Form extends Component {
    render() {
        return (
            <form className="ui form">
                <div className="fields">
                    <div className="four wide field">
                        <label>Nome</label>
                        <input type="text" name="firstname" placeholder="nome" />
                    </div>
                    <div className="four wide field">
                        <label>Sobrenome</label>
                        <input type="text" name="lastname" placeholder="sobreonome" />
                    </div>
                    <div className="four wide field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="delcinha@gmail.com" />
                    </div>
                    <div className="four wide field">
                       <button className="ui primary button submit-button"> Salvar </button>
                    </div>
                </div>
            </form>
        );
    }
}
export default Form;