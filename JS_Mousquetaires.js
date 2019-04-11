// Ajoutez votre code ici
const mousquetaires = ["Athos","Porthos","Aramis"];
for (let i = 0; i < mousquetaires.length; i++) {
	console.log(mousquetaires[i]);
}
mousquetaires.push("d'Artagnan");
mousquetaires.forEach(mousquetaire => {
  console.log(mousquetaire);
});
mousquetaires.splice(2, 1);
for (const mousquetaire of mousquetaires) {
  console.log(mousquetaire);
}