class Pessoa{

    constructor(pessoa){
        this.Pessoa = pessoa
    }

    falar(){
        console.log(`Meu nome é ${this.Pessoa}` )
    }

}
const p1 = new Pessoa("Joao")
p1.falar()

const criarPessoa = nome => {
    return {falar:() =>console.log(`Meu nome é ${nome}`)}}

const p2 = criarPessoa("Juca")
p2.falar()