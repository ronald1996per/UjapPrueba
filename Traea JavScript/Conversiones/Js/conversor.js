$(document).ready(function()
{   
     // Elmentos a Acciones 
     var BtnCalcular = document.getElementById("Calcular");
     var BtnLimpiar  = document.getElementById("Limpiar");
 
BtnCalcular.addEventListener('click',Calcular);
BtnLimpiar.addEventListener('click',Clear);

    // Limpiar los input 
function Clear()
{
    // Elmentos a Limpiar 
    var Numero =document.getElementById("numero");
    var Result =document.getElementById("result");

    Numero.value = "" ;
    Result.value = "" ;


    // Limpiar Check Box 
    // Elementos Check De 
    var DElement  = Dch();
    var AElement  = Ach();

    for(var i = 0 ; i < DElement.length; i++)
    {
           DElement[i].checked = false;
    }
    for(var i = 0 ; i < AElement.length; i++)
    {
           AElement[i].checked = false;
    }
}
// Calcular 
function Calcular()
{
    var Numero =document.getElementById("numero").value; // Dato de entrada a Calcular  
    // Validar 
        if (Numero === "") {
            alert("El numero a Calcular esta vacio");
        } else {
            // Acciones 
            var dato = parseInt(Numero);


            // Elemento retorna  "A"
            var AElement = ASelect();
            // Elemento retorna  "D"
            var DElement = DSelect();
            if(DElement === false || AElement === false)
            {
                alert("Debes seleccionar las Opciones dadas");
            }
            else{
                CalculoGeneral(dato,DElement,AElement);
            }
        }
    };

    // Terner check Arreglos Actual 
    function Ach(){
        var D = new Array();
            // Elmentos A 
            var ASegundos  =document.getElementById("AexampleRadios1");
            var AMinutos =document.getElementById("AexampleRadios2");
            var AHoras =document.getElementById("AexampleRadios3");
            var ADias =document.getElementById("AexampleRadios4");
            var ASemanas =document.getElementById("AexampleRadios5");
            var AMeses =document.getElementById("AexampleRadios6");
            var AAnos =document.getElementById("AexampleRadios7");
             // Agregando Elementos 
    D.push(ASegundos);
    D.push(AMinutos); 
    D.push(AHoras);
    D.push(ADias);
    D.push(ASemanas);
    D.push(AMeses);
    D.push(AAnos);
        return D; // Retorno del Arreglo de A 
    }
    function Dch(){
        var D = new Array();
         // Elmentos De 
         var DSegundos  =document.getElementById("DexampleRadios1");
         var DMinutos =document.getElementById("DexampleRadios2");
         var DHoras =document.getElementById("DexampleRadios3");
         var DDias =document.getElementById("DexampleRadios4");
         var DSemanas =document.getElementById("DexampleRadios5");
         var DMeses =document.getElementById("DexampleRadios6");
         var DAnos =document.getElementById("DexampleRadios7");

    // Agregando Elementos 
    D.push(DSegundos);
    D.push(DMinutos); 
    D.push(DHoras);
    D.push(DDias);
    D.push(DSemanas);
    D.push(DMeses);
    D.push(DAnos);
        return D; // Retorno del Arreglo de A 
    }

    // Retornar Elementos Select 
    function ASelect()
    {
        var Element = "";
        var AElement = Ach();
        for( var i = 0 ; i < AElement.length ; i++)
        {
            Element = AElement[i];
            if(AElement[i].checked === true){
                return Element; // Elemento a calcular 
            }   
        }   
        return false;
    }
    function DSelect()
    {
        var Element = "";
        var DElement = Dch();
        for( var i = 0 ; i < DElement.length ; i++)
        {
            Element = DElement[i];
            if(DElement[i].checked === true){
                return Element; // Elemento a calcular 
            }   
        }   
        return false;
    }
    // Calculo General Buscar Resultado Final 
    function CalculoGeneral(Numero,D,A)
    {
        var IdElement = D.id; // Id del Elemento 
        switch (IdElement) {
            case "DexampleRadios1":
                Segundos(Numero,D,A);
                break;
            case "DexampleRadios2":
                Minutos(Numero, D, A);
                break;
            case "DexampleRadios3":
                Horas(Numero, D, A);
                break;
            case "DexampleRadios4":
                Dias(Numero, D, A);
                break;
            case "DexampleRadios5":
                Semanas(Numero, D, A);
                break;
            case "DexampleRadios6":
                Meses(Numero, D, A);
                break;
            case "DexampleRadios7":
                Anos(Numero, D, A);
                break;
            default:
                alert("Error en seleccionar case");
        }
    };
    // Structuras de Calculos 
    function Segundos(Numero,D,A)
    {
         // Elementos Mostrado 
        var Numero =document.getElementById("numero");
        var Result =document.getElementById("result");
        var IdElement = A.id; // Id del Elemento 
        // Buscando a "A"
        switch (IdElement) {
            case "AexampleRadios1":
                // Seria el Mismo Numero
                var DatosSegundos = parseInt(Numero.value);
                Result.value = DatosSegundos + " " + " Segundos";
                break;
            case "AexampleRadios2":
                var valor = parseFloat(Numero.value / 60);
                Result.value = valor + " " + " Minutos";
                break;
            case "AexampleRadios3":
                 var valor = parseFloat(Numero.value / 60);
                 Result.value = valor + " " + "Horas";
                break;
            case "AexampleRadios4":
                var DatosDias = 24 * 60 ;
                var valor = parseFloat(Numero.value / DatosDias);
                Result.value = valor + " " + "Dias";
                break;
            case "AexampleRadios5":
                var DatosSemanas = (24 * 7) * 60 ;
                var valor = parseFloat(Numero.value / DatosSemanas);
                Result.value = valor + " " + "Semanas";
                break;
            case "AexampleRadios6":
                var Mes = new Date(); // Obtener el Mes Actual 
                var DatosMeses = Mes.getMonth();
                var valor = parseFloat(Numero.value / DatosMeses);
                Result.value = valor + " " + "Meses";
                break;
            case "AexampleRadios7":
                var DatosAnos = (24 * 365) * 60;
                 var valor = parseFloat(Numero.value / DatosAnos);
                Result.value = valor + " " + "Anos";
                break;
            default:
                alert("Error en seleccionar case");
        }

    };
    function Minutos(Numero,D,A)
    {
         // Elementos Mostrado 
        var Numero =document.getElementById("numero");
        var Result =document.getElementById("result");
        var IdElement = A.id; // Id del Elemento 
        // Buscando a "A"
        switch (IdElement) {
            case "AexampleRadios1":
                // Seria el Mismo Numero
                var DatosSegundos = Numero.value * 60 ;
                Result.value = DatosSegundos + " " + " Segundos";
                break;
                case "AexampleRadios2":
                var valor = parseFloat(Numero.value);
                Result.value = valor + " " + " Minutos";
                break;
                case "AexampleRadios3":
                 var valor = parseFloat(Numero.value / 60);
                 Result.value = valor + " " + "Horas";
                break;
                case "AexampleRadios4":
                var DatosDias = 24 * 60 ;
                var valor = parseFloat(Numero.value / DatosDias);
                Result.value = valor + " " + "Dias";
                break;
                case "AexampleRadios5":
                var DatosSemanas = (24 * 7) * 60 ;
                var valor = parseFloat(Numero.value / DatosSemanas);
                Result.value = valor + " " + "Semanas";
                break;
                case "AexampleRadios6":
                var Mes = new Date(); // Obtener el Mes Actual 
                var DatosMeses = Mes.getMonth();
                var valor = parseFloat(Numero.value / DatosMeses);
                Result.value = valor + " " + "Meses";
                break;
                case "AexampleRadios7":
                var DatosAnos = (24 * 365) * 60;
                 var valor = parseFloat(Numero.value / DatosAnos);
                Result.value = valor + " " + "Anos";
                break;
            default:
                alert("Error en seleccionar case");
        }

    };
    function Horas(Numero,D,A)
    {
         // Elementos Mostrado 
        var Numero =document.getElementById("numero");
        var Result =document.getElementById("result");
        var IdElement = A.id; // Id del Elemento 
        // Buscando a "A"
        switch (IdElement) {
            case "AexampleRadios1":
               
                var DatosSegundos = ( Numero.value * 60 ) * 60 ;
                Result.value = DatosSegundos + " " + " Segundos";
                break;
            case "AexampleRadios2":
                var valor = parseFloat(Numero.value) * 60 ;
                Result.value = valor + " " + " Minutos";
                break;
            case "AexampleRadios3":
                 // Seria el Mismo Numero
                 var valor = Numero.value;
                 Result.value =  valor + " " + "Horas";
                break;
            case "AexampleRadios4":
                var DatosDias = 24 ;
                var valor = parseFloat(Numero.value / DatosDias);
                Result.value = valor + " " + "Dias";
                break;
            case "AexampleRadios5":
                var DatosSemanas = (7 * 24 );
                var valor = parseFloat(Numero.value / DatosSemanas);
                Result.value = valor + " " + "Semanas";
                break;
            case "AexampleRadios6":
                var Mes = new Date(); // Obtener el Mes Actual 
                var DatosMeses = Mes.getMonth();
                var valor = parseFloat(Numero.value / DatosMeses);
                Result.value = "Error";
                break;
            case "AexampleRadios7":
                var DatosAnos = (24 * 365);
                 var valor = parseFloat(Numero.value / DatosAnos);
                Result.value = valor + " " + "Anos";
                break;
            default:
                alert("Error en seleccionar case");
        }

    };
    function Dias(Numero,D,A)
    {
         // Elementos Mostrado 
        var Numero =document.getElementById("numero");
        var Result =document.getElementById("result");
        var IdElement = A.id; // Id del Elemento 
        // Buscando a "A"
        switch (IdElement) {
            case "AexampleRadios1":
               
                var DatosSegundos = ((Numero.value * 24) * 60) * 60;
                Result.value = DatosSegundos + " " + " Segundos";
                break;
                case "AexampleRadios2":
                var valor = ( Numero.value * 24 ) * 60;
                Result.value = valor + " " + " Minutos";
                break;
                case "AexampleRadios3":
                 // Seria el Mismo Numero
                 var DatosHoras= Numero.value  * 24;
                 Result.value =  DatosHoras + " " + "Horas";
                break;
                case "AexampleRadios4":
                var DatosDias = Numero.value;
                
                Result.value = DatosDias + " " + "Dias";
                break;
                case "AexampleRadios5":
                var DatosSemanas = (Numero.value / 7 );
                var valor = parseFloat(Numero.value / DatosSemanas);
                Result.value = valor + " " + "Semanas";
                break;
                case "AexampleRadios6":
                var Mes = new Date(); // Obtener el Mes Actual 
                var DatosMeses = Mes.getMonth();
                var valor = parseFloat(Numero.value / DatosMeses);
                Result.value = "Error";
                break;
                case "AexampleRadios7":
                var DatosAnos = (Numero.value / 7 );
               
                Result.value = DatosAnos + " " + "Anos";
                break;
            default:
                alert("Error en seleccionar case");
        }

    };
    function Semanas(Numero,D,A)
    {
         // Elementos Mostrado 
        var Numero =document.getElementById("numero");
        var Result =document.getElementById("result");
        var IdElement = A.id; // Id del Elemento 
        // Buscando a "A"
        switch (IdElement) {
            case "AexampleRadios1":
               
                var DatosSegundos = ((( Numero.value *  7 ) * 24) * 60) * 60;
                Result.value = DatosSegundos + " " + " Segundos";
                break;
                case "AexampleRadios2":
                var valor = ( ( Numero.value * 7 ) * 24 ) * 60;
                Result.value = valor + " " + " Minutos";
                break;
                case "AexampleRadios3":
                 // Seria el Mismo Numero
                 var DatosHoras= ( ( Numero.value * 7 ) * 24 );
                 Result.value =  DatosHoras + " " + "Horas";
                break;
                case "AexampleRadios4":
                var DatosDias = Numero.value * 7 ;
                
                Result.value = DatosDias + " " + "Dias";
                break;
                case "AexampleRadios5":
                var DatosSemanas = Numero.value;
                
                Result.value = DatosSemanas + " " + "Semanas";
                break;
                case "AexampleRadios6":
                var Mes = new Date(); // Obtener el Mes Actual 
                var DatosMeses = Mes.getMonth();
                var valor = parseFloat(Numero.value / DatosMeses);
                Result.value = "Error";
                break;
                case "AexampleRadios7":
                var DatosAnos = (Numero.value / 7 );
               
                Result.value = DatosAnos + " " + "Anos";
                break;
            default:
                alert("Error en seleccionar case");
        }

    };
    function Meses(Numero,D,A)
    {
         // Elementos Mostrado 
        var Numero =document.getElementById("numero");
        var Result =document.getElementById("result");
        var IdElement = A.id; // Id del Elemento 
        // Buscando a "A"
        switch (IdElement) {
            case "AexampleRadios1":
                var DatosSegundos = ((Numero.value * 24) * 60) * 60;
                Result.value = DatosSegundos + " " + " Segundos";
                break;
                case "AexampleRadios2":
                var valor = ( Numero.value * 24 ) * 60;
                Result.value = valor + " " + " Minutos";
                break;
                case "AexampleRadios3":
                 // Seria el Mismo Numero
                 var DatosHoras= Numero.value  * 24;
                 Result.value =  DatosHoras + " " + "Horas";
                break;
                case "AexampleRadios4":
                var DatosDias = Numero.value;
                
                Result.value = DatosDias + " " + "Dias";
                break;
                case "AexampleRadios5":
                var DatosSemanas = (Numero.value * 4 ) ;
                
                Result.value = DatosSemanas + " " + "Semanas";
                break;
                case "AexampleRadios6":
                var DatosMeses = Numero.value ;
                Result.value = DatosMeses + " " + "Meses";
                break;
                case "AexampleRadios7":
                var DatosAnos = (Numero.value / 7 );
               
                Result.value = DatosAnos + " " + "Anos";
                break;
            default:
                alert("Error en seleccionar case");
        }

    };
    function Anos(Numero,D,A)
    {
         // Elementos Mostrado 
        var Numero =document.getElementById("numero");
        var Result =document.getElementById("result");
        var IdElement = A.id; // Id del Elemento 
        // Buscando a "A"
        switch (IdElement) {
            case "AexampleRadios1":
                var DatosSegundos = ( ( ( ( ( Numero.value * 365 ) * 24 ) * 60) ))*60;
                Result.value = DatosSegundos + " " + " Segundos";
                break;
                case "AexampleRadios2":
                var valor = ( ( ( ( Numero.value * 365 ) * 24 ) * 60) );
                Result.value = valor + " " + " Minutos";
                break;
                case "AexampleRadios3":
                 // Seria el Mismo Numero
                 var DatosHoras= ( ( Numero.value  * 365) *  24 );
                 Result.value =  DatosHoras + " " + "Horas";
                break;
                case "AexampleRadios4":
                var DatosDias = (Numero.value  * 365);
                                    // 168 Semanas * 365

                Result.value = DatosDias + " " + "Dias";
                break;
                case "AexampleRadios5":
                var DatosSemanas =  ( 12 * 4 )  ;
                
                Result.value = DatosSemanas + " " + "Semanas";
                break;
                case "AexampleRadios6":
                
                var DatosAnos = (Numero.value * 12 ) ;
                Result.value = DatosAnos + " " + " Meses ";
                break;
                case "AexampleRadios7":
                var DatosAnos = Numero.value;
               
                Result.value = DatosAnos + " " + "Anos";
                break;
            default:
                alert("Error en seleccionar case");
        }

    };
}); 