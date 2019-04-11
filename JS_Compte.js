// Ajoutez votre code ici

const compte = {
  nom: "Alex",
  solde: 0,

  crediter(montant) {
    let x = this.solde+montant;
    return x;
  },

  decrire() {
  	return `Le solde de ${this.nom} est de ${this.solde} €.`;
  }
};

let credit = 250;
let debit = 80;

console.log(compte.decrire());
compte.solde += credit;
console.log(`Le compte de ${compte.nom} est crédité de ${credit} €.`);
console.log(compte.decrire());
compte.solde -= debit;
console.log(`Le compte de ${compte.nom} est débité de ${debit} €.`);
console.log(compte.decrire());