class Animal {
    // f = 'Carnívoros'
    construtor(f) {
        this.familia = f
    }

    andar = () => {
        return 'andando...'
    }
}

class Cachorro extends Animal {
    constructor(n, i) {
        super('Carnívoros') // passar argumento pro contrutor pai
        this.nome = n
        this.idade = i
    }
    
    latir = () => {
        return `${this.nome} late assim: au! au!`
    }
}

let rex = new Cachorro('Rex', 2) // Instância da classe animal
console.log(rex)
console.log(rex.latir())
console.log(rex.andar())
console.log(rex.familia)