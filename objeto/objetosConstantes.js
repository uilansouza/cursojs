const pessoa = {nome:"Joao"}

pessoa.nome = 'pedro' 

console.log(pessoa)
Object.freeze(pessoa)

pessoa.nome="Marcos"
console.log(pessoa)
const pessoaConstante = Object.freeze({nome:"Larissa"})
console.log(pessoaConstante)
