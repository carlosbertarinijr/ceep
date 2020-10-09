import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/index';
import ListaDeNotas from "./components/ListaDeNotas/index";
import ListaDeCategorias from "./components/ListaDeCategorias/index";
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';
import "./assets/App.css"
import './assets/index.css';

class App extends Component {
  constructor() {
    super()
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias.categorias}
          criarNota={this.notas.criarNota} 
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          />
          <ListaDeNotas
            notas={this.notas.notas}
            apagarNota={this.notas.apagarNota}
          />
        </main>

      </section>
    );
  }
}
export default App;
