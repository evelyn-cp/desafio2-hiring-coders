import React from 'react';
import {Link} from "react-router-dom";
import '../products/listProducts.css'

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.products = JSON.parse(localStorage.getItem('produto')) ?? [];
    }


    render() {
        return (
            <div className="produtos">
                <Link to="/produtos/adicionar">
                    <button className="add-button">Adicionar Novo Produto</button>
                </Link>

                <h2>Lista de Produtos Cadastrados</h2>
                
                <div className="div-table">
                    <table id="product-table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Preço</th>
                                <th>Estoque</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.products.map((product) => (
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>
        );
    }
}


export default ProductList;