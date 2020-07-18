// var redHotChiliPeppers = "Give it Away";
/*var rhcp = "Give it away";
var metallica = "Enter Sandman";


alert (rhcp);
alert (metallica);
*/
/*
function uno (){
    var gato = "esto es un gato";
}

//alert ();

// VAR o VARIABLES y CONST CONSTANTES/

//console.log y document.write
// document.write(typeof VARIABLE); te dice que tipo de variable es: string, numeral, bool, date, etc.

var numero = 1234567;
var numerodos = 12345678;
var fecha = new Date(); //vacío te tira la hora local
var verdadero = true; //booleano
var falso = false; //booleano

var ingles = "I'm loli perez";

//document.write(numero / numerodos + numero * numero);
document.write(fecha.getSeconds() + " : " + fecha.getMinutes());

//document.write('  ' + typeof verdadero);

*/
/*
var primera = 0;
var segunda = 10;
var tercera = 30;
var cuarta = segunda + primera * tercera;
*/

//document.write (cuarta / primera - ++tercera);
//document.write (primera == segunda ? "ES IGUAL" : "ES DISTINTO")

/*if (primera==segunda && segunda!=Number){
        document.write("ES IGUAL")
} else{
    document.write("ES DISTINTUUU")
}   
/*while (primera<=20){
    document.write(primera +"<br>");
    primera++;
}
/*do{
    document.write(primera + "<br>");
    primera++;
}while (primera<=20)

// FOR var i.. valor, condicion, suma
for(var i=1; i<=16; i++){
document.write
if (i==1){
    document.write(i + "botella de ron" + "<br>");
}
if (i>1 && i<7){
    document.write(i + "botellas de ron" + "<br>");
};
if (i>7 && i<15){
    document.write(i + "boterlla se grooon" + "<br>");
};
if (i>15){
    document.write(i + "botasssss de bloooon" + "<br>");
};
};
/*
 /******************************************************************************
 * 
 * 1. Pedir un día de la semana por prompt en texto 
 * (ej: "Lunes")
 * 2. Devolver el número del día (ej: 2)
 * 3. En caso de que el día ingresado no exista, tirar
 *    un error y agarrarlo, e imprimirlo.
 * 
 ****************************************************************************/

 //PRUEBA PREGUNTA, RESPUESTA
 /*
 var dia = prompt("Escoga un día de la semana (lunes a domingo)");
 var ndia = "No has seleccionado ningún día de la semana.";

        switch(dia){
            case "lunes": ndia="Es el día 2 de la semana católica."; break;
            case "martes": ndia="Es el día 3 de la semana católica."; break;
            case "miercoles": ndia="Es el día 4 de la semana católica."; break;
            case "jueves": ndia="Es el día 5 de la semana católica."; break;
            case "viernes": ndia="Es el día 6 de la semana católica."; break;
            case "sabado": ndia="Es el día 7 de la semana católica."; break;
            case "domingo": ndia="Es el día 1 de la semana católica."; break;
            default: alert("Ese no es un día católico... Blasfemo!");
        }       
document.write(ndia);
*/

// FOR, LE DOY VALOR A LA VARIABLE, LE DOY UNA CONDICION QUE SEA MENOR O IGUAL QUE 20, LE SUMO 1 A LA VARIABLE.
// CON EL IF Y EL CONTINUE ELIMINE DE LA SECUENCIA NUMERICA AL 5, AL 7 Y AL 14.
/*
for (var n=1; n <= 20; n++) {
    if(n==5 || n== 7 || n==14){continue;
    };
    document.write(n + "<br>");
};
*/

// PROBEMOS ELIMINAR DEL LISTADO DEL 12 AL 16
/*
for (var n=1; n<=20; n++) {
    if(n>=12 && n<=16 ){continue;}
    };
    document.write(n + "<br>");
*/ 
//NO FUNCIONA, por que mayor que 12 incluye del 12 al 20, y menor que 16 incluye del 16 al 0)
// SE DEBE UTILIZAR EL CONDICIONAL "&&"
/*
for (var n=1; n <= 20; n++) {
    if(n>=12 && n<=16){continue;
    }
    document.write(n + "<br>");
};
*/

