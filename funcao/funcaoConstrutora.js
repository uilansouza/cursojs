function Carro (velocidademaxima = 200, delta = 5 ){
    //atributo provado
    let velocidadeAtual = 0

    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidademaxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidademaxima
        }
    }

    //metodo Publico
    this.getvelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
//console.log(uno.getvelocidadeAtual())
const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getvelocidadeAtual())