/*Le point-virgule ";" après l'accolade fermante est optionnel, 
mais il vaut mieux prendre l'habitude de l'ajouter systématiquement 
pour éviter certaines mauvaises surprises dans des cas particuliers.*/

//EXEMPLE 1 (créer un objet)

const stylo = {
  type: "bille",
  couleur: "bleu",
  marque: "Bic"
};

//EXEMPLE 2 (appel de la propriété d'un objet grâce à la notation pointée + modification + ajout propriété)

const stylo = {
  type: "bille",
  couleur: "bleu",
  marque: "Bic"
};

console.log(stylo.type); // "bille"
console.log(stylo.couleur); // "bleu"
console.log(stylo.marque); // "Bic"

// "J'écris avec un stylo bille bleu de marque Bic"
console.log(`J'écris avec un stylo ${stylo.type} ${stylo.couleur} de marque ${stylo.marque}`);

// Modification de la propriété "couleur"
stylo.couleur = "rouge";

// "J'écris avec un stylo bille rouge de marque Bic"
console.log(`J'écris avec un stylo ${stylo.type} ${stylo.couleur} de marque ${stylo.marque}`);

// Ajout de la propriété "prix" (JS permet d'ajouter dynamiquement une nouvelle propriété)
stylo.prix = "2.5";

// "Mon stylo coûte 2.5 euros"
console.log(`Mon stylo coûte ${stylo.prix} euros`);

//EXEMPLE 3 (création d'une fiche personnage)

const aurora = {
  nom: "Aurora",
  sante: 150,
  force: 25
};

// "Aurora a 150 points de vie et 25 en force"
console.log(`${aurora.nom} a ${aurora.sante} points de vie et ${aurora.force} en force`);

console.log("Aurora est blessée par une flèche");
aurora.sante = aurora.sante - 20;

console.log("Aurora trouve un bracelet de force");
aurora.force = aurora.force + 10;

// "Aurora a 130 points de vie et 35 en force"
console.log(`${aurora.nom} a ${aurora.sante} points de vie et ${aurora.force} en force`);

// Renvoie la description du personnage
function decrire(personnage) {
  return `${personnage.nom} a ${personnage.sante} points de vie et ${personnage.force} en force`;
}

// "Aurora a 150 points de vie et 25 en force"
console.log(decrire(aurora)); //ATTENTION decrire(aurora) ici

//Ajout dans l'objet de la fonction "decrire()"

const aurora = {
  nom: "Aurora",
  sante: 150,
  force: 25,

  // Renvoie la description du personnage
  decrire() {
    return `${this.nom} a ${this.sante} points de vie et ${this.force} en force`; //ATTENTION: "this"
    //Une propriété dont la valeur est une fonction est appelée une méthode.
  }
};

// "Aurora a 150 points de vie et 25 en force"
console.log(aurora.decrire()); //ATTENTION: aurora.decrire() ici

//SYNTAXE

const monObjet = {
propriete1: valeur1,
propriete2: valeur2,
// ... ,
methode1(/* ... */) {
// ...
},
methode2(/* ... */) {
// ...
}
// ...
};