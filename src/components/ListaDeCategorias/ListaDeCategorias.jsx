import React, { Component } from 'react';
import "./estilo.css"

class ListaDeCategorias extends Component {
    _handleEnventoInput(e) {
        if (e.key === "Enter") {
            let valorCategoria = e.target.value
            this.props.adicionarCategoria(valorCategoria)
        }
    }
    render() {
        return (
            <section className="lista-categorias">
                <ul>
                    {
                        this.props.categorias.map((categoria, index) => {
                            return <li key={index}>{categoria}</li>
                        })
                    }
                </ul>
                <input
                    type="text"
                    placeholder='Adicionar categoria'
                    onKeyUp={this._handleEnventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;