// ----------------------FUNCIONES---------------------------------
// ACCION FUNCION, LUEGO NOMBRE PARA LA FUNCION. EN LA FUNCION DE EJEMPLO CREO UNA VARIABLE A LA QUE LE ASIGNO UNA TAREA Y LE ESPECIFICO A LA FUNCION QUE LA MUESTRE.
/*
function uno(){
    var saludoaldoc = document.write("Buenas tardes doctor!");
    return saludoaldoc;
};
//ahora la puedo llamar
uno();
*/ 

/* function unob(){
    for (var n=1; n <= 20; n++) {
        if(n>=12 && n<=16){continue;
        };
        document.write(n + "<br>");
    };
};
unob(); */

// FUNCION SIN PARAMETROS junto al nombre de la función los paréntesis están vacíos;
/*
function dos(a, b, c, d){
    var presentacion = document.write("NOMBRE: "+a+"<br>"+"APELLIDO: "+b+"<br>"+"EDAD: "+c+"<br>"+"DNI: "+d+"<br>"+"<br>");
    return presentacion;
};
dos("Luis", "Robertazzi", "34 años","32021205");
dos("Dolores", "Perez Laborda", "27 años","37375725");
dos("Paco", "Plaza","52 años","2309818");
*/
// si al parámetro no lo llamo, aparece como UNDEFINED.


//VARIABLE DEL PARÁMETRO CON VALOR NULO
/*function tres(nombre="", apellido=""){
    var nombreCompleto = nombre+" "+apellido;
    return document.write("NOMBRE COMPLETO: "+nombreCompleto);
};
tres("Luis", "Robertazzi");
*/

// CONDICIONAL PARA UNA FUNCION, CASO TAL NO INGRESEN LOS DATOS CORRECTAMENTE
// NULL es que está vacío: en caso no este vacía, ejecutamos una acción, si lo está es porque no pusieron datos
/*
function cuatro(nombre, apellido){
    if(nombre !=null && apellido !=null ){
        respuesta = document.write("Nombre: "+nombre+"<br>"+"Apellido: "+apellido+"<br>"+"<br>");
    }else{
        respuesta = document.write("Por favor ingrese sus datos completos."+"<br>"+"<br>");
    };
    return respuesta;
}
cuatro();
cuatro("Carlos");
cuatro("Carlos","Perez");
*/

// COMBINAR FUNCIONES CON ARRAY
/*
function cinco(...dias){
    return document.write(dias);
};
cinco("lunes", "martes", "miercoles", "jueves", "viernes");
*/

//mediante el FOR-LET-OF le asigno, en este ejemplo, un espaciado a la variable dias sin necesidad de ir uno a uno, porque el ... no da especificidad de cantidad
// DEVUELVE UN ARRAY;
/*
function cincob(...dias){
    for(let uno of dias){    
    document.write(uno + "<br>");
    };
};
cincob("lunes", "martes", "miercoles", "jueves", "viernes");
*/

// SPREAD - permitir enviar varios datos a la función; AQUÍ ENVIAMOS UN ARRAY;
/*
function seis(nombre, peso, precio){
    return "Producto: "+nombre+"<br>Peso: "+ peso+"<br>Peso: "+ precio+"<br>"+"<br>";
};
var toy = ['Soldadito', '25gr', '25USD'];

document.write( seis (...toy));
*/
 
// FUNCIONES ANONIMAS (NO TIENE NOMBRE) LOS PARENTESIS DESPUES DEL LLAMADO SIETE SON POR LOS PARAMETROS DE LA FUNCION QUE EN ESTE CASO ESTÁN VACÍOS;
/*
    var siete =function (){ 
        resultado = "Hola a todos!<br>";
        return resultado;
    };
document.write( siete() );
*/

// AL SUMARLE PARENTESIS AL VALOR "APELLIDO" SE CONVIERTE EN FUNCION, SINO SEGUIRÍA SIENDO UNA VARIABLE; LA VARIABLE B ME PERMITE QUE SE ESCRIBE EN EL DOC.
/*
var a = function(nombre, apellido){var e=nombre; apellido(e); };
var b = function(i) {document.write(i); };

a("Luis", b);
*/

