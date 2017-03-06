var assert = require('assert');
var app = require('../assets/main.js');

describe('Tic tac toe', function() {
  var tictactoe;

  //Crea nuestra clase tic tac toe que va a tener la lógica del juego

  before(function() {
    tictactoe = new app.Tictactoe();
  });

  it('Debo poder crear un nuevo juego con los valores por defecto', function() {

    tictactoe.limpiar();
    assert.deepEqual(tictactoe.limpiar(),[1,2,3,4,5,6,7,8,9]);
    assert.equal(tictactoe.turno,0); // El turno lo represento con una variable que hace 0 o 1

  });

  it('Debo poder hacer una jugada', function() {

    tictactoe.newGame();

    tictactoe.jugar(1);

    assert.deepEqual(tictactoe.marcarBoton(),["x",2,3,4,5,6,7,8,9]);

    tictactoe.jugar(2);

    assert.deepEqual(tictactoe.marcarBoton(),[1,"o",3,4,5,6,7,8,9]);

  });

  it('Debo poder validar que alguien gano el juego',function() {

    assert.deepEqual(tictactoe.evaluarJuego(),["x","x","x","o",5,6,7,"o",9]);
    assert.deepEqual(tictactoe.evaluarJuego(),["o","o","o",4,"x",6,"x","x",9]);
    assert.deepEqual(tictactoe.evaluarJuego(),["x","o",3,"x",5,"o","x",8,9]);

  });

  it('Debo poder validar si hay empate', function() {

    assert.deepEqual(tictactoe.evaluarJuego(),["x","o","x","o","x","o","o","x","o"]);

  });

});
