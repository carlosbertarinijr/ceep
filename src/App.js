import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/index';
import ListaDeNotas from "./components/ListaDeNotas/index";
import ListaDeCategorias from "./components/ListaDeCategorias/index";
import "./assets/App.css"
import './assets/index.css';
class App extends Component {
  constructor() {
    super()

    this.state = {
      notas: [],
      categorias: ['Games']
    }
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }
  
  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1)
    this.setState({ notas: arrayNotas })
  }
  
  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria ]
    const novoEstado = {...this.state, categorias:novoArrayCategorias}
    this.setState(novoEstado)
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)} 
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
          <ListaDeNotas
            notas={this.state.notas}
            apagarNota={this.deletarNota.bind(this)}
          />
        </main>

      </section>
    );
  }
}
export default App;
