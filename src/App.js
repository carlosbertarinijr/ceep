import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/index';
import ListaDeNotas from "./components/ListaDeNotas/index";
import "./assets/App.css"
import './assets/index.css';
class App extends Component {
  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro />
        <ListaDeNotas />
      </section> 
    );
  }
}
export default App;
