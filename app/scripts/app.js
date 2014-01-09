/*global define */
define([], function () {
    'use strict'
    //variables globales
    var userPlaying = false
    var userClicks = new Array()
    var buttonList
    var computerSequence = new Array()
    //inicializamos buttonList con todos los elementos de nuestra clase boton
    var initialize = function() { 
        buttonList = jQuery.map( $(".boton"),
                       function(element) {
                         return $(element).attr('id')
                       })
    }
    //generamos un random de la secuencia automatica
    var generateComputerSequence = function() {
        computerSequence.push( buttonList[
                                 Math.floor(Math.random()
                                   * buttonList.length)] )
        console.log(computerSequence)
    }
    //cambiar el color del css  y tras un delay volver al color original
    var highlight = function(button, color) {
      var oldColor = button.css("background-color")
      button.css("background-color", color).dequeue()
            .delay(300)
            .queue( function() {
                    button.css("background-color", oldColor).dequeue()
                  })
    }
    // mostramos la secuecia generada aleatoria
    var showComputerSequence = function() {
        var seq = computerSequence
        for(var id in seq) {//se espera 600 ms en mostrar cada elemento
           (function(id){
             setTimeout( function() {
               highlight($("#"+seq[id]), "#fff")
             }, 600*id)
           })(id)
        }
        setTimeout( function() {
            userPlaying = true
        }, 600*seq.length)
    }
    //comparamos las secuencias
    var compareSequences = function() {
        // TODO
        for(var i = 0; i < userClicks.length; ++i)
                 {
                         if(userClicks[i] != computerSequence[i])
                         {
                                 return false;
                         }
                 }

                 console.log("Correcto!");
                 $('#score').text(userClicks.length)
                 return true;
    }
    //finalizacion del juego, reseteamos los arrays y volvemos a mostrar el boton
    var endGame = function() {
        alert("has fallado")
        $('#score').text("Score "+(userClicks.length-1))
        userClicks.length=0;
        computerSequence.length=0;
        $('#start').css('background-color', '#000').fadeIn()


    }
    //********FUNCION PRINCIPAL********
    $(document).ready(function() {
        initialize()

        $('#start').click(function() {
            $('#score').text("0");
            $(this).css('color', '#fff').fadeOut()
            setTimeout( function() {
                generateComputerSequence()
                showComputerSequence()
            }, 500)
        })

        $('.boton').click( function() { //asociamos la siguiente funcion al elemento boton para que se ejecute cada vez que realicemos el evento click
            if(userPlaying) {//solo se ejecuta si ya hemos visualizado la secuencia random
                var thisId = $(this).attr('id')
                highlight($(this), "#fff")
                userClicks.push(thisId)

                if (userClicks.length >= computerSequence.length) {
                    userPlaying = false
                      if (compareSequences()){
                          userClicks.length = 0
                          setTimeout(function() {
                          generateComputerSequence()
                          showComputerSequence()
                      }, 1000)

                    }
                  else
                  {
                    endGame()
                  }
                    
                }


            }
        })
    })
    return "<============== OK";

    return '\'Allo \'Allo!';
});
