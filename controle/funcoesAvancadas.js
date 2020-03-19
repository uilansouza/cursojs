//Criar função de forma literal
function fun1(){}

//Armazenar em uma variavel
const fun2 = function (){}

//Armazenar em um array
const array = [function (a,b){return a + b }, fun1, fun2]
console.log(array[0],(2,3))

//Armazenar em um atributo de objeto

const obj = {}
obj.falar = function(x ){return `Opa ${x}`}
console.log(obj.falar("Alex"))

//Passar função para como param

function run (fun){
    fun()
}

run(function(){console.log("Executando...")})

//uma função pode retornar/conter

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)

const cincoMais = soma(2,3)

cincoMais(4)