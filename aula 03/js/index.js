//alert('está funcionando!!!>:)');

function cliqueBotao(){
    debugger;
    const lista = document.getElementById("minhalista");

const valoritem= prompt("insira um item na lista ");

lista.innerHTML += adicionaItem (valoritem);

}
    function adicionaItem(valor){
        return "<li>"+valor+"</li>";


}