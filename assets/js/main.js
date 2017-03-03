
var turno = 1;
var boton;
var array = new Array(9);
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

function desactivar(valor){
  this.boton.disabled = true;
}

function evaluarJuego(){

  var respuesta = "Gano el jugador: ";

  if((array[0] == array[1]) && (array[0] == array[2])){
    console.log(respuesta += array[0]);
  }
  if((array[3] == array[4]) && (array[3] == array[5])){
    respuesta += array[3];
  }
  if((array[6] == array[7]) && (array[6] == array[8])){
    respuesta += array[0];
  }
  if((array[0] == array[3]) && (array[0] == array[6])){
    console.log(respuesta += array[0]);
  }
  if((array[1] == array[4]) && (array[1] == array[7])){
    respuesta += array[3];
  }
  if((array[2] == array[5]) && (array[2] == array[8])){
    respuesta += array[0];
  }



}

function limpiar(){
  this.turno = 1;
}
