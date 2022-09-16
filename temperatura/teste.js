let text = 0
let vetorTemp = [20, 23, 30, 18, 25, 40]
function adicionaTemp(Temp) {
    vetorTemp[vetorTemp.length] = Temp
}
adicionaTemp(50)
adicionaTemp(20)
//console.log(vetorTemp.length)

function estanovetor(valor) {

    for (let i = 0; i < vetorTemp.length; i++) {
        // console.log(i)

        if (valor == vetorTemp[i]) {
            return true;
        }


    }
    return false;
}


console.log(estanovetor(99))



function revertervetor(paramvetor) {
    let vetorResposta = [];
    for (let i = paramvetor.length -1 ; i >= 0 ; i--) {
        vetorResposta.push(paramvetor[i]);

        
    }
    return vetorResposta;
}


console.log(revertervetor(vetorTemp));
