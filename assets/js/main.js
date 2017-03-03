
var turno = 1;
var boton;
var array = [0,0,0,0,0,0,0,0,0];
var ganador = document.getElementById("ganador");

function marcarBoton(valor){
  this.boton = document.getElementById(valor);

  if(this.turno %2 == 0){
    letra = "O";

  }else{
    letra = "X";

  }
  //console.log(this.turno);

  array[valor] = letra;
  //console.log(array);
  this.boton.innerHTML = letra;
  this.turno++;
  desactivar(valor);

  if(this.turno>=6){
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
    console.log(array);
    desactivarTodos();
  }

}

function desactivarTodos(){

  for(i=0; i<9; i++){
    document.getElementById(i).disabled = true;

  }
}
function limpiar(){
  this.turno = 1;
}
