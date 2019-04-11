const bonjour = function(prenom) {
  const message = `Bonjour, ${prenom} !`;
  return message;
}

console.log(bonjour("Thomas")); // "Bonjour, Thomas !"

//SYNTAXE 1

// Affectation d'une fonction anonyme à la variable maVariable
const maVariable = function(param1, param2, ...) {
  // Instructions pouvant utiliser param1, param2, ...
}

// Appel de la fonction anonyme
// param1 reçoit la valeur de arg1, param2 la valeur de arg2, ...
maVariable(arg1, arg2, ...);

//SYNTAXE 2 (fonction fléchée)

// Affectation d'une fonction anonyme à la variable maVariable
const maVariable = (param1, param2, ...) => {
  // Instructions pouvant utiliser param1, param2, ...
}

// Appel de la fonction anonyme
// param1 reçoit la valeur de arg1, param2 la valeur de arg2, ...
maVariable(arg1, arg2, ...);

//SYNTAXE 2.5 (réduction extrème)

// Dificile de faire plus concis !
const bonjour = prenom => `Bonjour, ${prenom} !`;

console.log(bonjour("Thomas")); // "Bonjour, Thomas !"
