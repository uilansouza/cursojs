//Array
/*const [a] = [10]
const [n1, ,n3, ,n5, n6 = 0] = [10,7,9,8]
console.log(n1, n3, n5, n6) */

function rand ({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

const obj = {min: 50, max: 40}
console.log(rand(obj))