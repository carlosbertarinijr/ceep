import React, { Component } from 'react';
import "./estilo.css";

class FormularioCadastro extends Component {
    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
        this.categoria = "-"
        this.state = {categorias: []}
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }
    _novasCategorias(categorias) {
        this.setState({...this.state,categorias})
    }
    _handleMudancaCategoria(e) {
        e.stopPropagation();
        this.categoria = e.target.value
    }
    _handleMudancaTitulo(e) {
        e.stopPropagation();
        this.titulo = e.target.value
    }
    _handleMudancaTexto(e) {
        e.stopPropagation();
        this.texto = e.target.value
    }
    _criarNota(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria);
    }
    render() {
        return (
            <form className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}
            >

                <select
                    className="form-cadastro_input"
                    onChange={this._handleMudancaCategoria.bind(this)}

                >
                    <option defaultChecked={true}>-</option>
                    {
                        this.state.categorias.map((categoria, index) => {
                            return <option key={index}>{categoria}</option>
                        })
                    }
                </select>
                <input
                    type="text"
                    placeholder='Título'
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder='Escreva sua nota..'
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
            </form>
        )
    }
}
export default FormularioCadastro