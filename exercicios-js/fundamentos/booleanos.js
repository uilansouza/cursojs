let isAtivo = false;

console.log(isAtivo);

isAtivo = true;

console.log(isAtivo);

isAtivo = 1;

console.log(!!isAtivo);// converter o valor para lógico true ou false

console.log('Verdadeiros....');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);

console.log('Falsos..');
console.log(!!'');//string vazia
console.log(!!0);

console.log(!!NaN);

console.log(!!undefined);


let nome ='Lucas';
console.log(nome || 'Desconhecido');//Caso não exista valor na variavel ele imprime "desconhecido"




