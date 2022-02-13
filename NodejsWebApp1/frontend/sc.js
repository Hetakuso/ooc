//Arquivo JavaScript para funções

window.onload = () => {
    let button = document.querySelector("#btn");

    // Ao cliclar o botão, chama a função
    button.addEventListener("click", domath);
};

function domath() {

    /* Pegando o valor entrado nas caixas de texto
     O valor entrado é do  tipo string, precisa transformar*/ 
    let a = parseInt(document
        .querySelector("#altura").value);

    let m = parseInt(document
        .querySelector("#massa").value);

    let result = document.querySelector("#result");

    // Checando se o valor é válido
    if (a === "" || isNaN(a))
        result.innerHTML = "Preencha um valor válido para a altura!";

    else if (m === "" || isNaN(m))
        result.innerHTML = "Preencha um valor válido para a massa!";

    // Se ambos resultados são válidos
    else {

        // Cálculo do imc e fixando o valor para duas casas décimais
        let imc = (m / ((a * a)
            / 10000)).toFixed(2);

        // Retornando o valor do imc e sua condição
        if (imc < 18.6) result.innerHTML =
            `Abaixo do peso : <span>${imc}</span>`;

        else if (imc >= 18.6 && imc < 24.9)
            result.innerHTML =
                `Normal : <span>${imc}</span>`;

        else result.innerHTML =
            `Acima do peso : <span>${imc}</span>`;
    }
}
