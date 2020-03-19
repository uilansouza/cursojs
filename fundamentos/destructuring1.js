const pessoa = {
    nome:'Ana',
    idade:5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000

    }
}

const {nome, idade} = pessoa
console.log(nome, idade)
const {nome: n, idade: i, coisa = true} = pessoa
console.log(coisa)