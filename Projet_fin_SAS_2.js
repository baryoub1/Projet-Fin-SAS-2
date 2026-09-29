const prompt = require('prompt-sync')()

const candidats = [
    {
        cin: "AB123456",
        nom: "Boushaba",
        prenom: "Soufiane",
        partiPolitique: "Indépendant",
        age: 40,
        electeurs: [33, 33, 33, 33]
    },
    {
        cin: "CD123456",
        nom: "rochdi",
        prenom: "Hamid",
        partiPolitique: "Fleur",
        age: 38,
        electeurs: [33, 33]
    },
    {
        cin: "EF123456",
        nom: "Alaoui",
        prenom: "Mohammed",
        partiPolitique: "Lamp",
        age: 42,
        electeurs: [33, 33, 33, 33, 33, 33]
    },
    {
        cin: "EF123456",
        nom: "ayoub",
        prenom: "Moooh",
        partiPolitique: "Indy",
        age: 42,
        electeurs: [33, 33, 33]
    }
];




////////////////////////////////// functions

function menuPrincipal() {
    console.log("------------MENU PRINCIPAL----------------");
    console.log("- 1. Ajouter candidat                    -");
    console.log("- 2. Afficher les candidats              -");
    console.log("- 3. Voter                               -");
    console.log("- 4. Modifier les info d'un candidat     -");
    console.log("- 5. Supprimer un candidat               -");
    console.log("- 6. Rechercher un candidat              -");
    console.log("- 0. Quitter                             -");
    console.log("------------------------------------------");

}

function ajouterCandidat() {
    console.log("1. Ajouter un candidat");
    console.log("2. Ajouter plusieurs candidats  ");
    console.log("0. Venir au menu principale");
    let affinorm = prompt("====>")
    switch (affinorm) {
        case "1":
            ajouterUnCandidat()
            break;
        case "2":

            break;
        case "0":

            break;
        default:
            console.log("Choix n'est pas exist !!")
            break;
    }
}

function ajouterUnCandidat() {

    let cin = prompt("cin :")
    let nom = prompt("nom :")
    let prenom = prompt("prenom :")
    let partiPolitique = prompt("partiPolitique :")
    let age = prompt("age:")

    const candidat = {
        cin: cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: partiPolitique,
        age: age,
        electeurs: []
    }

    candidats.push(candidat)

}



function afficherCandidats() {
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
            affichagetrié()
            break;
        case "0":

            break;
        default:
            console.log("Choix n'est pas exist !!")
            break;
    }
}

function affichagenormale() {
    for (let i = 0; i < candidats.length; i++) {
        console.log(`
        # Candidat ${i + 1}:
         CIN: ${candidats[i].cin}
         Nom: ${candidats[i].nom}
         prenom: ${candidats[i].prenom}
         partiPolitique: ${candidats[i].partiPolitique}
         age: ${candidats[i].age}
         electeurs: ${candidats[i].electeurs.length}
         -------------
        `);

    }
}
function affichagetrié() {
    for (let i = 0; i < candidats.length; i++) {
        for (let j = 0; j < candidats.length - 1; j++) {
            if (candidats[j].electeurs.length < candidats[j + 1].electeurs.length) {
                let temp = candidats[j + 1];
                candidats[j + 1] = candidats[j];
                candidats[j] = temp
            }
        }
    }
    for (let i = 0; i < candidats.length; i++) {
        console.log(`
        # Candidat ${i + 1}:
         CIN: ${candidats[i].cin}
         Nom: ${candidats[i].nom}
         prenom: ${candidats[i].prenom}
         partiPolitique: ${candidats[i].partiPolitique}
         age: ${candidats[i].age}
         electeurs: ${candidats[i].electeurs.length}
         -------------
        `);

    }
    
}




function voter() {
    let dejavoter = false
    let cincan;
    let vote = prompt("Donner votre cin : ")
    for (let i = 0; i < candidats.length; i++) {
        for (let j = 0; j < candidats[i].electeurs.length; j++) {
            if (vote === candidats[i].electeurs[j]) {
                dejavoter = true

            }
        }
    }
    if (dejavoter == true) {
        console.log("Vous avez déjà voté et vous n’avez pas le droit de modifier votre vote ni de voter à nouveau");
    } else if (dejavoter == false) {
        cincan = prompt("cin de votre candidat : ")
        for (let i = 0; i < candidats.length; i++) {
            if (candidats[i].cin == cincan) {
                candidats[i].electeurs.push(vote)
            }
        }
    }

}


function modifierInfoCandidat() {
    console.log("1. Modifier nom d'un candidat ");
    console.log("2. Modifier age d'un candidat");
    console.log("0. Venir au menu principale");
    let affinorm = prompt("====>")
    switch (affinorm) {
        case "1":
            modifierCandidatNom()
            break;
        case "2":
            modifierCandidatage()
            break;
        case "0":

            break;
        default:
            console.log("Choix n'est pas exist !!")
            break;
    }
}


function modifierCandidatNom() {


    let cincan = prompt("entrer le cin de candidat: ")
    let trouve = false


    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin == cincan) {
            console.log("le nom : " + candidats[i].nom)
            let nouveaunom = prompt("nouvelle nom : ")
            candidats[i].nom = nouveaunom
            console.log("modification réuser, nouveau nom :  " + candidats[i].nom)
            trouve = true
        }
    }


    if (trouve == false) {
        console.log("cin n'exist pas ")

    }

}
function modifierCandidatage() {


    let cincan = prompt("entrer le cin de candidat: ")
    let trouve = false


    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin == cincan) {
            console.log("le age : " + candidats[i].age)
            let nouveauage = prompt("nouvelle age : ")
            candidats[i].age = nouveauage
            console.log("modification réuser, nouveau age :  " + candidats[i].age)
            trouve = true
        }
    }


    if (trouve == false) {
        console.log("cin n'exist pas ")

    }

}

function supprimerCandidat() {
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
    if (trouve = false) {
        console.log(" Aucun candidat trouve avec cette CIN");
    }

}


function rechercherCandidat() {
    let cinrecherche = prompt(" Entrer cin de votre candidat : ")
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

        if (trouve = false) {
            console.log("candidat pas trouve ")
        }

    }
}








////////////////////////////////// main

while (true) {

    menuPrincipal()

    const choix = prompt("Votre choix : ");

    switch (choix) {

        case "1":
            ajouterCandidat();
            break;

        case "2":
            afficherCandidats()
            prompt()
            break;

        case "3":
            voter()
            break;

        case "4":
            modifierInfoCandidat()
            break;

        case "5":
            supprimerCandidat()
            break;

        case "6":
            rechercherCandidat()
            break;

        case "0":
            console.log("byyyye!");
            break;

        default:
            console.log("Choix invalide");
    }

    if (choix === "0") {
        break;
    }
}




