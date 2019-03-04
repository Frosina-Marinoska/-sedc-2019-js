
	
	var recept = prompt("Ime na receptot"); 
	var broj_na_sojstojki = prompt("Kolku sostojki?"); 

	var sostojki = [];

	for(var i = 0; i < broj_na_sojstojki; i++){

		var sostojka = prompt("Ime na sostojka broj " + i + ": ");

		sostojki[i] = sostojka;
		//console.log(i); 
	}

	
	
	recept_ime.innerText = recept; 

	
	for(var i = 0; i < sostojki.length; i++){

		var sostojka_lista_item = document.createElement("li"), 
			sostojka_lista 		= document.getElementById("lista_sostojki"), 
			sodrzina_lista_item = document.createTextNode(sostojki[i]);

		sostojka_lista_item.appendChild(sodrzina_lista_item); 
		sostojka_lista.appendChild(sostojka_lista_item); 

	}

	console.log(sostojki);


