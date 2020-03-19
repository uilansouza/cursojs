const soma = function (x, y){
    return x + y;
}

const imprimiResultado = function(a, b, operacao = soma){
    console.log(operacao(a,b))
}

imprimiResultado(3,4);
imprimiResultado(3,4, soma)
imprimiResultado(3,4, function(x, y){
return x-y
});
imprimiResultado(3,4, (x,y)=>x*y);