import React from 'react';
import {Link} from "react-router-dom";

class CustomerList extends React.Component {
    constructor(props) {
        super(props);
        this.customers = JSON.parse(localStorage.getItem('cliente')) ?? [];
    }


    render() {
        return (
            <div>
                <Link to="/clientes/adicionar">
                    <button className="add-button">Adicionar</button>
                </Link>

                <ul>
                    {this.customers.map((customer) => (
                        <li>
                            {customer.name} - {customer.email}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}


export default CustomerList;

