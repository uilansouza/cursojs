function criarProduto(nome, estoque, preco){
   produto = { nome,
    estoque,
    preco
    }
    console.log(produto)
    return produto
}

mouse = criarProduto("Mouse", 25, 35)
cadeira = criarProduto("Cadeira", 37, 200)

