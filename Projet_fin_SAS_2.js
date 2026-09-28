const menu = require("prompt-sync")();
const candidats = [
	{
	cin : "AB123456",
	nom : "Boushaba",
	prenom : "Soufiane",
	partiPolitique : "Indépendant",
	age: 40,
	electeurs: []
}];
let MENU,cho1ix,cho11ix,cho12ix,cho13ix,cho123ix,cho14ix 
do {
console.log("---------------------MENU------------------------");
console.log("- 1. Ajouter candidat                           -");
console.log("- 2. Afficher la list des candidat              -");
console.log("- 3. Voter pour un candidat                     -");
console.log("- 4. Modifier les informations d'un candidat    -");
console.log("- 5. Supprimer un candidat                      -");
console.log("- 6. Rechercher des candidats                   -");
console.log("- 7. Statistiques de l'élection                 -");
console.log("-------------------------------------------------");
    cho1ix = menu("Donner votre choix ===> ");
    switch (cho1ix) {
    case "1":
        console.log("1. Ajouter un");
        console.log("2. Ajouter plusieurs");
        console.log("0. Venir au menu principale");
		cho11ix = menu("====>")
		switch (cho11ix) {
			case "1":
				
				break;
			case "2":
				
				break;
			case "0":
				
				break;
		
			default:
				break;
		}
        break;
    case "2" :
        console.log("1. Afichage normale");
		console.log("2. Affichage trié");
		console.log("3. Affichage par filtre");
        console.log("0. Venir au menu principale");
		cho12ix = menu("====>")
		switch (cho12ix) {
			case "1":
            AffichageNormal()
				break;
		    case "2":

			    break;
		    case "3":

			    break;
		    case "0":

			    break;

			default:
				break;
		}
        break;
    case "3":
        cho13ix = menu("Entrer votre CIN pour voter :");
        break;
	case "4":

	console.log("1. Modifier le parti politique d'un candidat")
	console.log("2. Modifier l'âge d'un candidat ")
	console.log("0. Venir au menu principale");
    cho14ix = menu("======>")
        break;
	case "5":
        console.log("rtest");
        break;
	case "6":
        console.log("rtest");
        break;
	case "7":
        console.log("rtest");
        break;
    default:
    console.log("Choix n'exist pas !!!")
	}
} while (cho1ix > 0 );













function AffichageNormal() {
					for (let i = 0; i < candidats.length; i++) {
				console.log(
				"cin : ", candidats[i].cin,
				"\nnom : "+ candidats[i].nom, 
				"\nprenom : "+ candidats[i].prenom,
			    "\npartiPolitique : "+ candidats[i].partiPolitique,
			    "\nage : "+ candidats[i].age,
			    "\nelecteurs: "+ candidats[i].electeurs)
				}
}










