//Arquivo JavaScript para fun��es

window.onload = () => {
    let button = document.querySelector("#btn");

    // Ao cliclar o bot�o, chama a fun��o
    button.addEventListener("click", domath);
};

function domath() {

    /* Pegando o valor entrado nas caixas de texto
     O valor entrado � do  tipo string, precisa transformar*/ 
    let a = parseInt(document
        .querySelector("#altura").value);

    let m = parseInt(document
        .querySelector("#massa").value);

    let result = document.querySelector("#result");

    // Checando se o valor � v�lido
    if (a === "" || isNaN(a))
        result.innerHTML = "Preencha um valor v�lido para a altura!";

    else if (m === "" || isNaN(m))
        result.innerHTML = "Preencha um valor v�lido para a massa!";

    // Se ambos resultados s�o v�lidos
    else {

        // C�lculo do imc e fixando o valor para duas casas d�cimais
        let imc = (m / ((a * a)
            / 10000)).toFixed(2);

        // Retornando o valor do imc e sua condi��o
        if (imc < 18.6) result.innerHTML =
            `Abaixo do peso : <span>${imc}</span>`;

        else if (imc >= 18.6 && imc < 24.9)
            result.innerHTML =
                `Normal : <span>${imc}</span>`;

        else result.innerHTML =
            `Acima do peso : <span>${imc}</span>`;
    }
}