// ARROW => no es mayor o igual que (>=) 
/*
var uno = nombre => nombre+"<br>";
// equivale a function uno(nombre){ return nombre;

document.write(uno("Luis Enrique Robertazzi"));

var dos = (nombre, apellido) => nombre+" "+ apellido+"<br>";

document.write(dos("Luis Enrique", "Robertazzi"));
*/

//----------------------------------------EVENTOS Y GESTORES 2HRS 54MIN---------------------------------------------------

// ANIMACIONES PARA MOUSE - relacionado con el html

//1 ONCLICK

/*function push(){
    alert("Hola sr.");
};

function push2(){
    alert("Hola sr.");
};

function push3(){
    alert("Se te escapo el ratón!");
};}
*/
/*
var eventoUno = document.querySelector(".boton1");
eventoUno.addEventListener("click", function(){
    alert("¿Qué me tocas ameo!!??");
});

let eventoDos = document.querySelector(".boton2");
eventoDos.addEventListener("mouseover", (event) => {
    alert("Ni te me acerque ameeoo!");
});


var eventoTres = document.querySelector("#boton3");
eventoTres.addEventListener("mouseout", (event) => {
    alert("Adonde vas ameeoo??!");
});
*/

// eventos del teclado keydown - keypress - keyup

//window.addEventListener("keydown", function() {alert("Acción")});
//window.addEventListener("keypress", function() {alert("Acción")});
//window.addEventListener("keyup", function() {alert("Acción")});

// agregando un evento a la función para que me brinde el código de la tecla que toco
/*window.addEventListener("keypress", function(event) {
    alert(event.keyCode);
} );
*/
//devuelve el valor de la tecla
/*
window.addEventListener("keypress", function(event) {
    alert( "Tecla: "+String.fromCharCode(event.keyCode)+" \n "+"N°: "+(event.keyCode));
} );
*/

//EVENTOS DE CARGA Y TEMPORIZADOR
/*
window.addEventListener("load", function(){
    alert("Carga completa");
});
*/
//setInterval
//setTimeout

//setInterval(_,_);

/*var tiempo = setInterval(
    function(){
        document.write("TEXTO INICIAL <br>")
    }, 5000
);*/

//setTimeout(_,_); PRIMERO PARAMETRO FUNCION, SEGUNDO TIEMPO;
/*
var regresiva = setTimeout(
    function(){
        document.write("SE ACABO SU TIEMPO, Vuelva prontos! <br>")
    }, 5000 
);
*/
// EVENTOS MULTIMEDIA - PLAY - END END - 3HRS 28MIN---------------------------------------------------
//desktopvid

/*var primero = document.querySelector(".desktopVid");

primero.addEventListener("play", 
    function(){ alert("Debe ser +18 para visualizar este video.")}
);
*/
/*
var primero = document.querySelector(".desktopVid");

primero.addEventListener("ended", 
    function(){ alert("Video finalizado.")}
);
*/
/*
var primero = document.querySelector(".desktopVid");

primero.addEventListener("seeking", 
    function(){ alert("Te has movido dentro del Timeline.")}
);
*/
/*
var primero = document.querySelector(".desktopVid");

primero.addEventListener("seeking", 
    function(){ alert("Has saltado al segundo "+this.currentTime)}
);
*/

//--------------------------------CUADROS DE DIALOGO Y VENTANAS EMERGENTES - 3HRS 35MIN------------------------------------------  alert CONFIRM prompt

/*var nomolestar = "Por favor no molestar, estoy aprendiendo JS";
alert(nomolestar);*/
// o 
/*
alert("Por favor no molestar,\n estoy aprendiendo JS.\n ;)");
*/

