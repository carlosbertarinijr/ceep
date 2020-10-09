import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/index';
import ListaDeNotas from "./components/ListaDeNotas/index";
import "./assets/App.css"
import './assets/index.css';
class App extends Component {
  criarNota(titulo, texto) {
    console.log(`uma nova nota criada ${titulo} ${texto}`)
  }
  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota}/>
        <ListaDeNotas />
      </section> 
    );
  }
}
export default App;
