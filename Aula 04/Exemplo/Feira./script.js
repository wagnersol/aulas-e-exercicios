let listaDeCompras = [] //cria uma variavel do tipo lista vazia

    function clickAdicionaFruta(){
    const vFruta = document.getElementById("Fruta").value
    const vPreco = parseFloat (document.getElementById("Preco").value);

    const itemFruta =  {fruta:vFruta,preco:vPreco}
    listaDeCompras.push(itemFruta)
    atualizaTabela()
    somaTotal()
    
}  

function atualizaTabela(){

    const tabela = document.getElementById("tabelaFruta")
    tabela.innerHTML = ""

    const tamanhoDaLista = listaDeCompras.length
    
    for(let i = 0;i < tamanhoDaLista;i++){
        let itemNomeFruta = listaDeCompras[i]["fruta"]
        let itemPreco = listaDeCompras[i].preco
        tabela.innerHTML += "<tr><td>" + itemNomeFruta + 
        "</td><td>" + itemPreco + "</td><tr>" 
        

    }
}

function somaTotal(){
    const tamanhoDaLista = listaDeCompras.length;
    const elementoTotal = document.getElementById("tdTotal");


    let total = 0;
    for(let i = 0;i  < tamanhoDaLista;i++){
        const itemLista = listaDeCompras[i];
        total = total + itemLista.preco;

    }
  elementoTotal.textContent = total;
}


