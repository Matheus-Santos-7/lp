// OBJETIVO PRINCIPAL - quando clicar na seta para avançar temos que esconder todas as imagens e mostrar a póxima imagem.

//     a imagem atual começa em 0 porque é a primeira imagem, assim que for clicado ao avançar eu preciso adicionar mais 1 ao contador de imagens para poder saber que agora eu vou mostrar a proxima imagem

//     - esconder todas as imagens
//         pegar todas as imagens usando o DOM e remover a classe mostrar

//     - mostrar a próxima imagem
//         pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela

const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

function esconder () {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove("mostrar");
    });
}

function mostrar () {
    imagensPainel[imagemAtual].classList.add("mostrar");
}

setaAvancar.addEventListener("click", function () {

    const totalDeImagens = imagensPainel.length - 1;

    // teste se o contador da imagemAtual é igual ao total de imagens

    if (imagemAtual === totalDeImagens) {
        return;
    }

    imagemAtual++;

    esconder();

    mostrar();

});

setaVoltar.addEventListener("click", function () {

    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconder();

    mostrar();

});
