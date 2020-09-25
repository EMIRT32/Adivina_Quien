/*
document.getElementById('display').value=0;
const porcentaj = document.getElementById('porcentaj');
const ce = document.getElementById('CE');
const c = document.getElementById('C');
const borrar = document.getElementById('del');
const x = document.getElementById('x');
const xAla2 = document.getElementById('x2');
const raiz = document.getElementById('raiz');
const dividir = document.getElementById('divi')
const n7 = document.getElementById('7');
const n8 = document.getElementById('8');
const n9 = document.getElementById('9');

const multiplicacion = document.getElementById('por');
const n4 = document.getElementById('4');
const n5 = document.getElementById('5');
const n6 = document.getElementById('6');
const restar = document.getElementById('resta');
const n1 = document.getElementById('1');
const n2 = document.getElementById('2');
const n3 = document.getElementById('3');
const suma = document.getElementById('+')
const masMenos = document.getElementById('mm');
const n0 = document.getElementById('0');
const punto = document.getElementById('punto');
const igual = document.getElementById('igual');

porcentaj.addEventListener('click', ()=>{
    alert("hola %")
})
ce.addEventListener('click', ()=>{
    alert("hola este es el evento CE");
})
c.addEventListener('click', ()=>{
    alert("hola este es el evento C");
})
borrar.addEventListener('click', ()=>{
    alert("hola este es el evento borrar");
})
x.addEventListener('click', ()=>{
    alert("hola este es el evento x");
})
xAla2.addEventListener('click', ()=>{
    alert("hola este es el evento xAla2");
})
raiz.addEventListener('click', ()=>{
    alert("hola este es el evento raiz");
})
dividir.addEventListener('click', ()=>{
    alert("hola este es el evento dividir");
})
n7.addEventListener('click', ()=>{
    alert("hola este es el evento n7");
})
n8.addEventListener('click', ()=>{
    alert("hola este es el evento n8");
})
n9.addEventListener('click', ()=>{
    alert("hola este es el evento n9");
})

multiplicacion.addEventListener('click', ()=>{
    alert("hola este es el evento multiplicacion");
})
n4.addEventListener('click', ()=>{
    alert("hola este es el evento n4");
})
n5.addEventListener('click', ()=>{
    alert("hola este es el evento n5");
})
n6.addEventListener('click', ()=>{
    alert("hola este es el evento n6");
})
restar.addEventListener('click', ()=>{
    alert("hola este es el evento restar");
})
n1.addEventListener('click', ()=>{
    alert("hola este es el evento n1");
})
n2.addEventListener('click', ()=>{
    alert("hola este es el evento n2");
})
n3.addEventListener('click', ()=>{
    alert("hola este es el evento n3");
})
suma.addEventListener('click', ()=>{
    alert("hola este es el evento suma");
})
masMenos.addEventListener('click', ()=>{
    alert("hola este es el evento masMenos");
})
n0.addEventListener('click', ()=>{
    alert("hola este es el evento n0");
})
punto.addEventListener('click', ()=>{

    alert("hola este es el evento punto");
})
igual.addEventListener('click', ()=>{
    alert("hola este es el evento igual");
})
*/
document.getElementById("display").value=0;
var cifra=" ";
var acumulado=0;
var sum=false;
var restar=false;
var multiplica=false;
var dividi=false;
var rai=false;
var primer_operacion=true;

document.getElementById("display").value=0;
function display_numeros(numero){


	document.getElementById("display").value=cifra+numero;

	cifra=document.getElementById("display").value;


}

function suma(){
	//vamos a evaluar la variable restar, si es true es porque lo ultimo que hicimos es restar
	if(restar){

		acumulado=acumulado-parseInt(cifra);
		document.getElementById("display").value=acumulado;

	}
	//en caso que no sea la resta la ultimo que hicimos se viene por el else que por ahora es una resta.
	else{
		//voy guardando en acumulado los valores que deseo sumar, el problema es que concatena porque la varibale cifra almacena texto
		//lo soluciono haciendo uso del paseInt, de tal modo que convierto el texto en numeros, para poderlos sumar.
		acumulado=acumulado+parseInt(cifra);
		document.getElementById("display").value=acumulado;

	}
	cifra=" ";
	//cambiamos de estado la variable dado que acabamos de ejecutar una suma, ya que se llamo la funcion suma, se pulso el boton +
	sumar=true;
	restar=false;
	primer_operacion=false;//reseteo esta variable para que cuando cargue la calculadora no nos genere problemas

}

function resultado(){
	//es lo mismo que escribir if(sumar)
	if(sumar==true){
	/*agrega el ultimo número que ingresamos en el display, con la función, suma como ya no sigo oprimiento el +, sino que al ingresr el siguiente numero a sumar ya requiero oprimir el =, se queda el ultimo numero del display sin sumar, esto lo soluciono con la siguiente instrucción, en donde tomo lo acumulado y le adiciono lo que actualmente tengo en el display*/
	document.getElementById("display").value=acumulado+parseInt(cifra);

	}
	else if(restar==true){
		/*agrega el ultimo número que ingresamos en el display, con la función, resta como ya no sigo oprimiento el -, sino que al ingresr el siguiente numero a restar ya requiero oprimir el =, se queda el ultimo numero del display sin restar, esto lo soluciono con la siguiente instrucción, en donde tomo lo acumulado y le resto lo que actualmente tengo en el display*/
	document.getElementById("display").value=acumulado-parseInt(cifra);

	}
	else if (multiplica==true) {
		document.getElementById("display").value=acumulado*parseInt(cifra);
	}
	else if (dividi==true) {
		document.getElementById("display").value=acumulado/parseInt(cifra);
	}

	else if (raiz==true) {
	var raiz=	document.getElementById("display").value;
		raiz=(Math.sqrt(raiz));
		document.getElementById("display").value=acumulado/parseInt(cifra);
	}
	//almacenamos en acumulado, lo que queda en el display luego de pulsar el "="
	acumulado=parseInt(document.getElementById("display").value);

	/*cifra la ponemos en 0, para poder introducir un nuevo número en caso que desee realizar una nueva operación a partir del resultado que obtuveluego de pulsar el = */
	cifra=0;
}
function borrar(){
	document.getElementById("display").value=0;
	acumulado=0;
}



