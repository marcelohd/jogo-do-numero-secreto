let listaDeNumerosSorteados = [];
let maximo = 5
let numeroSecreto = gerarNumeroAleatorio(maximo);
let numeroTentativas = 1;

exibirMensagemInicial()

function exibirMensagemInicial(){
    exibirTextoNaTela("h1","Jogo do número secreto");
    exibirTextoNaTela("p","Escolha um número entre 1 e " + maximo);
}

function verificarChute(){
    let chute = Number(document.querySelector("input").value);

    if(chute == numeroSecreto){

        let palavraTentativa = numeroTentativas > 1 ? "tentativas":"tentativa";

        let mensagemTentativas = `Você descobriu o número secreto ${numeroSecreto} com ${numeroTentativas} ${palavraTentativa}! `;

        exibirTextoNaTela("h1","Acertou");
        exibirTextoNaTela("p",mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela("p","O número secreto é menor!")
        } else {
            exibirTextoNaTela("p","O número secreto é maior!");
        }
        numeroTentativas ++;
        limparCampo();
    }
}

function exibirTextoNaTela( tag, texto ){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.2})
}

function gerarNumeroAleatorio(maximo) {
   let numeroEscolhido = parseInt(Math.random() * maximo + 1);
   let elementosDaLista = listaDeNumerosSorteados.length;
   
   // Para esvaziar a lista se encher
   if(elementosDaLista == maximo){
       listaDeNumerosSorteados = [];
   }
   // Verifica se existe a ocorrencia do numero na lista
   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(maximo);
   } else {
        // adicionando numero gerado na lista
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
   }
 
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio(maximo);
    numeroTentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}

function limparCampo(){
    document.querySelector("input").value = "";
    /*
    chute = document.querySelector("input");
    chute.value = "";
    */
}