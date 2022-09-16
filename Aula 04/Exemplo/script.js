const Fruta =["Abacate","Banana","Uva","Laranja"];
const preço = [5.00,12.00,8.00,6.00]; 

const elemTabelaFruta = document.getElementById("tabelaFruta");

let indice = 0;

while ( indice <= 2){
    const Fruta= Fruta[indice];
    const preço = preço[indice];

    elemTabelaFruta.innerHTML +=
    "<tr>"+
    "<td>"+
    Fruta +
    "</td>" +
    "<td>" +
    preço +
    "</td>"+
    "</tr>";

  indice++;
}

