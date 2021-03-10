function mostrar()
{
	let nombre;
	let cantidad;
	let marca;
	let precio;
	let descuentofelipe;
	let totalcomprafelipe;
	let descuentoargentina;
	let totalcompraargentinaluz;
	let totalcomprailuminati;
	let seguir ="s";
	let ventas;
	let perdidas;
	let acumF=0;
	let contF=0;
	let acumA=0;
	let contA=0;
	let acumI=0;
	let contI=0;
	let promedioA;
	let promedioF;
	let promedioI;
	let maxmarcaventas;







do {

	nombre = prompt("ingrese su nombre");
	cantidad = parseInt(prompt("ingrese la cantidad"));
	marca = prompt("ingrese la marca FelipeLamparas - ArgentinaLuz - Illuminatis");
	while ( marca !="felipeLamparas" &&  marca != "ArgentinaLuz" && marca != "Illuminatis" ){
		marca = prompt("error ingrese la marca FelipeLamparas - ArgentinaLuz - Illuminatis");
	}
 precio = parseInt(prompt("ingrese el precio"));
if ( marca == "felipeLamparas" && cantidad >5){
	descuentofelipe = precio * 0.1; 
	totalcomprafelipe= (precio * cantidad) - descuentofelipe;

}else if (marca == "ArgentinaLuz" && cantidad >3){
	descuentoargentina = precio *0.5;
	totalcompraargentinaluz = (precio * cantidad) -descuentoargentina;
} else {
	totalcomprailuminati = (precio * cantidad) 
}

if (marca == "felipeLamparas"){
	acumF = acumF + cantidad;
	contF++;
} else if ( marca == "ArgentinaLuz"){
	acumA = acumA + cantidad;
	contA++;
}else {
	acumI = acumI + cantidad;
	contI++;
}


 seguir = prompt("desea ingresar otra compra")
}while (seguir == "s")


ventas = totalcomprafelipe + totalcompraargentinaluz + totalcomprailuminati;
perdida = descuentofelipe + descuentoargentina;

if ( contA != 0){
	promedioA = acumA /contA;
}
if (contF !=0){
	promedioF = acumF / contF;
}

if ( contI !=0){
	promedioI = acumI/ contI;
}
  if (contA > contF && contA > contI){
	  maxmarcaventas = "argentinaluz";
  } else if ( contF>= contA && contF > contI){
	  maxmarcaventas = "felipe lamparas";
  }else {
   maxmarcaventas = "iluminatis";
  }

console.log(" la cantidad de recaudacion en el total de las ventas es " + ventas);
console.log("la cantidad de perdida es " + perdida);
console.log("promedio de csntidad de marca felipelamparas " + promedioF + "argentinaluz " + promedioA + "iluminati " + promedioI);
console.log ("La marca que mas ventas realizo "  + maxmarcaventas);



}// funcion
/*
Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente
cantidad de lamparas marca (FelipeLamparas - ArgentinaLuz - Illuminatis)
precio por unidad total de la compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)
*/