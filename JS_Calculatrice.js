// Ajoutez votre code ici
function calculer (nmbr1, sgn, nmbr2) {
	switch (sgn) {
		case ("+"):
		return nmbr1+nmbr2;
		break;
		case ("-"):
		return nmbr1-nmbr2;
		break;
		case ("*"):
		return nmbr1*nmbr2;
		break;
		case ("/"):
		return nmbr1/nmbr2;
		break;
		default:
			return "erreur";
	}
}

console.log(calculer(4, "+", 6));  // 10
console.log(calculer(4, "-", 6));  // -2
console.log(calculer(2, "*", 0));  // 0
console.log(calculer(12, "/", 0)); // Infinity
