function rand([min =0, max =100]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max -min) + min;
    return Math.floor(valor);
}
console.log(rand([40,50]));