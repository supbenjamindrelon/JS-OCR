// Ajoutez votre code ici
function convertirLettreLeet(lettre) {
	const minLettre = lettre.toLowerCase();
	switch (minLettre) {
		case ("a"):
		return "4";
		break;
		case ("b"):
		return "8";
		break;
		case ("e"):
		return "3";
		break;
		case ("l"):
		return "1";
		break;
		case ("o"):
		return "0";
		break;
		case ("s"):
		return "5";
		break;
		default:
			return lettre;
	}
}

function convertirMotLeet (chaine) {
	let chaineLeet = "";
	for(let i = 0; i < chaine.length; i++) {
    chaineLeet = chaineLeet+convertirLettreLeet(chaine[i]);
    }
    return chaineLeet;
}
 
console.log(convertirMotLeet("Hello World!")); // "H3110 W0r1d!"
console.log(convertirMotLeet("Noob")); // "N008"
console.log(convertirMotLeet("Hacker")); // "H4ck3r"

//NOTE A MOI-MEME: UTILISE "FOR" OU "ARRAY" AFIN DE GARDER L'INDICE POUR LE REMPLACEMENT

/*case ("A"):
		return "4";
		break;
		case ("B"):
		return "8";
		break;
		case ("E"):
		return "3";
		break;
		case ("L"):
		return "1";
		break;
		case ("O"):
		return "0";
		break;
		case ("S"):
		return "5";
		break;*/
