
var turno = 1;
var boton;
var array = [1,2,3,4,5,6,7,8,9];
var ganador = document.getElementById("ganador");
var jugador = document.getElementById("jugador");
var letra = "X";

jugador.innerHTML = letra;
//Funcion que marca el boton deacuerdo con el jugador en turno
function marcarBoton(valor){
  boton = document.getElementById(valor);
  var jug;
  if(turno %2 == 0){
    letra = "O";
    jug = "X";
  }else{
    letra = "X";
    jug = "O";
  }
  //Ingresa el valor array
  array[valor] = letra;
//escribe el boton y lo desactiva
  jugador.innerHTML = jug;
  boton.innerHTML = letra;

  turno++;
  desactivar(valor);

  if(turno>=6){
    evaluarJuego();
  }

}

function desactivar(){
  this.boton.disabled = true;
}

function evaluarJuego(){
  var respuesta = "Gano el jugador: ";
  var valor = "";

  if((array[0] == array[1]) && (array[0] == array[2])){
    valor = array[0];
  }
  if((array[3] == array[4]) && (array[3] == array[5])){
    valor = array[3];
  }
  if((array[6] == array[7]) && (array[6] == array[8])){
    valor = array[6];
  }
  if((array[0] == array[3]) && (array[0] == array[6])){
    valor = array[0];
  }
  if((array[1] == array[4]) && (array[1] == array[7])){
    valor = array[1];
  }
  if((array[2] == array[5]) && (array[2] == array[8])){
    valor = array[2];
  }
  if((array[0] == array[4]) && (array[0] == array[8])){
    valor = array[0];
  }
  if((array[2] == array[4]) && (array[2] == array[6])){
    valor = array[2];
  }

  if(valor != ""){
    ganador.innerHTML = respuesta + valor;
    desactivarTodos();
  }else{
    if(turno==10){ ganador.innerHTML = "Empate";}
  }

}

function desactivarTodos(){
  for(i=0; i<9; i++){
    document.getElementById(i).disabled = true;
  }
}

function limpiar(){
  turno = 1;
  for(i=0; i<9; i++){
    array = [1,2,3,4,5,6,7,8,9];
    document.getElementById(i).innerHTML = "+";
    document.getElementById(i).disabled = false;
    ganador.innerHTML = "";
    jugador.innerHTML = "X";

  }

}