/*var lubricante = "¿Necesita que le enviemos lubricante? \n El servicio es completamente confidencial.";
confirm(lubricante);*/
// o
/*confirm("¿Necesita que le enviemos lubricante? \n El servicio es completamente confidencial.");*/
/*
lubricante = confirm ("¿Necesita que le enviemos lubricante? \n El servicio es completamente confidencial.");

if (lubricante){
    correcto = confirm("Confirmado, lo enviaremos a su habitación al instante!/n ¿Necesita de algún otro servicio?");
}else{
    alert("Perfecto. De necesitarlo no dude en comunicarse con nostros!");
}
if (correcto){
    alert("Recibido. Ingrese a nuestro sistema \n telefónico para hacer su solicitud!");
}else {
    alert("Muy bien. Esté atento a la puerta \n para recibir su lubricante.")
}
*/
/*
lubricante = confirm ("¿Necesita que le enviemos lubricante? \n El servicio es completamente confidencial.");
if (lubricante){
    window.location="https://business.google.com/website/mroillubricantes"
}else{
    alert("Perfecto. De necesitarlo no dude en comunicarse con nostros!");
}
*/
/**/
// prompt("¿Cómo estái tío?");
/*
var nombre = prompt("Ingrese su nombre por favor.", "Su Nombre");
if(nombre) {
    document.write("Nos debes plata "+nombre+". Te queda una semana para juntar la guita o te hacemos boleta "+nombre+"ito. ");
} else if(null){
    alert("Por favor ingresa tu nombre");
} else{
    alert("Necesitamos que ingreses tu nombre.");
}
*/
// CONVERTIR UN STRING EN NUMERO y BICEVERSA---------------

/*
var a = "10.54";
var b = Number(a);
document.write(typeof b);
document.write(b);
*/
/*
var a = 20;
var b = string(a); // var b = a.toString();
document.write("La variable A es: "+typeof a+"<br>");
document.write("La variable B es: "+typeof b+"<br>");
document.write(b+" + "+b+" = "+(b+b)+"<br>");
document.write(b+" + "+b+" = "+(a+a)+"<br>");
document.write(a+"<br>");
document.write(b);
*/
// PB= ASA ENTERO Y ELIMINA DECIMALES C= RESPETA DECIMALES
var a=23.96;
var b=parseInt(a);
var c=parseFloat(a);
//document.write(c);

var a= "Hola";
var b= isNaN (a); //Is Not a number
document.write(a+"<br>¿El valor no es Numérico? "+b); //TRUE, es correcto, no es un número
// if(a == isNaN){};
var d= 16.45;
var e= Number.isInteger(d); //es un número entero
document.write("<br>"+d+"<br>¿Es número entero? "+e);

//PARA REALIZAR REDONDEO
var f= 12.3254265894;
var g= f.toFixed(2);//cuantos decimales después de la coma;
document.write("<br><br>Valor: "+f+"<br>Redondeo: "+g);

//-------------------------------- STRINGS 4HR 00MIN ----------------------------------------------------------------

var comilla = "<br><br>Probando la barra invertida para \"incluir\" comillas dentro del string";
document.write(comilla);

var espacio = "<br><br>Como trabajar los"; //para no escribirlo así "<br><br>Como trabajar los ";
var espacio2 = "espacios entre strings."; // o así " espacios entre strings";
document.write(espacio +" "+ espacio2);

//------------------------------- OTROS OBJETOS con sus PROPIEDADES Y MÉTODOS DE JS 4HR 09MIN--------------------------------------

var h= "Hola Malditos palomossss mis crackss Malditos!... Malditos...";
var i= h.match(h);
var j= "hola,Malditos,palomossss,mis,crackss,Malditos!...,Malditos...";
var k= "hola-Malditos-palomossss-mis-crackss-Malditos!...-Malditos...";
var l= "            Hola Malditos palomossss mis crackss Malditos!... Malditos...          ";
var m= "palomos";

