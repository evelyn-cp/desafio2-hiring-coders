import '../customers/addCustomer.css';

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
            
            <div className="div-cadastro">
                <h2>Cadastrar Cliente</h2>
                <form className="form-cadastro" onSubmit={this.save}>
                    <label>Nome completo</label>
                    <input value={this.state.name} onChange={this.inputChange} name="name" type="text" placeholder="Nome" autocomplete required/>
                    <label>CPF (somente números)</label>
                    <input value={this.state.cpf} onChange={this.inputChange} name="cpf" type="text" placeholder="CPF" pattern="\d*" minlength="11" maxlength="11" autocomplete required/>
                    <label>E-mail</label>
                    <input value={this.state.email} onChange={this.inputChange} name="email" type="email" placeholder="E-mail" autocomplete required/>
                    <label>Telefone (somente números)</label>
                    <input value={this.state.phone} onChange={this.inputChange} name="phone" type="text" placeholder="Telefone" pattern="\d*" minlength="11" maxlength="11" autocomplete required />
                    <label>Endereço</label>
                    <input value={this.state.place} onChange={this.inputChange} name="place" type="text" placeholder="Endereço" autocomplete required/>
                    <button className="cadastrar-btn"type="submit">Cadastrar</button>
                </form>
            </div>
        );
    }
}

export default withRouter(CustomerAdd);