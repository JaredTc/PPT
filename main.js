var butPiedra = document.getElementById("but-piedra");
var butPapel = document.getElementById("but-papel");
var butTijera = document.getElementById("but-tijera");
var lblUser = document.getElementById("lbl-user");
var lblCpu = document.getElementById("lbl-cpu");
var lblFinal = document.getElementById("lbl-resultado");

var lblPuntajeuser = document.getElementById("lbl-res-user");
var lblPuntajeCpu = document.getElementById("lbl-res-cpu");

var puntajeUsuario = 0;
var puntajeCpu = 0;

var opciones = ["PIEDRA", "PAPEL", "TIJERA"];

butPiedra.addEventListener("click", function () {
    startGame(butPiedra.value);
});
butPapel.addEventListener("click", function () {
    startGame(butPapel.value);
});
butTijera.addEventListener("click", function () {
    startGame(butTijera.value);
});


function startGame(value) {
   let userSelection = value;
   let cpuSelection = getCpuResponse();
   let respuesta = checkwinner(userSelection,cpuSelection);
    
   
 

        if(respuesta == "GANASTE"){
        puntajeUsuario++;
        }
        else if(respuesta == "PERDISTE"){
         puntajeCpu++;
        }
   
   lblUser.innerHTML = opciones[userSelection];
   lblCpu.innerHTML = opciones[cpuSelection];
   lblFinal.innerHTML = respuesta;
   lblPuntajeuser.innerHTML = puntajeUsuario;
   lblPuntajeCpu.innerHTML = puntajeCpu;
   

 
}

function checkwinner(userSel, cpuSel){
    /*      usuario      Maquina
            Piedra (0) > Tijera (2)
            Tijera (2) > Papel  (1)
            Papel  (1) > Piedra (0)
    */
    let respuesta;
    if((userSel == 0 && cpuSel == 2)||(userSel == 2 && cpuSel == 1)||(userSel == 1 && cpuSel == 0)){
        respuesta = "GANASTE";
        // alert("Has Ganado");
    }
     else if(userSel == cpuSel){
       
        respuesta ="EMPATE";
        
    } else{
        respuesta = "PERDISTE";
    }
    return respuesta;
}

//Metodo que retorna la solucion de la maquina
function getCpuResponse() {
    let x = Math.floor(Math.random() * 3);

    if (x == 3) {
        return 2;
    }
    return x;
}
