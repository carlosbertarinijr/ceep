import React, { Component } from 'react';
import "./estilo.css"
class CardNota extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="card-nota">
                <header>
                    <h3>Título</h3>
                </header>
                <p>Escreva sua nota</p>
                <p></p>
            </section>
        );
    }
}

export default CardNota;