document.write("<br><br><br>Texto Original: "+h+"<br>");
document.write("<br>Cantidad de Caracteres(incluyendo espacios): "+h.length); // UNA PROPIEDAD, CARACTERÍSTICA DE LA VARIABLE;
document.write("<br>¿En qué espacio comienza la primera palabra \"Malditos\"(index)?: "+h.indexOf("Malditos"));
document.write("<br>¿En qué espacio comienza la palabra \"mis\"(search)?: "+h.search("mis"));
document.write("<br>¿En qué espacio comienza la última palabra \"Malditos\"(lastindexof)?: "+h.lastIndexOf("Malditos"));
document.write("<br>¿Acumulemos la palabra \"Malditos\" en un array para ver cuantos tenemos(match)?: "+h.match(/Malditos/gi));
document.write("<br>A partir de la variable \"I\" almacenamos resultados en un array... :"+i);
document.write("<br>Con el índice buscamos un área; del espacio 25 los siguientes 10 caractéres: "+h.substr(25,10)); // desde X hasta X+Y
document.write("<br>Con el índice buscamos un área desde el primer caracter; desde el 35 al 61: "+h.substring(35,61)); // desde X hasta Y
document.write("<br>Con el índice me devuelve el carácter ubicado en determinado espacio; caracter n°35: "+h.charAt(35));// el caracter que le sigue al n° asignado
document.write("<br>El Texto Original ¿Comienza con la palabra Malditos? : "+h.startsWith("Malditos"));
document.write("<br>El Texto Original ¿Comienza con la palabra hola? : "+h.startsWith("hola"));
document.write("<br>El Texto Original ¿Comienza con la palabra Hola? : "+h.startsWith("Hola"));
document.write("<br>El Texto Original ¿Comienza con la letra H? : "+h.startsWith("H"));
document.write("<br>El Texto Original ¿Finaliza con la palabra Malditos...? : "+h.endsWith("Malditos..."));
document.write("<br>Dentro del Texto Original ¿se encuentra la palabra \"mis\"? : "+h.includes("mis"));
document.write("<br>En el Texto Original, partiendo del caracter n°26 ¿se encuentra la palabra \"mis\"? : "+h.includes("mis",26));

document.write("<br><br>OTROS MÉTODOS<br><br>");
document.write("<br>Comencemos por repetir el Texto Original 2 veces: "+h.repeat(2));
document.write("<br>Reemplacemos la primer palabra \"Malditos\" por \"Queridos\" : "+h.replace("Malditos","Queridos"));
document.write("<br>Mejor eliminemos la primer palabra \"Malditos\": "+h.replace("Malditos",""));
document.write("<br>Convertir el texto en un ARRAY mediante la función SPLIT: "+h.split());
console.log(h.split()); document.write("<br> Si ingresamos a la consola podemos encontrar el ARRAY del texto original; usamos CONSOLE.LOG");
console.log(j.split(",")); document.write("<br> A Partir de la variable J, uso la coma(,) como caracter separador Para convertir un STRING en un ARRAY. Ahora tengo 7 array!");
console.log(h.split(" ")); document.write("<br> Pero puedo utilizar el espacio vacío( ) como caracter separador sin la necesidad de crear una nueva variable.");
console.log(k.split("-")); document.write("<br> Podría obtener lo mismo usando un guión(-) o cualquier otro caracter.");
document.write("<br>Si deseo dejar todo el texto en minúsculas: "+l.toLowerCase());
document.write("<br>O pasarlo todo a Mayúsculas: "+l.toUpperCase());
document.write("<br>Para concatenar sin utilizar el símbolo +: "+h.concat(j,k,l, "como que no le veo mucha funcionalidad para strings..."));
document.write("<br>Probemos concatenar con variables con (,) Vs1: Hola a todos mis ", m, " cochinos de la web!");
document.write("<br>Probemos concatenar con variables con (+)Vs2: Hola a todos mis " + m + " cochinos de la web!");
document.write(`<br>Probemos concatenar con variables con (\${})Vs3: Hola a todos mis ${m} cochinos de la web!`);


//----------------------------------------ARRAYS 04HRS 50MIN--------------------------------- PARA LA ACUMULACIÓN DE DATOS

//dos formas de crear ARRAYs, LOS UNIDIMENSIONALES:
// DESDE UNA VARIABLE:
var semana = new Array("lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo", 1, 2, 3, 4, 5, 6, 7);

var semana2 = ["lunes2", "martes2", "miércoles2", "jueves2", "viernes2", "sábado2", "domingo2", 1, 2, 3, 4, 5, 6, 7];

