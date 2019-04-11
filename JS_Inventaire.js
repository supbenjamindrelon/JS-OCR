// Ajoutez votre code ici
class Personnage {
    constructor(nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.xp = 0;
        this.po = 10;
        this.cle = 1;
    }
    attaquer(cible) {
	    if (this.sante > 0) {
	        const degats = this.force;
	        console.log(
	            `${this.nom} attaque ${cible.nom} et lui inflige ${degats} points de dégâts`
	        );
	        cible.sante -= degats;
	        if (cible.sante > 0) {
	            console.log(`${cible.nom} a encore ${cible.sante} points de vie`);
	        } else {
	            cible.sante = 0;
	            const bonusXP = 10;
	            const bonusPo = cible.po;
	            const bonusCle = cible.cle;
	            console.log(
	                `${this.nom} a tué ${cible.nom} et gagne ${bonusXP} points d'expérience, ainsi que les pièces d'or et les clés de ${cible.nom}`
	            );
	            this.xp += bonusXP;
	            this.po += bonusPo;
	            this.cle += bonusCle;
	        }
	    } else {
	        console.log(
	            `${this.nom} n'a plus de points de vie et ne pas pas attaquer`
	        );
	    }
    }
    decrire() {
        return `${this.nom} a ${this.sante} points de vie, ${this.force} en force et ${this.xp} points d'expérience, ${this.po} pièces d'or et ${this.cle} clé(s)`;
    }
}

// "Aurora a 150 points de vie, 25 en force et 0 points d'expérience, 10 pièces d'or et 1 clé(s)"
const aurora = new Personnage("Aurora", 150, 25);

console.log(aurora.decrire());

const monstre = new Personnage("ZogZog", 20, 10);
monstre.attaquer(aurora);
aurora.attaquer(monstre); // Le monstre est tué

// "Aurora a 140 points de vie, 25 en force et 10 points d'expérience, 20 pièces d'or et 2 clé(s)"
console.log(aurora.decrire());
