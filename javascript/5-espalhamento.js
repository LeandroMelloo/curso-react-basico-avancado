const numeros = [1, 2, 3, 4 ]

const novosNumeros = [...numeros, 5] // spread -> fazendo uma cópia de numeros para novosNumeros e adicionando 5

console.log(numeros)
console.log(novosNumeros)

// ----------------------------------- //

const rex = {
    nome: 'Rex'
}

const max = { ...rex, idade: 2, familia: 'Carnívoro' } // spread -> fazendo uma cópia de rex para max e adicionando novos valores
max.nome = 'Max' // atribuindo 'Max'

console.log(rex)
console.log(max)


// ------------------------------------------------------------

const somar = (...numeros) => numeros.reduce((a, b) => a + b) // reduce é como um for, que varre todos os numeros passado por parametro na função somar(), e depois soma

console.log(somar(2, 3, 5, 6, 7, 8))