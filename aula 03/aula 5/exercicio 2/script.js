function clicarverificar() {
    debugger
    const tipoSangueDoador = (document.getElementById("tipoSanguedoDoador").value);

    const tipoSangueRecebedor = (document.getElementById("tipoSangueRecebedor").value);

    const spanResultado = document.getElementById("spanValido");
    spanResultado.textContent = verificacaoCompatibilidade(tipoSangueDoador, tipoSangueRecebedor);
}

function verificacaoCompatibilidade(tipoSangueDoador, tipoSangueRecebedor) {

    switch (tipoSangueDoador) {
        case "A":
            switch (tipoSangueRecebedor) {
                case "A":
                    return "É compativel";
                case "AB":
                    return "É compativel";
            }
            break;
        case "B":
            switch (tipoSangueRecebedor) {
                case "B":
                    return "É compativel";
                case "AB":
                    return "É compativel";
            }
            break;
        case "AB":
            switch (tipoSangueRecebedor) {
                case "AB":
                    return "É compaivel";
                case "AB":
                    return "É compaivel";
            }
            break;
        case "O":
            switch (tipoSangueRecebedor) {
                case "A":
                    return "É compativel";
                case "B":
                    return "É compativel";
                case "AB":
                    return "É compativel";
                case "O":
                    return "É compativel";
            }
            break;

    }
    return "não é invalido"
}
