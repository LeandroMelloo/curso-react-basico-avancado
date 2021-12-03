import React from 'react';
import './App.css';

import Comentario from './components/Comentario'

function App() {
  return (
    <div className="App">
      <h1>Meu projeto</h1>
      <Comentario nome="Leandro" email="leandro@mail.com" data={new Date(2021, 12, 2)}>
        Olá, Tudo bem?
      </Comentario>

      <Comentario nome="Luciana" email="luciana@mail.com" data={new Date(2021, 12, 2)}>
        Olá, Tudo bem?
      </Comentario>

      <Comentario nome="Pedro" email="pedro@mail.com" data={new Date(2021, 12, 2)}>
        Olá, Tudo bem?
      </Comentario>

      <Comentario nome="Beatriz" email="beatriz@mail.com" data={new Date(2021, 12, 2)}>
        Olá, Tudo bem?
      </Comentario>
    </div>
  );
}

export default App;
