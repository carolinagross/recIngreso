function mostrar()
{
let sexo;
let carrera;
let edad;
let nombre;
let promedio;
let materiascantidad;
let flagfisica=1;
let nombremejorpromedio;
let mejorpromedio;
let flagmujerjoven =1;
let edadmujerjoven;
let nombremujerjoven;
let contfisica =0;
let contsistemas =0;
let contquimica =0;
let totalalumnos;
let porcentajefisica;
let porcentajequimica;
let porcentajesistemas;
let flagnoquimica =0;
let nombrenoquimica;
let edadnoquimica;
let mayorcantidadnoquimica;



    for (let i = 0 ; i <500; i++ ){

        nombre = prompt ("ingrese su nombre");
 carrera = prompt("ingrese su carrera");
 while (carrera !="quimica" &&  carrera != "fisica" && carrera !="sistemas"){
    carrera = prompt("error. ingrese su carrera");
 }
        sexo = prompt("ingrese su sexo f o m o no binario");
        while ( sexo!="f" && sexo!="m" && sexo!="no binario" ){
            sexo = prompt("Error.ingrese su sexo f o m o no binario");
        }

            edad= parseInt(prompt("ingrese su edad"));
            while ( isNaN(edad) || edad<0 ){
                edad= parseInt(prompt("Error. ingrese su edad"));
            }
promedio = parseInt(prompt("ingrese su nota entre 0 y 10"));
while (promedio <0 || promedio > 10){
    promedio = parseInt(prompt("error. ingrese su nota entre 0 y 10"));
}
 materiascantidad = prompt("ingrese la cantidad de materias entre 1 y 5 ");
 while ( materiascantidad < 1 ||  materiascantidad> 5 ){
    materiascantidad = prompt("ingrese la cantidad de materias entre 1 y 5 ");
 }

 if ( carrera == "fisica" && (flagfisica || promedio > mejorpromedio)){
     mejorpromedio = promedio;
     nombremejorpromedio = nombre;
     flagfisica =0;
 }

 if (sexo == "f" && ( flagmujerjoven || edad < edadmujerjoven)){
     edadmujerjoven = edad;
     nombremujerjoven = nombre;
     flagmujerjoven =0;
 }

 if (carrera == "quimica"){
     contquimica++;
 } else if (carrera =="sistemas"){
     contsistemas++;
 }else {
     contfisica++;
 }
 if (carrera != "quimica" && (flagnoquimica || materiascantidad > mayorcantidadnoquimica))
 {
     mayorcantidadnoquimica = materiascantidad;
nombrenoquimica = nombre;
edadnoquimica = edad;
flagnoquimica =1;
 }

    }//del for

totalalumnos = contfisica + contquimica + contsistemas;
  porcentajequimica = (contquimica * 100)/ totalalumnos;
  porcentajesistemas = (contsistemas *100) / totalalumnos;
  porcentajefisica = (contfisica *100) / totalalumnos;

    console.log("El nombre del mejor promedio de los alumnos que estudian Fisica " + nombremejorpromedio);
console.log("el nombre de la mujer mas joven " + nombremujerjoven);
console.log(" el porcentaje de estudiantes de quimica % " +porcentajequimica + "porcentaje sistemas % " + porcentajesistemas + "porcentaje fisica % " + porcentajefisica );
console.log("La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimic " + edadnoquimica + nombrenoquimica);
}