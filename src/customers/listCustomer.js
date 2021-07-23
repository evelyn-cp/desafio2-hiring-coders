import React from 'react';
import {Link} from "react-router-dom";
import '../customers/listCustomer.css'

class CustomerList extends React.Component {
    constructor(props) {
        super(props);
        this.customers = JSON.parse(localStorage.getItem('cliente')) ?? [];
    }


    render() {
        return (
            <div className="clientes">
                <Link to="/clientes/adicionar">
                    <button className="add-button">Adicionar Novo Cliente</button>
                </Link>

                <h2>Lista de Clientes Cadastrados</h2>
                
                <div className="div-table">
                    <table id="customer-table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>E-mail</th>
                                <th>Telefone</th>
                                <th>Endereço</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.customers.map((customer) => (
                                <tr>
                                    <td>{customer.name}</td>
                                    <td>{customer.cpf}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phone}</td>
                                    <td>{customer.place}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>
        );
    }
}


export default CustomerList;

