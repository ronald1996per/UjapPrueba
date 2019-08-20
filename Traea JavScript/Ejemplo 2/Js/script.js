var NumerosUsuarios = new Array(); // Contenedor de Numeros del Usuario 
var NumerosParImpar = new Array(); // Contenedor de Numeros Impares e Impares 
var NumerosPositNegNew = new Array(); // Contenedor de Numeros Positivos Negativos y neutros 
var NumerosPrimos = new Array(); // Contenedor de Numeros Primos
var NumerosMuliplo  = new Array(); // Contenedor de Numeros Multiplo
// Limpiar el Arreglo
function Clear() {
    if (NumerosUsuarios.length === 0) { document.write("<h3><strong>No Has Ingresado Ningun Numero</strong></h3>"); }
    else if (NumerosUsuarios.length > 0 && NumerosUsuarios.length <= 0) {
        // Vaciar el Elemento 
        NumerosUsuarios = [];
        NumerosParImpar = [];
        NumerosPositNegNew = [];
        NumerosPrimos = [];
        NumerosMuliplo = [];
        // Habilitar el Boton Add
        HabilitarBtn();
    }
};
function DesabilitarBtn() {
    var Btn = document.getElementById("Add");
    //Btn.style.d = "none";
}
function HabilitarBtn() {
    var Btn = document.getElementById("Add");
    //Btn.style.display = "block";
}
// Pares o Impares 
function ParImpar() {
    for (var i = 0; i < NumerosUsuarios.length; i++) {
        var result = NumerosUsuarios[i] % 2; // Calculado 
        if (result === 0) {
            NumerosParImpar.push(" El Numero es par :" + NumerosUsuarios[i]);
        } else {
            NumerosParImpar.push(" El Numero es Impar :" + NumerosUsuarios[i]);
        }
    }
}
// Mostrar los datos Impares y par
function ParImparShow() {
    document.write("<strong>El resultado de los numeros Pares e Impares</strong> \n");
    for (var i = 0; i < NumerosParImpar.length; i++) {
        // Mostar Datos
        document.write("<br></br>");
        document.write(NumerosParImpar[i] + "\n");
    }
};
function PositNegaNeu() {
    for (var i = 0; i < NumerosUsuarios.length; i++) {
        if (NumerosUsuarios[i] >= 0) {
            // Numero Positivo
            NumerosPositNegNew.push("El Numero " + NumerosUsuarios[i] + " es Positivo");
        } else if (NumerosUsuarios[i] < 0) {
            // Numero Negativo
            NumerosPositNegNew.push("El Numero " + NumerosUsuarios[i] + " es Negativo");
        } else {
            // Es neutro == 0 
            NumerosPositNegNew.push("El Numero " + NumerosUsuarios[i] + " es Neutro");
        }
    }
}
// Mostrar Los datos  Numeros Negativos y Positivos 
function PositNegaNeuShow() {
    document.write("<br></br>");
    document.write("<strong>El resultado de los numeros Positivos , Negativos y Newtros </strong> \n");
    for (var i = 0; i < NumerosPositNegNew.length; i++) {
        // Mostar Datos
        document.write("<br></br>");
        document.write(NumerosPositNegNew[i] + "\n");
    }
}
// Valdar si Existe el numero Ingresado por el Usuario Existe  en el Arreglo
function Validator(Numero) {
    for (var i = 0; i < NumerosUsuarios.length; i++) {
        var valor = true;
        if (Numero === NumerosUsuarios[i]) {
            valor = true;
        } else {
            valor = false;
        }
    }
    return valor;
}
// Calculos de Numeros Primos 
function Primos() {

    for (var i = 0; i < NumerosUsuarios.length; i++) {
        var contador = 0;
        // Verificacion de Primo x Cada Numero 
        for (var x = 1; x <= NumerosUsuarios[i]; x++) {
            if (NumerosUsuarios[i] === 1) {
                // Es Primo Automaticamente
                NumerosPrimos.push("El numero " + NumerosUsuarios[i] + " es primo.");

            } else {


                var primo = NumerosUsuarios[i] % x; // Ver Residuo 
                // Validar si es 1 o si es el Mismo
                if (primo == 0) {
                    // Sumar debe ser dos veces  el que indica 
                    contador = contador + 1;

                }
            }
        }
        // Validar Contador 
        if(NumerosUsuarios[i] === 1 ){ // No hacer Nada 
        }
        else if(contador == 2) { // Es Primo 
            NumerosPrimos.push("El numero " + NumerosUsuarios[i] + " es primo.");
        } else { //No es Primo
            NumerosPrimos.push("El numero " + NumerosUsuarios[i] + " no es primo.");
        }
    }
}

function PrimosShow() {
    document.write("<h3><strong> Resultado de los Numeros Primos </strong></h3> \n");
    var x = 0;
    do {
       
       
        document.write(NumerosPrimos[x]);
        document.write("<br></br>");
        x = x + 1;
    } while (x < NumerosPrimos.length);
    
}
// Calculo de Multiplo de 2
function Multiplo()
 {
    for(var i = 0 ; i < NumerosUsuarios.length ;i++){
        var Multiplo = NumerosUsuarios[i] % 2;
        if(Multiplo === 0 ){
            // Es Multiplo de dos 
            NumerosMuliplo.push("El numero " + NumerosUsuarios[i] + " es multiplo de 2 ");
        }else{
            // No es Multiplo de 2 
            NumerosMuliplo.push("El numero " + NumerosUsuarios[i] + " no es multiplo de 2 ");
        }
    }

}
function MultiploShow()
 {
    document.write("<h3><strong> Resultado de los Numeros Multiplos de 2  </strong></h3>\n");
     var x = 0 ;
     do{
        document.write(NumerosMuliplo[x] + "\n");
        document.write("<br></br>");
        x =  x + 1 ;
     }while( x < NumerosMuliplo.length);

}
function AddElemet() {

    if (NumerosUsuarios.length < 4) {
        var Numero = prompt("Ingrese el Numero : "); // Obtener el Numero Ingresado por el Usuario 

        if (Numero === "") {
            //alert("El dato Ingresado es Vacio.");
            document.write("<h3><strong>No puedes tener datos Vacios </strong></h3>");
            
        }
        else {
            if (NumerosUsuarios.length === 0) {
                NumerosUsuarios.push(parseInt(Numero)); // Agregar Numero 

            }
            else {
                var result = Validator(parseInt(Numero));
                if (result) {
                    document.write("<h3><strong>No puedes tener Numeros Iguales</strong></h3>");
                } else {
                    NumerosUsuarios.push(parseInt(Numero));  // Agregar el Elemento

                }
            }
        }
    } else if (NumerosUsuarios.length === 4) {
        // Desabilitar el Boton
        DesabilitarBtn();
        // Functiones de resultado 
        ParImpar();
        Primos();
        PositNegaNeu();
        Multiplo();
        // Functiones Mostrado 
        ParImparShow();
        PrimosShow();
        PositNegaNeuShow();
        MultiploShow();
    }
    else { }
};

