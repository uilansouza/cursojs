//functon declaration

console.log(soma(3,2)) // da certo pq ja foi carregada a função
console.log(sub(3,2))// da erro porque a função ainda nao existe
comsole.log(mult(3,2))// tanbém da erro pq a função não existe

function soma(x, y){
    return x + y
}

// function expression
const sub = function(x, y){
    return x - y
}

//named function
const mult = function multy(x, y){
    return x + y
}