window.addEventListener("load",function(){
	var agregaLista = document.getElementById("agregaLista");
	var guardaContenedor = document.getElementById("guardaContenedor");
	var contador = 1;

    //color onclick en input
	agregaLista.onclick = function focus(e){
		agregaLista.style.backgroundColor = '#94F1FF';
	}
	//agregar lista
	agregaLista.addEventListener("click",function(){
		var contenedor = document.createElement("div"); //crea un elemento div
		contenedor.className = "contenedor";
		var listaInpu = document.createElement("input"); // crea un elemento input
		listaInpu.setAttribute("placeholder", "Añadir una lista"); // al input le agrega atributos
		var buttonAgregar = document.createElement("button");
		var textButt = document.createTextNode("añadir lista");// crea texto para el boton
		buttonAgregar.appendChild(textButt); //aqui agregamos el texto al boton
		contenedor.appendChild(listaInpu);
	    contenedor.appendChild(buttonAgregar);
	    guardaContenedor.replaceChild(contenedor, agregaLista);
	    listaInpu.focus();//agregando focus
	    //
	    
	    //boton para guardar lista
		buttonAgregar.onclick = function guardarList(e){
			var contenedorint = document.createElement("div");
			contenedorint.className = "contenedorint";
			var linkTarjeta = document.createElement("a");
			var anterior = e.target.parentElement;
			var nombreLista = document.createTextNode(listaInpu.value);
			var parrafo = document.createElement("h2");
			parrafo.appendChild(nombreLista);
			contenedorint.appendChild(parrafo);
			anterior.parentElement.replaceChild(contenedorint, anterior);//remplasamos el viejo por el nuevo
			linkTarjeta.appendChild(document.createTextNode("Añadir tarjeta"));
			contenedorint.appendChild(linkTarjeta);
			guardaContenedor.appendChild(contenedorint);
			guardaContenedor2.appendChild(contenedorint);
			guardaContenedor.appendChild(agregaLista);
			//
			guardaContenedor2.addEventListener("drop", soltar);
		    guardaContenedor2.addEventListener("dragover", arrastrar);
		    guardaContenedor2.addEventListener("dragleave", dejarArrastrar);
			
			//agregar tarjeta
			linkTarjeta.onclick = function agregarTarjeta(e){
				var contenedorTarjetas = document.createElement("div");
				var tarjetaNueva = document.createElement("input");
				var botonGuardaTarjeta = document.createElement("button");
				var textButtTarjeta = document.createTextNode("añadir tarjeta");
				botonGuardaTarjeta.className = "botonGuardaTarjeta";
				botonGuardaTarjeta.appendChild(textButtTarjeta);
				contenedorTarjetas.appendChild(tarjetaNueva);
				contenedorTarjetas.appendChild(botonGuardaTarjeta);
				e.target.parentElement.replaceChild(contenedorTarjetas, e.target);
				tarjetaNueva.focus();
				//
				

				//boton para guardar tarjeta
				botonGuardaTarjeta.onclick = function guardeTarjeta(e){
					var divPrincipal = e.target.parentElement.parentElement;
					var parrafoTarjeta = document.createElement("p");
					parrafoTarjeta.appendChild(document.createTextNode(tarjetaNueva.value));
					divPrincipal.replaceChild(parrafoTarjeta, e.target.parentElement);
					divPrincipal.appendChild(linkTarjeta);

					//
					parrafoTarjeta.setAttribute("draggable", "true");
					parrafoTarjeta.setAttribute("id", "tarjetaNuevaMov.1" + contador);
					parrafoTarjeta.addEventListener("dragstar", arrastrando);
					parrafoTarjeta.addEventListener("dragend", finalizarArrastre);
					contador++
				}

			}
		}
	});

	function arrastrando(e){ //arrastra el texto 
		e.dataTransfer.setData("text",e.target.id); //dataTransfer:nos permitirá recoger el contenido del objeto arrastrado.
		//nos devuelve la información del contenido del elemento arrastrado
		//setData() : Indica el tipo de contenido asociado que queremos recoger del evento.
	}
	function arrastrar(e){
		e.preventDefault(); //acepta lo que el navegador va a mover
	 }

	function soltar(e){
		e.stopPropagation();
	    e.preventDefault();
		var idMove = e.dataTransfer.getData("text");//getData() : Indica el tipo de contenido que debe ser volcado en el evento.
		var elMove = document.getElementById(idMove);
		this.insertBefore(elMove,this.childNodes[1]);//revisar esto!! Sandra del futuro porque no funciona.Intenta otra cosa
	}

	// function soltar(e, el) { //otra forma de soltar
	//     e.stopPropagation();
	//     e.preventDefault();
	//     var data = e.dataTransfer.getData("text");
	//     e.target.appendChild(document.getElementById(data));
	//     e.dataTransfer.clearData();
	// }

	function finalizarArrastre(e){
		e.target.style.backgroundColor = "#C1FAFF";//color tarjeta
	}
	function dejarArrastrar(e){
		e.target.style.backgroundColor = "#FFFEB5";//color lista
	}

	
});
 