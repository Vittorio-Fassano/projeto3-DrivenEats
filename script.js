let prato;
let bebida;
let sobremesa;


function escolherFrango1() {
    document.getElementById("frango1").style.borderColor = "green";
    document.getElementById("frango2").style.borderColor = "white";
    document.getElementById("frango").style.borderColor = "white";
    prato = "frango1";

}

function escolherFrango2(){
    document.getElementById("frango2").style.borderColor = "green";
    document.getElementById("frango1").style.borderColor = "white";
    document.getElementById("frango3").style.borderColor = "white";
    prato = "frango2";
}

function escolherFrango3(){
    document.getElementById("frango3").style.borderColor = "green";
    document.getElementById("frango1").style.borderColor = "white";
    document.getElementById("frango2").style.borderColor = "white";
    prato = "frango3";
}





function escolherCoca1() {
    document.getElementById("coca1").style.borderColor = "green";
    document.getElementById("coca2").style.borderColor = "white";
    document.getElementById("coca3").style.borderColor = "white";
    bebida = "coca1";

}

function escolherCoca2(){
    document.getElementById("coca2").style.borderColor = "green";
    document.getElementById("coca1").style.borderColor = "white";
    document.getElementById("coca3").style.borderColor = "white";
    bebida = "coca2";
}

function escolherCoca3(){
    document.getElementById("coca3").style.borderColor = "green";
    document.getElementById("coca1").style.borderColor = "white";
    document.getElementById("coca2").style.borderColor = "white";
    bebida = "coca3";
}




function escolherSobremesa1() {
    document.getElementById("sobremesa1").style.borderColor = "green";
    document.getElementById("sobremesa2").style.borderColor = "white";
    document.getElementById("sobremesa3").style.borderColor = "white";
    sobremesa = "sobremesa1";

}

function escolherSobremesa2(){
    document.getElementById("sobremesa2").style.borderColor = "green";
    document.getElementById("sobremesa1").style.borderColor = "white";
    document.getElementById("sobremesa3").style.borderColor = "white";
    sobremesa = "sobremesa2";
}

function escolherSobremesa3(){
    document.getElementById("sobremesa3").style.borderColor = "green";
    document.getElementById("sobremesa1").style.borderColor = "white";
    document.getElementById("sobremesa2").style.borderColor = "white";
    sobremesa = "sobremesa3";
}


function finalizarPedido() {
    alert ("Olá, gostaria de fazer o pedido:" + prato + ", " + bebida + " e " + sobremesa);
}



    