const mPessoas = [
   {
       nome: "Alberto",
       idade:58,
   },
{
    nome: "cleonilsom",
    idade: 28,
},
  { nome: "Antonia",
   idade: 26,
}
]


const elemTabelapessoa = document.getElementById("tabelaPessoa");

let indice = 0;

while ( indice  <=  mPessoas.length){
    const pessoa = mPessoas[indice];

    const linhaTabela=
    escreveTd(pessoa.nome)+
    escreveTd(pessoa.idade);

    elemTabelapessoa.innerHTML += escreveTr(linhaTabela);

    indice++;
}
function escreveTr(valorDalinha){
    return "<tr>" + valorDalinha + "</tr>";
}
function escreveTd(valorCelula){
    return "<td>" + valorCelula + "</td>";

}


