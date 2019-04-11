const nombre = 4; // Faites varier cette variable entre 1 et 10

console.log(`Table de multiplication de ${nombre}`);

// Ajoutez votre code ici

let m = 0;
for (let i = 1; i <= 10; i++) {
  m = i*nombre;
  console.log(`\n${i} x ${nombre} = ${m}`);
}
