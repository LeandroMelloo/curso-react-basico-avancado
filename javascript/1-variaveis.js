// Gerenciamento de escopo de uma variável, faz a diferença do var para o let
var numero1 = 5

console.log(numero1) // 5

// Permite que modifique uma variável
let numero2 = 3
console.log(numero2) // 3
numero2 += 2
console.log(numero2) // 5

// Não permite que modifique uma variável
const numero3 = 6
console.log(numero3) // 6