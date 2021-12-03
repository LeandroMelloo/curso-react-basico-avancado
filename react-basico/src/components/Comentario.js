import React from 'react';
import './Comentario.css'

/* const ComentarioComRetorno = () => {
    const num1 = 4;
    const num2 = 5;
    return (
        <div className="Comentario">
            <div>João:</div>
            <div>Olá, tudo bem? {num1 + num2}</div>
        </div>
    )
}; */

// Stateless Components ou Componentes Burros/Sem Estado
const Comentario = props => (
    <div className="Comentario">
        <h2>{props.nome}</h2>
        <p>{props.email}</p>
        <p>{props.children}</p>
        <p>{props.data.toString()}</p>
    </div>
);

export default Comentario;