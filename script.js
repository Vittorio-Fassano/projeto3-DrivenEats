let prato;
let bebida;
let sobremesa;

let pratoAtivado =  false;
let bebidaAtivado = false;
let sobremesaAtivado = false;

let precoPrato;
let precoBebida;
let precoSobremesa;


function escolherFrango() {
    document.getElementById("frango").style.borderColor = "green";
    document.getElementById("hamburguer").style.borderColor = "white";
    document.getElementById("pizza").style.borderColor = "white";
    prato = "frango";
    pratoAtivado = true;
    precoPrato = 19.9;

    if (pratoAtivado && bebidaAtivado && sobremesaAtivado) {
        botaoAtivado();
    }
}

function escolherHamburguer(){
    document.getElementById("hamburguer").style.borderColor = "green";
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("pizza").style.borderColor = "white";
    prato = "hamburguer";
    pratoAtivado = true;
    precoPrato = 14.9;

    if (pratoAtivado && bebidaAtivado && sobremesaAtivado) {
        botaoAtivado();
    }
}

function escolherPizza(){
    document.getElementById("pizza").style.borderColor = "green";
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("hamburguer").style.borderColor = "white";
    prato = "pizza";
    pratoAtivado = true;
    precoPrato = 24.9;

    if (pratoAtivado && bebidaAtivado && sobremesaAtivado) {
        botaoAtivado();
    }
}





function escolherCoca() {
    document.getElementById("coca").style.borderColor = "green";
    document.getElementById("guaraná").style.borderColor = "white";
    document.getElementById("pepsi").style.borderColor = "white";
    bebida = "coca";
    bebidaAtivado = true;
    precoBebida = 4.9;

    if (pratoAtivado && bebidaAtivado && sobremesaAtivado) {
        botaoAtivado();
    }
}

function escolherGuaraná(){
    document.getElementById("guaraná").style.borderColor = "green";
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("pepsi").style.borderColor = "white";
    bebida = "guaraná";
    bebidaAtivado = true;
    precoBebida = 4.9;

    if (pratoAtivado && bebidaAtivado && sobremesaAtivado) {
        botaoAtivado();
    }
}

function escolherPepsi(){
    document.getElementById("pepsi").style.borderColor = "green";
    document.getElementById("coca").style.borderColor = "white";
    document.getElementById("guaraná").style.borderColor = "white";
    bebida = "pepsi";
    bebidaAtivado = true;
    precoBebida = 4.9;

    if (pratoAtivado && bebidaAtivado && sobremesaAtivado) {
        botaoAtivado();
    }
}




function escolherPudim() {
    document.getElementById("pudim").style.borderColor = "green";
    document.getElementById("bolo").style.borderColor = "white";
    document.getElementById("bala").style.borderColor = "white";
    sobremesa = "pudim";
    sobremesaAtivado = true;
    precoSobremesa = 7.9;

    if (pratoAtivado && bebidaAtivado && sobremesaAtivado) {
        botaoAtivado();
    }

}

function escolherBolo(){
    document.getElementById("bolo").style.borderColor = "green";
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("bala").style.borderColor = "white";
    sobremesa = "bolo";
    sobremesaAtivado = true;
    precoSobremesa = 7.9;

    if (pratoAtivado && bebidaAtivado && sobremesaAtivado) {
        botaoAtivado();
    }
}

function escolherBala(){
    document.getElementById("bala").style.borderColor = "green";
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("bolo").style.borderColor = "white";
    sobremesa = "bala";
    sobremesaAtivado = true;
    precoSobremesa = 1.9;

    if (pratoAtivado && bebidaAtivado && sobremesaAtivado) {
        botaoAtivado();
    }
}

function botaoAtivado() {
    document.getElementById("botao").disable=false;
    document.getElementById("botao").style.backgroundColor = "#32B72F";
    document.getElementById("botao").innerHTML = "Fechar pedido";
}


function finalizarPedido() {
    let mensagem;
    let total;
    

    total = precoPrato + precoBebida + precoSobremesa;
    let totalCorrigido = total.toFixed(2);

    mensagem = ("Olá, gostaria de fazer o pedido: " + prato + ", " + bebida + " e " + sobremesa + ". Total: R$" + totalCorrigido);

    window.open("https://wa.me/+5524999999999?text=" + mensagem);
} 



    