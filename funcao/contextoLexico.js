const valor = "Global"

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = "Local"
    minhaFuncao()
}

exec()

/* O valor impresso é "Global" pois a função considera onde ela foi
declarada e não ela foi chamada
*/
