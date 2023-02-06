function color(){
	var color1 = prompt("Introduce el un color entre rojo, azul o verde: ");
    if (color1 === "rojo") {
     	 document.body.style.backgroundColor = "red";
    } else if (color1 === "azul") {
      	document.body.style.backgroundColor = "blue";
    } else if(color1 === "verde"){
		document.body.style.backgroundColor = "green";
	}
}
function separar(){
	let palabra = prompt("Introduce una palabra: ");
	let palabraFinal="";
	for(var i=0;i< palabra.length;i++){
		palabraFinal += palabra[i] + "|";
	}
	alert(palabraFinal);
}