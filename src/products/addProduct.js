import '../products/addProducts.css';
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

class ProductAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            price: '',
            stock: ''
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

        let produto = JSON.parse(localStorage.getItem('produto')) ?? [];
        produto.push(this.state);
        localStorage.setItem('produto', JSON.stringify(produto));
        this.props.history.push('/produtos');

    }


    render () {
        return (
            <div>
                <h2>Cadastrar Produto</h2>
                <form className="form-cadastro" onSubmit={this.save}>
                    <input value={this.state.name} onChange={this.inputChange} name="name" type="text" placeholder="Nome do Produto" autocomplete />
                    <input value={this.state.description} onChange={this.inputChange} name="description" type="text" placeholder="Descrição do Produto" autocomplete />
                    <input value={this.state.price} onChange={this.inputChange} name="price" type="text" placeholder="Preço do Produto" autocomplete />
                    <input value={this.state.stock} onChange={this.inputChange} name="stock" type="text" placeholder="Quantidade Estoque" autocomplete />
                    <button className="cadastrar-btn" type="submit">Cadastrar Produto</button>
                </form>
            </div>
        );
    }
}

export default withRouter(ProductAdd);