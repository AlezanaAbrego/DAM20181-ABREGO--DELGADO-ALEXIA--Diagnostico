/**
 *Created by alezana on 30/01/18.
 **/
var log = document.getElementById("log");

log.onclick = function(){
    var usuario = document.getElementById("usuario").value;
    var contra  = document.getElementById("contra").value;
    var invalido  = document.getElementById("invalido");

    if(usuario == "admin" && contra == "admin"){
        window.location="tabla.html";
        invalido.style.visibility="hidden";
    }
    else {
        invalido.style.visibility="visible";
    }
};

