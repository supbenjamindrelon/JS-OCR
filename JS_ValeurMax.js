const valeurs = [3, 11, 7, 2, 9, 10];

// Ajoutez votre code ici

let x = 0;
valeurs.forEach(valeur => {
  if (x < valeur) x = valeur;
});
console.log(x);
