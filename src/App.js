import './App.css';
import CustomerAdd from './customers/addCustomer';
import CustomerList from './customers/listCustomer';
import ProductAdd from './products/addProduct';
import ProductList from './products/listProducts';
import Imagem2 from './images/img2.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <nav className="navbar">

        <div className="logo">
          <h1> <a href="/">Natury</a></h1>
        </div>

        <div className="menu">
          <ul>

            <li>
              <Link className="linkclientes" to="/clientes">Clientes</Link>
            </li>

            <li>
              <Link className="linkprodutos" to="/produtos">Produtos</Link>
            </li>

          </ul>
        </div>
      </nav>




      <Switch>

        <Route path="/clientes/adicionar">
          <CustomerAdd></CustomerAdd>
        </Route>

        <Route path="/clientes">
          <CustomerList></CustomerList>
        </Route>

        <Route path="/produtos/adicionar">
          <ProductAdd></ProductAdd>
        </Route>

        <Route path="/produtos">
          {/* <ProductList></ProductList> */}
        </Route>

        <Route path="/">
        <main className="container">
        <div className="texto-principal">
          <h2>Sistema para Gestão de Cadastro</h2>
          <p>Clicar no botão "Clientes" para gerenciar o cadastro de clientes.</p>
          <p>Clicar no botão "Produtos" para gerenciar o cadastro de produtos.</p>
        </div>

        <div className="img-principal">
          <img className="img1" src={Imagem2} alt="Natury" />
        </div>
      
      </main>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
