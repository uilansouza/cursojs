function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0

while(opcao !=-1){
    opcao = getInteiroAleatorioEntre(-1, 10)
   // console.log(`Opcao escolhida ${opcao}.`)
}
//console.log("Até a pŕoxima ")

const valor =[8,7,3,88,25,8.8,2.3,25]

for (var i=0;  i < valor.length; i++){
    console.log(`valor é  ${valor[i]}`)
}