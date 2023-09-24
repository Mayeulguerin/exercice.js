"use strict";

class Personnage {
    constructor(nom, caractéristique, probaDead, probaDmg, probaDmgDead) {
        this.nom = nom; // Initialise la propriété 'nom' de l'objet avec le paramètre 'nom' passé lors de la création.
        this.caractéristique = caractéristique; // Initialise la propriété 'caractéristique' avec le paramètre 'caractéristique'.
        this.probaDead = probaDead; // Initialise la propriété 'probaDead' avec le paramètre 'probaDead'.
        this.probaDmg = probaDmg; // Initialise la propriété 'probaDmg' avec le paramètre 'probaDmg'.
        this.probaDmgDead = probaDmgDead; // Initialise la propriété 'probaDmgDead' avec le paramètre 'probaDmgDead'.
    }
}

let caractéristiques = ["gourmand", "roux", "sportif", "intelectuel", "geek"]; // Tableau des caractéristiques des survivants.
let prenoms = ["Bryan", "Moray", "kimberley", "dylan", "Bruce"]; // Tableau des prénoms des survivants.
let stats = [
    [0.2, 0.6, 0.2], // c'est les probabilités d'action pour le premier survivant.
    [0.3, 0.5, 0.2], 
    [0.1, 0.4, 0.5], 
    [0.4, 0.2, 0.4], 
    [0.3, 0.4, 0.3]  
]; 
let joueurs = []; // Tableau dans lequel seront ajoutés les objets Personnage de la classe Personnage.
let survivantsMorts = []; // Tableau des survivants morts.
let tueur = ["Jason", 100]; //Sert a définir le pseudo et les points de vie du tueur(Jason)

function combat() {//permettre le combat
    let affichageMort = "";//sert a afficher les joueurs morts

    if (joueurs.length >= 1 && tueur[1] > 0) { // Sert a vérifier si il reste des survivant et si le tueur est en vie.
        let chiffreSurvivantAleatoire = Math.floor(Math.random() * joueurs.length); // Sert a générer un nombre aléatoire pour choisir un survivant.
        let survivantCible = joueurs[chiffreSurvivantAleatoire]; // Sélectionne le survivant ciblé.
        attaqueTueur(survivantCible, chiffreSurvivantAleatoire); // Appelle la fonction pour effectuer l'attaque.
    } else if (joueurs.length >= 1 && tueur[1] <= 0) { // Sert encort une fois a vérifier si il reste des survivants et si le tueur n'est mort.
        for (let i = 0; i < survivantsMorts.length; i++) {
            let test = survivantsMorts[i]; // Récupère le nom d'un survivant mort.
            if (survivantsMorts.length != 1) {
                if (test == survivantsMorts[survivantsMorts.length - 1]) {
                    affichageMort += " et " + test + "..."; 
                } else if (test == survivantsMorts[survivantsMorts.length - 2]) {
                    affichageMort += test; // Construit une chaîne avec les noms des survivants morts.
                } else {
                    affichageMort += test + ", "; // Sert a afficher les noms des survivants morts.
                }
            } else {
                affichageMort += test + "."; // Sert a afficher le nom du dernier survivant mort.
            }
        }
        if (!affichageMort) {
            console.log("Jason est mort ! Aucun survivant n'est mort cette fois..."); // Affiche "si aucun survivant n'est mort.""
        } else {
            console.log("Jason est mort ! RIP à", affichageMort); // Affiche les noms des survivants morts via console.log et affichagemort
        }
    } else if (joueurs.length == 0 && tueur[1] > 0) { // Sert a vérifier s'il ne reste plus de survivants et si le tueur est en vie. via else if
        console.log("Jason a gagné. Il lui reste " + tueur[1] + " points de vie !"); // permet d'afficher un message de victoire du tueur.
    } else if (joueurs.length == 0 && tueur[1] <= 0) { // Vérifie s'il ne reste plus de survivants et si le tueur est mort.
        console.log("Tous sont morts" + affichageMort + " Il ne reste aucun survivant et Jason aussi est mort !"); // Affiche un message si tout le monde est mort.
    }//sert a donner une possibilité de fin parmis plusieurs 
}

function attaqueTueur(survivantCible, chiffreSurvivantAleatoire) {
    let valeurAleatoire = Math.random(); //Sert a génèrer un chiffre aléatoire entre 0 et 1.

    if (valeurAleatoire < survivantCible.probaDead) { // Vérifie si le survivant touche le tueur
        console.log("Jason a tué", survivantCible.nom); // Affiche un message si le survivant touche le tueur.
        survivantsMorts.push(survivantCible.nom); // Sert a ajouter le nom du survivants mort au tableau des survivants morts.
        joueurs.splice(chiffreSurvivantAleatoire, 1); // Retire le survivant mort du tableau des survivants.
    } else if (valeurAleatoire < survivantCible.probaDead + survivantCible.probaDmg) { // Vérifie si le survivant esquive et inflige des dégâts au tueur.
        console.log(survivantCible.nom, "esquives et met 10 dégât à Jason "); // Affiche un message si le survivant esquive et inflige des dégâts au tueur.
        tueur[1] -= 10; // Réduit les points de vie du tueur.
    } else {
        console.log(survivantCible.nom,)    }
    }