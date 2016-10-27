window.addEventListener("load",function(){
	var agregaLista = document.getElementById("agregaLista");
	// var formList = document.getElementById("formList");
	var guardaContenedor = document.getElementById("guardaContenedor");


	//agregando focus
	// agregaLista.addEventListener("click",function(){
	// 	agregaLista.style.backgroundColor = 'red';
	// });

	agregaLista.addEventListener("click",function(){
		var contenedor = document.createElement("div"); //crea un elemento div

		var listaInpu = document.createElement("input"); // crea un elemento input
		listaInpu.setAttribute("placeholder", "Añadir una lista"); // al input le agrega atributos
		var buttonAgregar = document.createElement("button");
		var textButt = document.createTextNode("añadir lista");// crea texto para el boton
		buttonAgregar.appendChild(textButt); //aqui agregamos el texto al boton
	    contenedor.appendChild(buttonAgregar).classList.add("buttonAgregar");
	    contenedor.appendChild(listaInpu).classList.add("listaInpu");
	    guardaContenedor.replaceChild(contenedor, agregaLista);
	    
	    //boton para guardar lista
		buttonAgregar.onclick = function guardarList(e){
			var anterior = e.target.parentElement;
			var nombreLista = document.createTextNode(listaInpu.value);
			var contenedorint = document.createElement("div");
			var botonTarjeta = document.createElement("button");
			var textTarjeta = document.createTextNode("añadir tarjeta");
			var cajaTexto = document.createElement("textarea");
			contenedorint.appendChild(cajaTexto);
			botonTarjeta.appendChild(textTarjeta);
			contenedorint.appendChild(botonTarjeta);
			contenedorint.appendChild(nombreLista);
			anterior.parentElement.replaceChild(contenedor, anterior);
			contenedorint.appendChild(listaInpu);
			guardaContenedor.appendChild(contenedorint);

			//boton para guardar tarjeta

			botonTarjeta.onclick = function guardarTarjeta(e){
				var textoTarjeta = document.createTextNode(cajaTexto.value);
				guardaContenedor.appendChild(textoTarjeta);
			}
		}
	});

	//movimiento

	function hacer(){
		agregaLista.addEventListener("dragstart",startDrag);
		guardaContenedor,addEventListener("dragenter", function(e){e.preventDefault},);
		guardaContenedor,addEventListener("dragover", function(e){e.preventDefault},);
		guardaContenedor,addEventListener("drop", dropped,);
	}
	function start(){}
});
 