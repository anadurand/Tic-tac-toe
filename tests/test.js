var assert = require('assert');
var app = require('../assets/main.js');

describe('Tic tac toe', function() {
  var tictactoe;

  //Crea nuestra clase tic tac toe que va a tener la lógica del juego

  before(function() {
    tictactoe = new app.Tictactoe();
  });

  it('Debo poder crear un nuevo juego con los valores por defecto', function() {

    tictactoe.newGame();

    assert.deepEqual([["+","+","+"],["+","+","+"],["+","+","+"]],tictactoe.board);

    assert.equal(0,tictactoe.turn); // El turno lo represento con una variable que hace 0 o 1

  });

  it('Debo poder hacer una jugada', function() {

    tictactoe.newGame();

    tictactoe.jugar(1);

    assert.deepEqual([["x","+","+"],["+","+","+"],["+","+","+"]],tictactoe.board);

    tictactoe.jugar(2);

    assert.deepEqual([["+","o","+"],["+","+","+"],["+","+","+"]],tictactoe.board);

  });

  it('Solo debe ser posible jugar dentro del tablero(1-9)',function() {



  });



  it('Debo poder validar que alguien gano el juego',function() {



  });



  it('Debo poder validar si hay empate', function() {



  });

});
