function tratarErrolancar(erro){

    throw {
        nome:erro.nome,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase()+" !!!");
    }catch(e){
        tratarErrolancar(e)
    }finally{
        console.log("Final--------------------");
    }
}

const obj = {nome : "Roberto"}

imprimirNomeGritado(obj);