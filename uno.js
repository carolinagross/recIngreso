
function mostrar()
{
let nombre;
let edad;
let sexo;
let puesto;
let sueldo;
let acumA =0;
let contA =0;
let acumP =0;
let contP =0;
let acumQa =0;
let contQa =0;
let seguir ="s";
let promedioP;
let promedioA;
let promedioQa;
let flagmayorsueldo =1;
let mayorsueldo;
let nombremayorsueldo;
let flagmujer =1;
let nombremayorsueldomujer;
let mayorsueldomujer;
let contnobinariosprogramadores =0;
do {

	nombre = ("ingrese su nombre");
	edad= parseInt(prompt("ingrese su edad"));
while ( isNaN(edad) || edad<0 ){
	edad= parseInt(prompt("Error. ingrese su edad"));
}
sexo = prompt("ingrese su sexo f o m o no binario");
while ( sexo!="f" && sexo!="m" && sexo!="no binario" ){
	sexo = prompt("Error.ingrese su sexo f o m o no binario");
}
puesto =("ingrese su puesto");

while (puesto!= "programador" && puesto!= "analista" && puesto!= "Qa" ){
	puesto =("error. ingrese su puesto");
}

sueldo = parseInt(prompt("ingrese su sueldo entre 15000 y 70000 "));
while ( sueldo < 15000 && sueldo > 70000){
	sueldo = parseInt(prompt("error. ingrese su sueldo entre 15000 y 70000 "));
}

if ( puesto =="programador" ){
	acumP = acumP + sueldo;
	contP ++;

}else if ( puesto == "analista"){
	acumA = acumA + sueldo;
	contA++;
}else {
	acumQa = acumQa + sueldo;
	contQa++;
}

if (flagmayorsueldo || sueldo > mayorsueldo){
	mayorsueldo = sueldo;
	nombremayorsueldo = nombre;
	flagmayorsueldo= 1;

}


if ( sexo == "f" && (flagmujer || sueldo > mayorsueldomujer))
{
mayorsueldomujer = sueldo;
nombremayorsueldomujer = nombre;
flagmujer =0;
}

if ( sexo == "no binario" )
if (puesto == "programador"  && (sueldo > 20000 || sueldo < 55000 )){
	contnobinariosprogramadores++;
}

 seguir = prompt("desea seguir ingresando");
} while(seguir == "s")// corchete del do while






if ( contA != 0 ){
	promedioA = acumA / contA;
}

if (contP != 0){
	promedioP = acumP / contP;
}

if ( contQa !=0){
	promedioQa = acumQa / contQa;
}






 console.log("a- promedio analista " + promedioA + "promedio programador " + promedioP + "promedioQa " + promedioQa);

console.log("el nombre de la persona con mayor sueldo " + nombremayorsueldo);

console.log("el nombre de la mujer con mayor sueldo " + mayorsueldomujer);
console.log("la cantidad de no binarios con sueldo entre 20000 y 55000 es " + contnobinariosprogramadores);

}