document.write("<br><br><br>Necesito ver del Array Semana el elemento 0: "+semana[0]);
document.write("<br>Necesito ver del Array Semana  el elemento 1: "+semana[1]);
document.write("<br>Necesito ver del Array Semana el elemento 2: "+semana[2]);
document.write("<br>Necesito ver del Array Semana el elemento 3: "+semana[3]);
document.write("<br>Necesito ver del Array Semana el elemento 4: "+semana[4]);
document.write("<br>Necesito ver del Array Semana el elemento 5: "+semana[5]);
document.write("<br>Necesito ver del Array Semana el elemento 6: "+semana[6]);
document.write("<br>Necesito ver del Array Semana el elemento 7: "+semana[7]);

// LOS MULTIDIMENSIONALES (un array dentro de un array):

var mes = 
[
    "Semana 0",
    [["lunes", "martes", "miercoles", "Jueves"], "Semana 2", "Semana 3", "Semana 4"], 
    ["Semana 5", "Semana 6", "Semana 7", "Semana 8"], 
    ["Semana 9", "Semana 10", "Semana 11", "Semana 12"], 
    ["Semana 13", "Semana 14", "Semana 15", "Semana 16"], 
    "Semana 17",
];
document.write("<br><br>En un array multidimensional puedo encadenar arrays dentro de arrays: "+mes[1][0][2]);
document.write("<br>Puedo llamar elementos dentro de elementos: "+mes[3][3]);
document.write("<br>O llamar elemenos aislados sin grupo: "+mes[5]);

//probemos un ejercicio con Arreglos, o ARRAYS

var prueba = [10, 20, 30, 40, 50, 60];
var prueba2 = [10, 20, 30, 40, 50, 60];
var prueba3 = [10, 20, 30, 40, 50, 60];
document.write("<br><br><br> Del Array: var = prueba[10, 20, 30, 40, 50, 60]");
document.write("<br>Necesito saber cuantos elementos tiene: "+prueba.length);
console.log(prueba);
document.write("<br>Desde la consola podemos ver que en índice de elementos hay seis de ellos."); 
document.write("<br>Con la función PUSH puedo agregar elementos al array."+prueba2);
prueba2.push(70);
prueba2.push(80);
prueba2.push(90);
document.write("<br>En el array prueba2 podemos contabilizar tres elementos nuevos: "+prueba2.length);
document.write("<br>"+prueba2);
document.write("<br>La función POP nos da el último de los elementos del array \"prueba\": "+prueba.pop());
document.write("<br> La función JOIN convierte el array en un string. En la consola vemos la conversion PRUEBA3.");
console.log(prueba3.join());
document.write("<br> SPLIT realiza la función inversa: de STRING(cadena) a ARRAY(arreglo).");
document.write("<br> Vamos a convertir la siguiente STRING(nombres) en un ARRAY: Pepe, Juan, Manuel, Ignacio");
var nombres = ("Pepe,Juan,Manuel,Ignacio");
document.write("<br> Mediante SPLIT le asignamos a la COMA(,) la función de caracter separador(ojo con los espacios).");
var nombresSeparados = nombres.split(",");
document.write("<br> Y lo cargamos en la conosola con la nueva variable \"nombresSeparados\" para ver los elemos separados en ARRAY!");
console.log(nombresSeparados);
document.write("<br><br>ARRAY.FROM sirve para convertir en ARRAY elemenos desde el HTML.");

var cerveza = Array.from(document.querySelectorAll(".cervezas p") );
var birras = cerveza.map (marcas => marcas.textContent);
console.log(birras);
document.write("<br>Mediante un Array.From y un mapeo hemos convertido un párrafo de HTML en un array con elementos separados.");
document.write("<br><br>SORT permite ordenar una ARRAY alfabéticamente. EJ: var forros=[prime, durex, tulipan, camaleon]");
var forros = ["prime", "durex", "tulipan", "camaleon"];
var forros2 = ["prime", "durex", "tulipan", "camaleon"];
document.write(forros.sort() );
console.log(forros.sort() );
document.write("<br><br>REVERSE invierte el orden de escritura: "+forros2.reverse());

