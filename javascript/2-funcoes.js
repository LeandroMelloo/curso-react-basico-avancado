// Função sem argumentos
function ola() {
    return 'Olá!'
}
console.log(ola())

// Função com argumentos
function olaPessoa(nome) {
    return `Olá ${nome}!`
}
console.log(olaPessoa('Leandro'))

// Arrow Functions sem argumentos
const ola2 = () => {
    return 'Olá Novamente!'
}
console.log(ola2())

// Arrow Functions com argumentos
const olaPessoa2 = (nome, idade) => {
    return `Olá Novamente ${nome}, sua idade é ${idade} anos!`
}
console.log(olaPessoa2('Leandro', 36))

// // Arrow Functions com 1 argumento, com retorno direto
const olaPessoa3 = nome => `Olá Novamente ${nome}!`
console.log(olaPessoa3('Leandro'))