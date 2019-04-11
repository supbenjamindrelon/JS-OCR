console.log("ABC".length); // 3
console.log("Je suis une chaîne".length); // 18

const mot = "Kangourou";
const longueurMot = mot.length; // longueurMot contient la valeur 9
console.log(longueurMot); // 9

/*La syntaxe qui consiste à utiliser un point (.) entre la 
chaîne de caractères et le motlength s'appelle la notation pointée.*/

//CONVERTIR UNE CHAINE EN MINUSCULES OU EN MAJUSCULES

const motInitial = "Bora-Bora";
console.log(motInitial.toLowerCase());  // "bora-bora"
console.log(motInitial.toUpperCase());  // "BORA-BORA"
console.log(motInitial);  // "Bora-Bora"
/*Ces deux méthodes renvoient toutes deux une nouvelle chaîne.
une fois créée, une chaîne de caractères JavaScript ne peut plus être modifiée. 
On dit qu'elle est immuable (en anglais : immutable).*/

//COMPARER DEUX CHAINES

const chaine = "azerty";
console.log(chaine === "azerty"); // true
console.log(chaine === "qwerty"); // false
console.log("Azerty" === "azerty"); // false (à cause du A majuscule) 

//ATTENTION: respect de la casse

const valeurSaisie = "Quitter";
console.log(valeurSaisie === "quitter");  // false (à cause du Q majuscule)
console.log(valeurSaisie.toLowerCase() === "quitter");  // true; solution possible au problème au-dessus

//ACCEDER A UN CARACTERE A PARTIR DE SON INDICE

const sport = "Tennis-ballon"; // 13 caractères
console.log(sport[0]); // "T"
console.log(sport[6]); // "-"
console.log(sport[13]); // undefined (longueur dépassée)

//PARCOURIR UNE CHAINE CARACTERE PAR CARACTERE

for (let i = 0; i < maChaine.length; i++) {
  // maChaine[i] renvoie le ième caractère de maChaine
  // ...
}

const prenom = "Odile";
for (let i = 0; i < prenom.length; i++) { //avec for
  console.log(prenom[i]);
}

const prenom = "Odile";
for (const lettre of prenom) { // avec for-of, si indice pas nécessaire
  console.log(lettre);
}

//TRANSFORMER UNE CHAINE EN TABLEAU

const prenom = "Odile";
const tabPrenom = Array.from(prenom);
tabPrenom.forEach(lettre => {
  console.log(lettre);
});

//RECHERCHER DANS UNE CHAINE (avec indexOF, startsWith() et endsWith())

const chanson = "Honky Tonk Women";
console.log(chanson.indexOf("onk")); // 1 (l'INDICE, du premier caractère de la sous-chaîne, dans la chaîne)
console.log(chanson.indexOf("Onk")); // -1 (à cause du O majuscule)

const chanson = "Honky Tonk Women";

console.log(chanson.startsWith("Honk")); // true (constate si la sous-chaîne existe au début de la chaîne)
console.log(chanson.startsWith("honk")); // false
console.log(chanson.startsWith("Tonk")); // false

console.log(chanson.endsWith("men")); // true (constate si la sous-chaîne existe à la fin de la chaîne)
console.log(chanson.endsWith("Men")); // false
console.log(chanson.endsWith("Tonk")); // false

//DECOMPOSER UNE CHAINE EN SOUS-PARTIES

//Si la chaîne est sous-divisée en plusieurs parties via un caractère commun, on peut utiliser split()
const listeMois = "Jan,Fev,Mar,Avr,Mai,Jun,Jul,Aou,Sep,Oct,Nov,Dec";
const mois = listeMois.split(",");
console.log(mois[0]); // "Jan" (on obtient un tableau contenant à chaque indice une sous-partie de la chaîne)
console.log(mois[11]); // "Dec"

//POINTS DE DOUTE: CHAINE IMMUABLES (très vague)