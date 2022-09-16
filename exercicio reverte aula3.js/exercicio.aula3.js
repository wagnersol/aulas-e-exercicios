let vetor = [1, 2, 3, 4, 5, 50, 60];

function incluirNaPrimeiraPosicao(valor, vetor) {

    let vetorResposta = [valor];
    for (let i = 0; i < vetor.length; i++) {
        vetorResposta.push(vetor[i])
    }
    return vetorResposta;
}

vetor = incluirNaPrimeiraPosicao(999, vetor);
console.log(vetor);



let vetor = [1, 2, 3, 4, 5, 6, 7]; {

    function incluirNaPosicao(valor, vetor, posicao) {

        let vetorResposta = [];
        for (let i = 0; i < posicao; i++) {
            vetorResposta[vetorResposta.length] = vetor[i];


        }

        vetorResposta[posicao] = valor;
        for (let j = posicao; j < vetor.length; j++) {
            vetorResposta.push[vetorResposta.length] = vetor[j];
        }
        return vetorResposta;

    }

    vetor = incluirNaPosicao(55, vetor, posicao 2);
    console.log(vetor)
}



function incluirNaPosicao(valor, vetor, posicao) {
    for (let i = vetor.length; i > posicao; i--) {
        vetor[i] = vetor[i - 1];
    }
    vetor[posicao] = valor;
    return vetor;
}

v = incluirNaPosicao(55, v, 2);
console.log(v);