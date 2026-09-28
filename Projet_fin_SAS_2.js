const prompt = require("prompt-sync")();
const candidats = [
	{
	cin : "AB123456",
	nom : "Boushaba",
	prenom : "Soufiane",
	partiPolitique : "Indépendant",
	age: 40,
	electeurs: []
},
{
	cin : "CD123456",
	nom : "rochdi",
	prenom : "Hamid",
	partiPolitique : "Fleur",
	age: 38,
	electeurs: []
},
{
    cin : "EF123456",
	nom : "Alaoui",
	prenom : "Mohammed",
	partiPolitique : "Lamp",
	age: 42,
	electeurs: []
}];
let choix = 0
do {
	console.log("---------------------MENU------------------------");
console.log("- 1. Ajouter candidat                           -");
console.log("- 2. Afficher la list des candidat              -");
console.log("- 3. Voter pour un candidat                     -");
console.log("- 4. Modifier les informations d'un candidat    -");
console.log("- 5. Supprimer un candidat                      -");
console.log("- 6. Rechercher des candidats                   -");
console.log("- 7. Statistiques de l'élection                 -");
console.log("- 0. Quiter                                     -");
console.log("-------------------------------------------------");
   let choix = prompt("saisez votre choix : ")
   switch (choix) {
    case "1":
		ajoutercandidats()
       break;
	case "2":
        affichagedescandidat ()
	case "3":
        vote(candidats)
	break;
	case "4":
		modification(candidats)
	break;
	case "5": 
        supprimercandidat()
	break;
	case "6":
	   recherchcandidat()
	break;
	case "7":
		break;
	case "0":
	console.log("merci pour la visite")
    break;
   default:
	console.log("choix pas existe!!!!")
    break;
   }
} while (choix > 0);










































///////////////////////////////////////////////////////////////tout les fonction/////////////////////////////////////////////////////





/////////////////////////////////////ajouter candidats
	function ajoutercandidats() {console.log("1. Ajouter un candidat");
		console.log("2. Ajouter plusieur candidats");
        console.log("0. Venir au menu principale");
		let ajoucan = prompt("====>")
		switch (ajoucan) {
			case "1":
				ajoutercandidat()
				break;
			case "2":
				ajouterpluseuirscandidat()
				break;
			default:
				console.log("Choix n'est pas exist !!")
				break;
		}
	}
	    

//Ajouter un candidat
function ajoutercandidat() {

    console.log("------Ajouter un candidat------");
    let cin = prompt("cin: ");
    let nom = prompt("Nom: ");
    let prenom = prompt("Prenom: ");
    let parti = prompt("PartiPolitique: ");
    let age = prompt("Age: ");

    const nouveaucandidat = {
        cin: cin,
        nom: nom,
        prenom: prenom,
        partipolitique: parti,
        age: age,
        electeurs: []
    };
    candidats.push(nouveaucandidat);
    console.log("Candidat ajouté avec succès")
}


//Ajouter plusieurs candidats
function ajouterpluseuirscandidat() {
    nomber = Number(prompt("entrer un nomber : "))
    for (let i = 0; i < nomber; i++) {
        let cin = prompt("CIN: ");
        let nom = prompt("Nom: ");
        let prenom = prompt("Prenom: ");
        let parti = prompt("PartiPolitique: ");
        let age = prompt("Age: ");

        const nouveaucandidat = {
            cin: cin,
            nom: nom,
            prenom: prenom,
            partipolitique: parti,
            age: age,
            electeurs: []
        };
        candidats.push(nouveaucandidat);
    }
}
 

///////////////////////////////////////////////////Affichage des candidat
function affichagedescandidat (){
        console.log("1. Afichage normale");
		console.log("2. Affichage trié");
		console.log("3. Affichage par filtre");
        console.log("0. Venir au menu principale");
		let affinorm = prompt("====>")
		switch (affinorm) {
			case "1":
				affichagenormale()
				break;
			case "2":
				
				break;
			case "3":
				
				break;
			default:
				console.log("Choix n'est pas exist !!")
				break;
		}
	}
//Affichage normale
function affichagenormale(){
    for(i=0; i<candidats.length; i++)
        {
		console.log(
		"cin : ", candidats[i].cin,
		"\nnom : "+ candidats[i].nom, 
		"\nprenom : "+ candidats[i].prenom,
		"\npartiPolitique : "+ candidats[i].partiPolitique,
		"\nage : "+ candidats[i].age,
		"\nelecteurs: "+ candidats[i].electeurs)
}
}


//////////////////////////////////////////////////////////////////////Vote
function vote(candidats) {
    let cin = prompt("votre cin : ")
    let dejavote = false
    for (let i = 0; i < candidats.length; i++) {
        for (let j = 0; j < candidats[i].electeur.length; j++) {
            if (candidats[i].electeur[j] == cin) {
                dejavote = true
                break;
            }
        }
    }
    if (dejavote == true) {
        console.log("vous avez d'eja vote ")
    }
    else {
        console.log("tu peut vote")
        let cincandidate = prompt("entre cin de candidte :");
        let verifie = 0
        for (let i = 0; i < candidats.length; i++) {
            if (candidats[i].cin == cincandidate) {
                candidats[i].electeur.push(cin)
                console.log("votre vote a eter ajouter")
                verifie = 1;
                break;


            }
        }

        if (!verifie) {
            console.log("ne pas trouve .");
        }

    }

}

///////////////////////////////////////////////////////////////Modifier les info d'un candidat
function modification(candidats) {
    let chercheparcin = prompt("entrer votre cin : ")
    let trouve = false
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin == chercheparcin) {
            console.log("le nom : " + candidats[i].nom)
            let nouveaunom = prompt("nouvellenom : ")
            candidats[i].nom = nouveaunom
            console.log("modification réuser, nouveau nom :  " + candidats[i].nom)
            trouve = true
        }
    }


    if (trouve == false) {
        console.log("cin n'exist pas ")
    }

}

//////////////////////////////////////////////////////////////////Suprimer un candidat
function supprimercandidat() {
    let cinderecherch = prompt("cin de candidat :")
    let trouve = false
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin == cinderecherch) {
            candidats.splice(i, 1);
            console.log("Le candidat a été supprimé avec succès.");
            trouve = true
            break
        }
    }
    if (trouve = false){
		console.log(" Aucun candidat trouve avec cette CIN");
	}
        
}

////////////////////////////////////////////////////////////////////rechercher un candidat
function recherchcandidat() {
    let cinrecherche = prompt(" entrer votre cin : ")
    let trouve = false
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin == cinrecherche) {
            console.log("candidat trouver")
            console.log("cin : " + candidats[i].cin)
            console.log("nom : " + candidats[i].nom)
            console.log("prenom : " + candidats[i].prenom)
            console.log("partipolitique : " + candidats[i].partiPolitique)
            trouve = true
            break;

        }
    
    if (trouve = false){
		console.log("candidat pas trouve ")
	}
}}
