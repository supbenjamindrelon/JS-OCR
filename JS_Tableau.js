const films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];
/*Puisqu'un tableau est destiné à contenir plusieurs éléments, 
une bonne pratique consiste à donner aux variables tableaux des noms exprimant le pluriel*/
const tableaux = ["Bonjour", 7, { message: "Coucou maman" }, true];
//On peut stocker différents type dans un tableau

console.log(films.length); // 3
//La taille d'un tableau s'obtient en lui appliquant la propriété length.

const tableauVide = []; // Création d'un tableau vide

console.log(tableauVide.length); // 0

//ACCEDER A UN ELEMENT D'UN TABLEAU

const films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

console.log(films[0]); // "Le loup de Wall Street"
console.log(films[1]); // "Vice-Versa"
console.log(films[2]); // "Babysitting"
console.log(films[3]); // undefined : le dernier indice valide est 2

for (let i = 0; i < films.length; i++) {
  console.log(films[i]);
}
//Ci-dessus et dessous, permet de parcourir un tableau
films.forEach(film => { //ATTENTION: forEach() => ne fonctionne qu'avec les tableaux
  console.log(film);
});

/*Attention à bien écrire  forEach()  avec un E majuscule, et à distinguer le tableau (ici films) 
de l'élément passé à la fonction (ici film). On voit ici l'intérêt de nommer les variables tableaux au pluriel.*/

const films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

for (const film of films) {
  console.log(film);
}
//Autre moyen de parcourir un tableau, ATTENTION: for-of

//AJOUTER UN ELEMENT A UN TABLEAU

const films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

films.push("Les Bronzés"); // Ajoute le film à la fin du tableau
console.log(films[3]); // "Les Bronzés"

/*L'ajout d'un nouvel élément dans un tableau se fait avec la méthode push(). 
Elle prend en paramètre l'élément à insérer, qui est ajouté à la fin du tableau.
Une autre méthode, unshift(), permet d'ajouter l'élément au début du tableau.*/

//SUPPRIMER

const films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

films.pop(); // Supprime le dernier élément
console.log(films.length); // 2
console.log(films[2]); // undefined

//Autre moyen de suppression

const films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

films.splice(0, 1); // Supprime 1 element à partir de l'indice 0
console.log(films.length); // 2
console.log(films[0]); // "Vice-Versa"
console.log(films[1]); // "Babysitting"