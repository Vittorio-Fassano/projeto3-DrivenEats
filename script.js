let prato;
let bebida;
let sobremesa;

let pratoAtivado =  false;
let bebidaAtivado = false;
let sobremesaAtivado = false;

let precoPrato;
let precoBebida;
let precoSobremesa;


function escolherFrango1() {
    document.getElementById("frango1").style.borderColor = "green";
    document.getElementById("frango2").style.borderColor = "white";
    document.getElementById("frango3").style.borderColor = "white";
    prato = "frango1";
    pratoAtivado = true;
    precoPrato = 14.9;

    if (pratoAtivado && bebidaAtivado && sobremesaAtivado) {
        botaoAtivado();
    }
}

function escolherFrango2(){
    document.getElementById("frango2").style.borderColor = "green";
    document.getElementById("frango1").style.borderColor = "white";
    document.getElementById("frango3").style.borderColor = "white";
    prato = "frango2";
    pratoAtivado = true;
    precoPrato = 14.9;

    if (pratoAtivado && bebidaAtivado && sobremesaAtivado) {
        botaoAtivado();
    }
}

function escolherFrango3(){
    document.getElementById("frango3").style.borderColor = "green";
    document.getElementById("frango1").style.borderColor = "white";
    document.getElementById("frango2").style.borderColor = "white";
    prato = "frango3";
    pratoAtivado = true;
    precoPrato = 14.9;

    if (pratoAtivado && bebidaAtivado && sobremesaAtivado) {
        botaoAtivado();
    }
}





function escolherCoca1() {
    document.getElementById("coca1").style.borderColor = "green";
    document.getElementById("coca2").style.borderColor = "white";
    document.getElementById("coca3").style.borderColor = "white";
    bebida = "coca1";
    bebidaAtivado = true;
    precoBebida = 4.9;

    if (pratoAtivado && bebidaAtivado && sobremesaAtivado) {
        botaoAtivado();
    }
}

function escolherCoca2(){
    document.getElementById("coca2").style.borderColor = "green";
    document.getElementById("coca1").style.borderColor = "white";
    document.getElementById("coca3").style.borderColor = "white";
    bebida = "coca2";
    bebidaAtivado = true;
    precoBebida = 4.9;

    if (pratoAtivado && bebidaAtivado && sobremesaAtivado) {
        botaoAtivado();
    }
}

function escolherCoca3(){
    document.getElementById("coca3").style.borderColor = "green";
    document.getElementById("coca1").style.borderColor = "white";
    document.getElementById("coca2").style.borderColor = "white";
    bebida = "coca3";
    bebidaAtivado = true;
    precoBebida = 4.9;

    if (pratoAtivado && bebidaAtivado && sobremesaAtivado) {
        botaoAtivado();
    }
}




function escolherSobremesa1() {
    document.getElementById("sobremesa1").style.borderColor = "green";
    document.getElementById("sobremesa2").style.borderColor = "white";
    document.getElementById("sobremesa3").style.borderColor = "white";
    sobremesa = "sobremesa1";
    sobremesaAtivado = true;
    precoSobremesa = 7.9;

    if (pratoAtivado && bebidaAtivado && sobremesaAtivado) {
        botaoAtivado();
    }

}

function escolherSobremesa2(){
    document.getElementById("sobremesa2").style.borderColor = "green";
    document.getElementById("sobremesa1").style.borderColor = "white";
    document.getElementById("sobremesa3").style.borderColor = "white";
    sobremesa = "sobremesa2";
    sobremesaAtivado = true;
    precoSobremesa = 7.9;

    if (pratoAtivado && bebidaAtivado && sobremesaAtivado) {
        botaoAtivado();
    }
}

function escolherSobremesa3(){
    document.getElementById("sobremesa3").style.borderColor = "green";
    document.getElementById("sobremesa1").style.borderColor = "white";
    document.getElementById("sobremesa2").style.borderColor = "white";
    sobremesa = "sobremesa3";
    sobremesaAtivado = true;
    precoSobremesa = 7.9;

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



    