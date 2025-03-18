let listaDeAmigosSorteados = [];
let amigoLimite = 10
letamigoSecreto = gerarAmigoAleatório();
let tentativas: 1;

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMenagemInicial() {
    exibirTextoNaTela ('h1', 'Amigo Secreto');
    exibirTextoNaTela ('p', 'Digite o nome de seus amigos');

}


function gerarAmigoAleatorio() {
    let amigoEscolhido = parseInt(Math.random() * AmigoLimite);
    let quantidadeDeElementoNaLista = listaDeAmigosSorteados.length;

    if (quantidadeDeElementosNaLista == amigoLimite) {
        listaDeAmigosSorteados = [];
    }
    if (listaDeAmigosSorteados.includes(amigoEscolhido)) {
        return gerarAmigoAleatorio();
    } else {
        listaDeAmigosSorteados.push(amigoEScolhido);
        console.log(listaDeAmigosSorteados);
        return amigoEscolhido
    }
}




function adicionaramigo() {
    amigoSecreto = gerarAmigoAleatorio();
    limparCampo ();
    tentativas = 1
    exibirMensagemInicial();
    document.getElementById('amigo'). setAttribute('disabled',true)
}