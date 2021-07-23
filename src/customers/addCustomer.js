import React, { useState } from "react";
import { withRouter } from "react-router-dom";

class CustomerAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            cpf: '',
            email: '',
            phone: '',
            place: ''
        }
        this.inputChange = this.inputChange.bind(this);
        this.save = this.save.bind(this);
    }

    inputChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    save = (event) => {
        event.preventDefault();

        let cliente = JSON.parse(localStorage.getItem('cliente')) ?? [];
        cliente.push(this.state);
        localStorage.setItem('cliente', JSON.stringify(cliente));

        this.props.history.push('/clientes');

    }



    render () {
        return (
            <div>
                <form className="form-cadastro" onSubmit={this.save}>
                    <input value={this.state.name} onChange={this.inputChange} name="name" type="text" placeholder="Nome Completo" autocomplete />
                    <input value={this.state.cpf} onChange={this.inputChange} name="cpf" type="text" placeholder="CPF" autocomplete />
                    <input value={this.state.email} onChange={this.inputChange} name="email" type="email" placeholder="E-mail" autocomplete />
                    <input value={this.state.phone} onChange={this.inputChange} name="phone" type="text" placeholder="Telefone" autocomplete />
                    <input value={this.state.place} onChange={this.inputChange} name="place" type="text" placeholder="Endereço" autocomplete />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );
    }
}

export default withRouter(CustomerAdd);