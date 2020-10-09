import React, { Component } from 'react';
import "./estilo.css"

class ListaDeCategorias extends Component {
    constructor() {
        super();
        this.state = {
            categorias:[]
        }
    }
    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    } 
    _novasCategorias(categorias) {
        this.setState({...this.state,categorias})
    }
    _handleEnventoInput(e) {
        if (e.key === "Enter") {
            let valorCategoria = e.target.value
            this.props.adicionarCategoria(valorCategoria)
        }
    }
    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {
                        this.state.categorias.map((categoria, index) => {
                            return <li key={index} className="lista-categorias_item">
                                {categoria}
                            </li>
                        })
                    }
                </ul>
                <input
                    type="text"
                    placeholder='Adicionar categoria'
                    className="lista-categorias_input"
                    onKeyUp={this._handleEnventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;