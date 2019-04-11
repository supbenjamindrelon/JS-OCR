const nombre = 7; // Faites varier cette variable entre 1 et 10

console.log(`Table de multiplication de ${nombre}`);

// Ajoutez votre code ici
let i = 0;
let m = 0;
while (i < 10) {
	i++;
    m = i*nombre;
	console.log(`\n${i} x ${nombre} = ${m}`);
}