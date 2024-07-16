let listaDeNumerosSorteados = [];
let numerolimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

let titulo = document.querySelector("h1");
titulo.innerHTML = " jogo do numero secreto";

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha um numero entre 1 a 10";

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Você acertou!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.getElementById("chutar").setAttribute("disabled", true);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", `O número secreto é menor que ${chute}`);
      //alert("o nemuero numero secreto é menor");
    } else {
      // alert("o numero secreto é maior");
      exibirTextoNaTela("p", `O número secreto é maior que ${chute}`);
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numerolimite + 1);
  let quantidadeDeelementosNalista = listaDeNumerosSorteados.length;

  if (quantidadeDeelementosNalista == 10) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function novoJogo() {
  tentativas = 1;
  exibirMensagemInicial();
  numeroSecreto = gerarNumeroAleatorio();
  document.getElementById("reiniciar").setAttribute("disabled", true);
  document.getElementById("chutar").removeAttribute("disabled");
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}