//----------------------------BUSCAR DENTRO DE ARRAY DETERMINADOS ELEMENTOS "FOR IN" 5HRS 27MIN --------------------------------------------------------
document.write ("<br><br> FOR IN <br>");

var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuday", "Sunday", "Monday"];
//----------------------------------------------------------------------------
for (let i in week){
    document.write ("<br>"+ week[i]);
};

document.write ("<br><br> FOREACH : VALOR, INDICE <br>");

week.forEach(
    (weeks, i) => document.write(i + " - " + weeks + "<br>")
);

document.write ("<br><br> FIND para que nos devuelva una palabra (SI SE REPITE EL VALOR, SOLO DEVUELVE EL PRIMERO)<br>");

var search = week.find (week2 => week2 == "Monday");
document.write(search);
var search = week.find (week2 => week2 == "Friday");
document.write("<br>"+search);

document.write ("<br><br> FINDINDEX <br>");
var search = week.findIndex (week2 => week2 == "friday");
document.write("\"friday\" se ubica en el índice: "+search);
var search = week.findIndex (week2 => week2 == "Monday");
document.write("<br>\"Monday\" se ubica en el índice: "+search);
var search = week.findIndex (week2 => week2 == "Friday");
document.write("<br>\"Friday\" se ubica en el índice: "+search);

document.write ("<br><br> FILTER, FUNCION SIMILAR A FIND PERO DEVUELVE TODOS LOS VALORES, NO SOLO EL PRIMERO. <br>");
var search = week.filter (week2 => week2 == "Monday");
document.write("\"Monday\": "+search);
var search = week.filter (week2 => week2 == "sdasd");
document.write("<br>\"sdasd\": "+search);
var search = week.filter (week2 => week2 == "Friday");
document.write("<br>\"Friday\": "+search);

document.write ("<br><br> SOME, EVALUA UN PARAMETRO DENTRO DE UN RANGO. <br>");
var unos = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var busqueda = unos.some (arroz => arroz<10);
var busqueda2 = unos.some (arroz => arroz<=10);
var busqueda3 = unos.some (arroz => arroz>60);
document.write("<br><br> Array: var unos = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];");
var valorcito = "Dentro del listado, tengo valores";
document.write("<br><br>"+valorcito+" < a 10 :"+busqueda);
document.write("<br>"+valorcito+" < o = a 10 :"+busqueda2);
document.write("<br>"+valorcito+" > a 60 :"+busqueda3);

//-----------------------------------OBJETOS-----------------------------------------------
/*
OBJETO{
    PROPIEDADES (VARIABLES) LAS PARTES
    METODOS (FUNCIONES); LAS ACCIONES
}
*/
// METODO ANTIGUO DE CREAR OBJETO
function Gato (nombre, edad, peso){
    this.nombre = nombre;
    this.edad = edad;                                // esta es la clase a partir de la cual
    this.peso = peso;                               // creo un objeto.

    this.correr = function (){
        document.write("<br><br>El gato ", nombre, " corre.");
    }
    this.garchar = function (){
        document.write("<br><br>El gato ", nombre, " garcha ATR.");
    }
};
var gato1 = new Gato("Peludo", 4, 400); // este es el objeto
var gato2 = new Gato("Manchas", 7, 250);

document.write("<br><br> TRABAJANDO CON OBJETOS.");
document.write("<br>Nombre del gato 1: "+gato1.nombre);
document.write("<br>Nombre del gato 2: "+gato2.nombre);
document.write("<br>Peso del gato 2: "+gato2.peso+" "+gato2.edad+" gr.");
document.write("<br>Edad del gato 1: "+gato1.edad+" años");
 
gato2.correr();
gato1.garchar();

// METODO ACTUAL DE CREAR OBJETO

class Gatito{
    constructor(name, age, weigh){
        this.nombrecito = name;
        this.edacita = age;
        this.pesito = weigh;
    };

    Fuck(){
        document.write("<br>El gatito "+name+" se la pasa cogiendo.");
    }
};

var gatito1 = new Gatito("Carlitos", 4, 400); // este es el objeto
var gatito2 = new Gatito("Chuletas", 7, 250);

document.write("<br><br>"+gatito1.nombrecito);
gatito1.Fuck();