function clicarcalcular() {
    //debugger;
    const valor1 = parseInt(document.getElementById("valor1").value);
    const valor2 = parseInt(document.getElementById("valor2").value);
    const selectorOperacao = document.getElementById("operacao").value;

    const resultado = document.getElementById("resultado");
    resultado.textContent = calcular(valor1, valor2, selectorOperacao);

}
function calcular(valor1, valor2, operacao) {
    if (operacao === "mais") {
        return soma(valor1, valor2);    
    }else if(operacao==="menos"){return subtrair(valor1,valor2);
    }else if(operacao==="vezes"){return vezes(valor1,valor2);
    }else if(operacao==="dividir"){return dividir(valor1,valor2);
}
function dividir(valor1,valor2){
    return valor1/valor2;
}
function multiplicar(valor1,valor2){
    return valor1*valor2;
}
function soma(valor1,valor2){
    return valor1+valor2;
}
function subtrair(valor1,valor2){
    return valor1-valor2;
}
return 0;