// Ajoutez votre code ici
function estPalindrome (chaine) {
    const minChaine = chaine.toLowerCase();
	let chaineInverse = "";
	for(let i = chaine.length-1; i >= 0; i--) {
    chaineInverse = chaineInverse+minChaine[i];
    }
    return (minChaine === chaineInverse);
}

console.log(estPalindrome("RadAr")); // true
console.log(estPalindrome("KAYAk")); // true
console.log(estPalindrome("Bora-Bora")); // false
