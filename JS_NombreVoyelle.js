// Ajoutez votre code ici
function compterVoyelles(chaine) {
    let minusc = (chaine.toLowerCase());
    let x = 0;
    for(const caractere of minusc) {
  	    if ((caractere === "a") || (caractere === "e") || (caractere === "i") || (caractere === "o") || (caractere === "u") || (caractere === "y")) {
  	    	x++;
  	  }
    }
    return x;
}

console.log(compterVoyelles("RadAr")); // 2
console.log(compterVoyelles("Tic et Tac")); // 3
console.log(compterVoyelles("Oasis Oasis Oh")); // 7
