import React, { Component } from 'react';
import './App.css';

import Comentario from './components/Comentario'

class App extends Component {
  state = {
    comentarios: [
      {
        nome: 'Leandro Mello',
        email: 'leandro@mail.com',
        data: new Date(2021, 12, 2, 21, 6, 23),
        mensagem: 'Olá, tudo bem?'
      },
      {
        nome: 'Luciana',
        email: 'luciana@mail.com',
        data: new Date(2021, 12, 2, 18, 9, 23),
        mensagem: 'Olá, tudo bem sim....'
      }
      ,
      {
        nome: 'Pedro Henrique',
        email: 'pedrohenrique@mail.com',
        data: new Date(2021, 12, 2, 21, 34, 23),
        mensagem: 'Olá, tudo bem sim....'
      },
      {
        nome: 'Beatriz',
        email: 'beatriz@mail.com',
        data: new Date(2021, 12, 2, 7, 9, 23),
        mensagem: 'Olá, tudo bem sim....'
      }
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  } // Stateful Components ou Componentes Inteligentes/Com Estado

  adicionarComentario = evento => {
    evento.preventDefault(); // Anulando um evento em Javascript
    const novoComentario = { ...this.state.novoComentario, data: new Date() } // Fazendo uma cópia do elemento novoComentario e adicionando uma data
    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: {
        nome: '',
        email: '',
        mensagem: ''
      } // Limpando o Formulario depois da inserção dos valores
    }) // Fazendo uma cópia do elemento comentarios e adicionando um novoComentario
  } // Função para adicionar comentarios, através do botão "Adicionar"

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario)

    this.setState({ comentarios: lista })
  }

  digitacao = evento => {
    const { name, value } = evento.target // utilizando desestruturação
    this.setState({ novoComentario: { ...this.state.novoComentario, [name]: value }}) // pegando o name == nome, email, messagem e passando o valor digitado no value
  } // Função para inserir valores no formulario, depois de digitado

  // Renderizando o HTML
  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>

        {this.state.comentarios.map((comentario, indice) => (
          <Comentario
            key={indice}
            nome={comentario.nome}
            email={comentario.email}
            data={comentario.data}
            onRemove={this.removerComentario.bind(this, comentario)} // bind => faz a referencia para outro componente
          >
            {comentario.mensagem}
          </Comentario>
        ))}
 
        <form method='post' onSubmit={this.adicionarComentario} className='Novo-Comentario'>
          <h2>Adicionar Comentário</h2>
          <div>
            <input
              type='text'
              name='nome'
              value={this.state.novoComentario.nome}
              onChange={this.digitacao}
              required
              placeholder='Digite seu nome'
            />
          </div>
          <div>
            <input
              type='email'
              name='email'
              value={this.state.novoComentario.email}
              onChange={this.digitacao}
              required
              placeholder='Digite seu email'
            />
          </div>
          <div>
            <textarea
              name='mensagem'
              value={this.state.novoComentario.mensagem}
              onChange={this.digitacao}
              required
              rows='4'
            />
          </div>
          <button onClick={this.adicionarComentario}>Adicionar</button>
        </form>
      </div>
    );
  }
}

export default App;
