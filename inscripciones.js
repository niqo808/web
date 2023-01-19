

var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");

var next = document.getElementById("continuar");
var back = document.getElementById("atras");
let confirm = document.getElementById("confirmar");

//animaciones de los formularios.
window.onload = function(){
    next.onclick = function(){
        form1.style.left = "1000px";
        form2.style.left = "20px";
        
    }
    back.onclick = function(){
        form1.style.left = "20px";
        form2.style.left = "1000px";
    }
    

}


