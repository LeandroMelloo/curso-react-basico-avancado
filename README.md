# curso_react_basico_avancado
Curso React do básico ao avançado

# Como criar um projeto no React
npx create-react-app react-basico

# Comando do React
# npm start
    Starts the development server.

# npm run build
    Bundles the app into static files for production.

# npm test
    Starts the test runner.

# npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

# Como iniciar a aplicação
  cd react-basico
  npm start

# Comentarios
- Propriedades no React podem ser alteradas, somente com o Stateful Components ou Hooks
- Utilizamos o this para referenciar uma função dentro de uma classe no React
- React trabalha com estado através do DOM, ele mesmo atualiza a DOM quando necessario
- Ciclo de vida de um componente e dividida em três partes: montagem, atualização, desmontagem
- montagem -> constructor -> getDerivedStateFromProps -> render -> React Atualiza o DOM e referências -> componentDidMount
- Atualização -> novas props ou setState() ou forceUpdate() -> getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> React Atualiza o DOM e referências -> componentDidMount
- Desmontagem -> componentWillUnmount
