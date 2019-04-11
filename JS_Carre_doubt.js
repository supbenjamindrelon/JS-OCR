// Renvoie le carré de x
function carre1(x) {
  // Ajoutez votre code ici
  const i = x * x;
  return i;
}

// Renvoie le carré de x
const carre2 = x => (x*x); // Ajoutez votre code ici

console.log(carre1(0)); // 0
console.log(carre1(2)); // 4
console.log(carre1(5)); // 25

console.log(carre2(0)); // 0
console.log(carre2(2)); // 4
console.log(carre2(5)); // 25