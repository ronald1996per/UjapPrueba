
// Nombre del Jugador 

var nombre = "" ;
var nombrePc = "" ;
// Array de Nombre Com
var nombreCom = [
          'Pedro Com ',
          'Jose Com ' ,
          'Maria Com ' , 
          ' Shakira Com ',
          'jimberto Santa Rosa Com ', 
          'Ismael Com',
          'Jaimito Com ' ,
          'Patricio Com ',
          'Estrellita Com ',
          'Daniel Com ',
          'Dalila Com '
];
function GetName(control)
{
    nombre = prompt("Ingrese su nombre : ");
    
    if(nombre === "")
    {

    }else{
        // Habilitar el Juego
        var Tablero = document.getElementById("Tablero");
        var Jugadores = document.getElementById("jugadores");
       
        // Habilitar El estado del Juego
        Tablero.style.display = 'block'
        Jugadores.style.display = 'block' 

        // Desabilitar el boton Jugar y mostrar jugadores 
        control.style.display = 'none';
        // Jugadores 
        var Player_1 = document.getElementById("NameJugador1");
        var Player_2 = document.getElementById("NameJugador2");

        // Set Name 
        Player_1.value = nombre;
        // Set nombre Pc 
        var Name_Pc = Math.round(0, nombreCom.length) ;
        Player_2.value = "Esteban Com";

    }
}
//if IE4/NS6, apply style 
if (document.all||document.getElementById){ 
    document.write('<style>.tictac{') 
    document.write('width:100px;height:100px;') 
    document.write('}</style>') 
    } 
    
    var sqr1 
    var sqr2 
    var sqr3 
    var sqr4 
    var sqr5 
    var sqr6 
    var sqr7 
    var sqr8 
    var sqr9 
    var sqr1T = 0 
    var sqr2T = 0 
    var sqr3T = 0 
    var sqr4T = 0 
    var sqr5T = 0 
    var sqr6T = 0 
    var sqr7T = 0 
    var sqr8T = 0 
    var sqr9T = 0 
    var moveCount = 0 
    var turn = 0 
    var mode = 1 
    
    function vari() 
    { 
    sqr1 = document.tic.sqr1.value 
    sqr2 = document.tic.sqr2.value 
    sqr3 = document.tic.sqr3.value 
    sqr4 = document.tic.sqr4.value 
    sqr5 = document.tic.sqr5.value 
    sqr6 = document.tic.sqr6.value 
    sqr7 = document.tic.sqr7.value 
    sqr8 = document.tic.sqr8.value 
    sqr9 = document.tic.sqr9.value 
    
    } 
    // Cheque Quien gano la ronda 
    function check() 
    { 
      
      var Element = document.getElementById("ganadas1");
      var Com = document.getElementById("perdidas2");
      if(sqr1 == " X " && sqr2 == " X " && sqr3 == " X ") 
      { 
         alert( nombre + " Has Ganado ! ") 
        // Sumar uno 
        Element.value = parseInt(Element.value) + 1 ;
        Com.value = parseInt(Com.value) + 1 ;
        RondaSet();
        reset()
      } 
      else if(sqr4 == " X " && sqr5 == " X " && sqr6 == " X ") 
      { 
        alert( nombre + " Has Ganado ! ") 
        // Sumar uno 
        Element.value = parseInt(Element.value) + 1 ;
        Com.value = parseInt(Com.value) + 1 ;
        RondaSet();
        reset() 
      } 
      else if(sqr7 == " X " && sqr8 == " X " && sqr9 == " X ") 
      { 
        alert( nombre + " Has Ganado ! ") 
        // Sumar uno 
        Element.value = parseInt(Element.value) + 1 ;
        Com.value = parseInt(Com.value) + 1 ;
        RondaSet();
        reset() 
      } 
      else if(sqr1 == " X " && sqr5 == " X " && sqr9 == " X ") 
      { 
        // alert("Tu Ganas!") 
        alert( nombre + " Has Ganado ! ") 
        // Sumar uno 
        Element.value = parseInt(Element.value) + 1 ;
        Com.value = parseInt(Com.value) + 1 ;
        RondaSet();
        reset()  
      } 
      else if(sqr1 == " X " && sqr4 == " X " && sqr7 == " X ") 
      { 
        // alert("Tu Ganas!") 
        alert( nombre + " Has Ganado ! ") 
        // Sumar uno 
        Element.value = parseInt(Element.value) + 1 ;
        Com.value = parseInt(Com.value) + 1 ;
        RondaSet();
        reset() 
      } 
      else if(sqr2 == " X " && sqr5 == " X " && sqr8 == " X ") 
      { 
       // alert("Tu Ganas!") 
       alert( nombre + " Has Ganado ! ") 
        // Sumar uno 
        Element.value = parseInt(Element.value) + 1 ;
        Com.value = parseInt(Com.value) + 1 ;
        RondaSet();
        reset()  
      } 
      else if(sqr3 == " X " && sqr6 == " X " && sqr9 == " X ") 
      { 
       // alert("Tu Ganas!") 
       alert( nombre + " Has Ganado ! ") 
        // Sumar uno 
        Element.value = parseInt(Element.value) + 1 ;
        Com.value = parseInt(Com.value) + 1 ;
        reset() 
      } 
      else if(sqr1 == " X " && sqr5 == " X " && sqr9 == " X ") 
      { 
        // alert("Tu Ganas!") 
        alert( nombre + " Has Ganado ! ") 
        // Sumar uno 
        Element.value = parseInt(Element.value) + 1 ;
        Com.value = parseInt(Com.value) + 1 ;
        RondaSet();
        reset() 
      } 
      else if(sqr3 == " X " && sqr5 == " X " && sqr7 == " X ") 
      { 
       // alert("Tu Ganas!") 
       alert( nombre + " Has Ganado ! ") 
        // Sumar uno 
        Element.value = parseInt(Element.value) + 1 ;
        Com.value = parseInt(Com.value) + 1 ;
        RondaSet();
        reset() 
      } 
      else 
      { 
        winCheck() 
        check2() 
        drawCheck() 
       
      } 
    } 
    
    function check2() 
    { 
      vari() 
      drawCheck() 

      var Elemeto = document.getElementById("perdidas1");
      var Com = document.getElementById("ganadas2");
      var Name = document.getElementById("NameJugador2").value;
      if(sqr1 == " O " && sqr2 == " O " && sqr3 == " O ") 
      { 
        // alert("Tu  Pierdo!") 
        alert( Name + " Ha Ganado ! ") 
        // Sumar uno 
        Elemeto.value = parseInt(Elemeto.value) + 1 ;
        Com.value = parseInt(Com.value) + 1 ;
        RondaSet();
        reset() 
      } 
      else if(sqr4 == " O " && sqr5 == " O " && sqr6 == " O ") 
      { 
        // alert("Tu  Pierdo!") 
        alert( Name + " Ha Ganado ! ") 
        // Sumar uno 
        Elemeto.value = parseInt(Elemeto.value) + 1 ;
        Com.value = parseInt(Com.value) + 1 ;
        RondaSet();
        reset()  
      } 
      else if(sqr7 == " O " && sqr8 == " O " && sqr9 == " O ") 
      { 
        // alert("Tu  Pierdo!") 
        alert( Name + " Ha Ganado ! ") 
        // Sumar uno 
        Elemeto.value = parseInt(Elemeto.value) + 1 ;
        Com.value = parseInt(Com.value) + 1 ;
        RondaSet();
        reset()  
      } 
      else if(sqr1 == " O " && sqr5 == " O " && sqr9 == " O ") 
      { 
        // alert("Tu  Pierdo!") 
        alert( Name + " Ha Ganado ! ") 
        // Sumar uno 
        Elemeto.value = parseInt(Elemeto.value) + 1 ;
        Com.value = parseInt(Com.value) + 1 ;
        RondaSet();
        reset() 
      } 
      else if(sqr1 == " O " && sqr4 == " O " && sqr7 == " O ") 
      { 
        // alert("Tu  Pierdo!") 
        alert( Name + " Ha Ganado ! ") 
        // Sumar uno 
        Elemeto.value = parseInt(Elemeto.value) + 1 ;
        Com.value = parseInt(Com.value) + 1 ;
        RondaSet();
        reset() 
      } 
      else if(sqr2 == " O " && sqr5 == " O " && sqr8 == " O ") 
      { 
        // alert("Tu  Pierdo!") 
        // Sumar uno 
        alert( Name + " Ha Ganado ! ") 
        Elemeto.value = parseInt(Elemeto.value) + 1 ;
        Com.value = parseInt(Com.value) + 1 ;
        RondaSet();
        reset() 
      } 
      else if(sqr3 == " O " && sqr6 == " O " && sqr9 == " O ") 
      { 
        // alert("Tu  Pierdo!") 
        alert( Name + " Ha Ganado ! ") 
        // Sumar uno 
        Elemeto.value = parseInt(Elemeto.value) + 1 ;
        Com.value = parseInt(Com.value) + 1 ;
        RondaSet();
        reset()  
      } 
      else if(sqr1 == " O " && sqr5 == " O " && sqr9 == " O ") 
      { 
        // alert("Tu  Pierdo!") 
        alert( Name + " Ha Ganado ! ") 
        // Sumar uno 
        Elemeto.value = parseInt(Elemeto.value) + 1 ;
        Com.value = parseInt(Com.value) + 1 ;
        RondaSet();
        reset() 
      } 
      else if(sqr3 == " O " && sqr5 == " O " && sqr7 == " O ") 
      { 
       // alert("Tu  Pierdo!") 
        // Sumar uno 
        alert( Name + " Ha Ganado ! ") 
        Elemeto.value = parseInt(Elemeto.value) + 1 ;
        Com.value = parseInt(Com.value) + 1 ;
        RondaSet();
        reset() 
      } 
    } 
    
    function player1Check() 
    { 
      if(sqr1 == " X " && sqr2 == " X " && sqr3 == " X ") 
      { 
        alert("Player 1 wins!") 


        reset() 
      } 
      else if(sqr4 == " X " && sqr5 == " X " && sqr6 == " X ") 
      { 
        alert("Player 1 wins!") 
        reset() 
      } 
      else if(sqr7 == " X " && sqr8 == " X " && sqr9 == " X ") 
      { 
        alert("Player 1 wins!") 
        reset() 
      } 
      else if(sqr1 == " X " && sqr5 == " X " && sqr9 == " X ") 
      { 
        alert("Player 1 wins!") 
        reset() 
      } 
      else if(sqr1 == " X " && sqr4 == " X " && sqr7 == " X ") 
      { 
        alert("Player 1 wins!") 
        reset() 
      } 
      else if(sqr2 == " X " && sqr5 == " X " && sqr8 == " X ") 
      { 
        alert("Player 1 wins!") 
        reset() 
      } 
      else if(sqr3 == " X " && sqr6 == " X " && sqr9 == " X ") 
      { 
        alert("Player 1 wins!") 
        reset() 
      } 
      else if(sqr1 == " X " && sqr5 == " X " && sqr9 == " X ") 
      { 
        alert("Player 1 wins!") 
        reset() 
      } 
      else if(sqr3 == " X " && sqr5 == " X " && sqr7 == " X ") 
      { 
        alert("Player 1 wins!") 
        reset() 
      } 
      else 
      { 
        player2Check() 
        drawCheck()  
      } 
    } 
    
    function player2Check() 
    { 
      vari() 
      drawCheck() 
      if(sqr1 == " O " && sqr2 == " O " && sqr3 == " O ") 
      { 
        alert("Player 2 wins!") 
        reset() 
      } 
      else if(sqr4 == " O " && sqr5 == " O " && sqr6 == " O ") 
      { 
        alert("Player 2 wins!") 
        reset() 
    
      } 
      else if(sqr7 == " O " && sqr8 == " O " && sqr9 == " O ") 
      { 
        alert("Player 2 wins!") 
        reset() 
      } 
      else if(sqr1 == " O " && sqr5 == " O " && sqr9 == " O ") 
      { 
        alert("Player 2 wins!") 
        reset() 
      } 
      else if(sqr1 == " O " && sqr4 == " O " && sqr7 == " O ") 
      { 
        alert("Player 2 wins!") 
        reset() 
      } 
      else if(sqr2 == " O " && sqr5 == " O " && sqr8 == " O ") 
      { 
        alert("Player 2 wins!") 
        reset() 
      } 
      else if(sqr3 == " O " && sqr6 == " O " && sqr9 == " O ") 
      { 
        alert("Player 2 wins!") 
        reset() 
      } 
      else if(sqr1 == " O " && sqr5 == " O " && sqr9 == " O ") 
      { 
        alert("Player 2 wins!") 
        reset() 
      } 
      else if(sqr3 == " O " && sqr5 == " O " && sqr7 == " O ") 
      { 
        alert("Player 2 wins!") 
        reset() 
      } 
    } 
    
    function drawCheck() 
    { 
      vari() 
      moveCount = sqr1T + sqr2T + sqr3T + sqr4T + sqr5T + sqr6T + sqr7T + sqr8T + sqr9T 
      if(moveCount == 9) 
      { 
        reset() 
      
      } 
    } 
    
    function winCheck() 
    { 
      check2() 
      if(sqr1 == " O " && sqr2 == " O " && sqr3T == 0 && turn == 1) 
      { 
        document.tic.sqr3.value = " O " 
        sqr3T = 1; 
        turn = 0; 
      } 
      else if(sqr2 == " O " && sqr3 == " O " && sqr1T == 0 && turn == 1) 
      { 
        document.tic.sqr1.value = " O " 
        sqr1T = 1; 
        turn = 0; 
      } 
      else if(sqr4 == " O " && sqr5 == " O " && sqr6T == 0 && turn == 1) 
      { 
        document.tic.sqr6.value = " O " 
        sqr6T = 1; 
        turn = 0; 
      } 
      else if(sqr5 == " O " && sqr6 == " O " && sqr4T == 0 && turn == 1) 
      { 
        document.tic.sqr4.value = " O " 
        sqr4T = 1; 
        turn = 0; 
      } 
      else if(sqr7 == " O " && sqr8 == " O " && sqr9T == 0 && turn == 1) 
      { 
        document.tic.sqr9.value = " O " 
        sqr9T = 1; 
        turn = 0; 
      } 
      else if(sqr8 == " O " && sqr9 == " O " && sqr7T == 0 && turn == 1) 
      { 
        document.tic.sqr7.value = " O " 
        sqr7T = 1; 
        turn = 0; 
      } 
      else if(sqr1 == " O " && sqr5 == " O " && sqr9T == 0 && turn == 1) 
      { 
        document.tic.sqr9.value = " O " 
        sqr9T = 1; 
        turn = 0; 
      } 
      else if(sqr5 == " O " && sqr9 == " O " && sqr1T == 0 && turn == 1) 
      { 
        document.tic.sqr1.value = " O " 
        sqr1T = 1; 
        turn = 0; 
      } 
      else if(sqr3 == " O " && sqr5 == " O " && sqr7T == 0 && turn == 1) 
      { 
        document.tic.sqr7.value = " O " 
        sqr7T = 1; 
        turn = 0; 
      } 
      else if(sqr7 == " O " && sqr5 == " O " && sqr3T == 0 && turn == 1) 
      { 
        document.tic.sqr3.value = " O " 
        sqr3T = 1; 
        turn = 0; 
      } 
      else if(sqr1 == " O " && sqr3 == " O " && sqr2T == 0 && turn == 1) 
      { 
        document.tic.sqr2.value = " O " 
        sqr2T = 1; 
        turn = 0; 
      } 
      else if(sqr4 == " O " && sqr6 == " O " && sqr5T == 0 && turn == 1) 
      { 
        document.tic.sqr5.value = " O " 
        sqr5T = 1; 
        turn = 0; 
      } 
      else if(sqr7 == " O " && sqr9 == " O " && sqr8T == 0 && turn == 1) 
      { 
        document.tic.sqr8.value = " O " 
        sqr8T = 1; 
        turn = 0; 
      } 
      else if(sqr1 == " O " && sqr7 == " O " && sqr4T == 0 && turn == 1) 
      { 
        document.tic.sqr4.value = " O " 
        sqr4T = 1; 
        turn = 0; 
      } 
      else if(sqr2 == " O " && sqr8 == " O " && sqr5T == 0 && turn == 1) 
      { 
        document.tic.sqr5.value = " O " 
        sqr5T = 1; 
        turn = 0; 
      } 
      else if(sqr3 == " O " && sqr9 == " O " && sqr6T == 0 && turn == 1) 
      { 
        document.tic.sqr6.value = " O " 
        sqr6T = 1; 
        turn = 0; 
      } 
      else if(sqr1 == " O " && sqr5 == " O " && sqr9T == 0 && turn == 1) 
      { 
        document.tic.sqr9.value = " O " 
        sqr9T = 1; 
        turn = 0; 
      } 
      else if(sqr4 == " O " && sqr7 == " O " && sqr1T == 0 && turn == 1) 
      { 
        document.tic.sqr1.value = " O " 
        sqr1T = 1; 
        turn = 0; 
      } 
      else if(sqr5 == " O " && sqr8 == " O " && sqr2T == 0 && turn == 1) 
      { 
        document.tic.sqr2.value = " O " 
        sqr2T = 1; 
        turn = 0; 
      } 
      else if(sqr6 == " O " && sqr9 == " O " && sqr3T == 0 && turn == 1) 
      { 
        document.tic.sqr3.value = " O " 
        sqr3T = 1; 
        turn = 0; 
      } 
      else if(sqr1 == " O " && sqr4 == " O " && sqr7T == 0 && turn == 1) 
      { 
        document.tic.sqr7.value = " O " 
        sqr7T = 1; 
        turn = 0; 
      } 
      else if(sqr2 == " O " && sqr5 == " O " && sqr8T == 0 && turn == 1) 
      { 
        document.tic.sqr8.value = " O " 
        sqr8T = 1; 
        turn = 0; 
      } 
      else if(sqr3 == " O " && sqr6 == " O " && sqr9T == 0 && turn == 1) 
      { 
        document.tic.sqr9.value = " O " 
        sqr9T = 1; 
        turn = 0; 
      } 
      else if(sqr1 == " O " && sqr9 == " O " && sqr5T == 0 && turn == 1) 
      { 
        document.tic.sqr5.value = " O " 
        sqr5T = 1; 
        turn = 0; 
      } 
      else if(sqr3 == " O " && sqr7 == " O " && sqr5T == 0 && turn == 1) 
      { 
        document.tic.sqr5.value = " O " 
        sqr5T = 1; 
        turn = 0; 
      } 
      else 
      { 
        computer() 
      } 
      check2() 
    } 
    function computer() 
    { 
     
      check2() 
      if(sqr1 == " X " && sqr2 == " X " && sqr3T == 0 && turn == 1) 
      { 
        document.tic.sqr3.value = " O " 
        sqr3T = 1; 
        turn = 0; 
      } 
      else if(sqr2 == " X " && sqr3 == " X " && sqr1T == 0 && turn == 1) 
      { 
        document.tic.sqr1.value = " O " 
        sqr1T = 1; 
        turn = 0; 
      } 
      else if(sqr4 == " X " && sqr5 == " X " && sqr6T == 0 && turn == 1) 
      { 
        document.tic.sqr6.value = " O " 
        sqr6T = 1; 
        turn = 0; 
      } 
      else if(sqr5 == " X " && sqr6 == " X " && sqr4T == 0 && turn == 1) 
      { 
        document.tic.sqr4.value = " O " 
        sqr4T = 1; 
        turn = 0; 
      } 
      else if(sqr7 == " X " && sqr8 == " X " && sqr9T == 0 && turn == 1) 
      { 
        document.tic.sqr9.value = " O " 
        sqr9T = 1; 
        turn = 0; 
      } 
      else if(sqr8 == " X " && sqr9 == " X " && sqr7T == 0 && turn == 1) 
      { 
        document.tic.sqr7.value = " O " 
        sqr7T = 1; 
        turn = 0; 
      } 
      else if(sqr1 == " X " && sqr5 == " X " && sqr9T == 0 && turn == 1) 
      { 
        document.tic.sqr9.value = " O " 
        sqr9T = 1; 
        turn = 0; 
      } 
      else if(sqr5 == " X " && sqr9 == " X " && sqr1T == 0 && turn == 1) 
      { 
        document.tic.sqr1.value = " O " 
        sqr1T = 1; 
        turn = 0; 
      } 
      else if(sqr3 == " X " && sqr5 == " X " && sqr7T == 0 && turn == 1) 
      { 
        document.tic.sqr7.value = " O " 
        sqr7T = 1; 
        turn = 0; 
      } 
      else if(sqr7 == " X " && sqr5 == " X " && sqr3T == 0 && turn == 1) 
      { 
        document.tic.sqr3.value = " O " 
        sqr3T = 1; 
        turn = 0; 
      } 
      else if(sqr1 == " X " && sqr3 == " X " && sqr2T == 0 && turn == 1) 
      { 
        document.tic.sqr2.value = " O " 
        sqr2T = 1; 
        turn = 0; 
      } 
      else if(sqr4 == " X " && sqr6 == " X " && sqr5T == 0 && turn == 1) 
      { 
        document.tic.sqr5.value = " O " 
        sqr5T = 1; 
        turn = 0; 
      } 
      else if(sqr7 == " X " && sqr9 == " X " && sqr8T == 0 && turn == 1) 
      { 
        document.tic.sqr8.value = " O " 
        sqr8T = 1; 
        turn = 0; 
      } 
      else if(sqr1 == " X " && sqr7 == " X " && sqr4T == 0 && turn == 1) 
      { 
        document.tic.sqr4.value = " O " 
        sqr4T = 1; 
        turn = 0; 
      } 
      else if(sqr2 == " X " && sqr8 == " X " && sqr5T == 0 && turn == 1) 
      { 
        document.tic.sqr5.value = " O " 
        sqr5T = 1; 
        turn = 0; 
      } 
      else if(sqr3 == " X " && sqr9 == " X " && sqr6T == 0 && turn == 1) 
      { 
        document.tic.sqr6.value = " O " 
        sqr6T = 1; 
        turn = 0; 
      } 
      else if(sqr1 == " X " && sqr5 == " X " && sqr9T == 0 && turn == 1) 
      { 
        document.tic.sqr9.value = " O " 
        sqr9T = 1; 
        turn = 0; 
      } 
      else if(sqr4 == " X " && sqr7 == " X " && sqr1T == 0 && turn == 1) 
      { 
        document.tic.sqr1.value = " O " 
        sqr1T = 1; 
        turn = 0; 
      } 
      else if(sqr5 == " X " && sqr8 == " X " && sqr2T == 0 && turn == 1) 
      { 
        document.tic.sqr2.value = " O " 
        sqr2T = 1; 
        turn = 0; 
      } 
      else if(sqr6 == " X " && sqr9 == " X " && sqr3T == 0 && turn == 1) 
      { 
        document.tic.sqr3.value = " O " 
        sqr3T = 1; 
        turn = 0; 
      } 
      else if(sqr1 == " X " && sqr4 == " X " && sqr7T == 0 && turn == 1) 
      { 
        document.tic.sqr7.value = " O " 
        sqr7T = 1; 
        turn = 0; 
      } 
      else if(sqr2 == " X " && sqr5 == " X " && sqr8T == 0 && turn == 1) 
      { 
        document.tic.sqr8.value = " O " 
        sqr8T = 1; 
        turn = 0; 
      } 
      else if(sqr3 == " X " && sqr6 == " X " && sqr9T == 0 && turn == 1) 
      { 
        document.tic.sqr9.value = " O " 
        sqr9T = 1; 
        turn = 0; 
      } 
      else if(sqr1 == " X " && sqr9 == " X " && sqr5T == 0 && turn == 1) 
      { 
        document.tic.sqr5.value = " O " 
        sqr5T = 1; 
        turn = 0; 
      } 
      else if(sqr3 == " X " && sqr7 == " X " && sqr5T == 0 && turn == 1) 
      { 
        document.tic.sqr5.value = " O " 
        sqr5T = 1; 
        turn = 0; 
      } 
      else 
      { 
        AI() 
      } 
      check2() 
    } 
    
    function AI() 
    { 
      vari() 
      if(document.tic.sqr5.value == "     " && turn == 1) 
      { 
        document.tic.sqr5.value = " O " 
        turn = 0 
        sqr5T = 1 
      } 
      else if(document.tic.sqr1.value == "     " && turn == 1) 
      { 
        document.tic.sqr1.value = " O " 
        turn = 0 
        sqr1T = 1 
      } 
      else if(document.tic.sqr9.value == "     " && turn == 1) 
      { 
        document.tic.sqr9.value = " O " 
        turn = 0 
        sqr9T = 1 
      } 
      else if(document.tic.sqr6.value == "     " && turn == 1) 
      { 
        document.tic.sqr6.value = " O " 
        turn = 0 
        sqr6T = 1 
      } 
      else if(document.tic.sqr2.value == "     " && turn == 1) 
      { 
        document.tic.sqr2.value = " O " 
        turn = 0 
        sqr2T = 1 
      } 
      else if(document.tic.sqr8.value == "     " && turn == 1) 
      { 
        document.tic.sqr8.value = " O " 
        turn = 0 
        sqr8T = 1 
      } 
      else if(document.tic.sqr3.value == "     " && turn == 1) 
      { 
        document.tic.sqr3.value = " O " 
        turn = 0 
        sqr3T = 1 
      } 
      else if(document.tic.sqr7.value == "     " && turn == 1) 
      { 
        document.tic.sqr7.value = " O " 
        turn = 0 
        sqr7T = 1 
      } 
      else if(document.tic.sqr4.value == "     " && turn == 1) 
      { 
        document.tic.sqr4.value = " O " 
        turn = 0 
        sqr4T = 1 
      } 
      check2() 
    } 
    
    function reset() 
    { 
      document.tic.sqr1.value = "     " 
      document.tic.sqr2.value = "     " 
      document.tic.sqr3.value = "     " 
      document.tic.sqr4.value = "     " 
      document.tic.sqr5.value = "     " 
      document.tic.sqr6.value = "     " 
      document.tic.sqr7.value = "     " 
      document.tic.sqr8.value = "     " 
      document.tic.sqr9.value = "     " 
      sqr1T = 0 
      sqr2T = 0 
      sqr3T = 0 
      sqr4T = 0 
      sqr5T = 0 
      sqr6T = 0 
      sqr7T = 0 
      sqr8T = 0 
      sqr9T = 0 
      vari() 
      turn = 0 
      moveCount = 0 
      
    } 
    
    function ResetBtn(control) 
    { 

        // reset All Data 
        // Jugadores 
        var Player_1 = document.getElementById("NameJugador1");
        var Player_2 = document.getElementById("NameJugador2");
        var JugarT = document.getElementById("jugar");
        var JugadoresT = document.getElementById("jugadores");
        var TableroT = document.getElementById("Tablero");
        var ronda = document.getElementById("ronda");
        // Reset Partida Anterio 
        var Ga1 = document.getElementById("ganadas1");
        var Ga2 = document.getElementById("ganadas2");

        var Pe1 = document.getElementById("perdidas1");
        var Pe2 = document.getElementById("perdidas2");
        
        // Set Value '' 
        Ga1.value = '0' ; 
        Ga2.value = '0' ;
        Pe1.value = '0' ;
        Pe2.value = '0' ;
        // Set Name 
        Player_1.value = "";
        Player_2.value = "";
        nombre = "";
        // Habilitar el Botin de Juego y cerrar este 
         JugarT.style.display = 'block';
         
        // Desabilitas este 
        JugadoresT.style.display = 'none';
        TableroT.style.display = 'none' ;
        // Set Value
        ronda.value = 1;
        reset() 
    } 
    function resetter() 
    { 
      reset() 
    } 
    function RondaSet()
    {
      var Ronda = document.getElementById("ronda");
      // Set Value
      Ronda.value = parseInt(Ronda.value) + 1;
    }
    