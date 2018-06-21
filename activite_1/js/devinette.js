/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

// Initialise des variables
var nombre = 0, nombreTentative = 0; 

while ((nombre !== solution) && (nombreTentative <= 6)) {
		nombre = Number(prompt("Entrez un nombre entre 1 et 100 :"));	// Saisie du nombre par l'utilisateur (6 essais max)
		nombreTentative++;		// Incrémente le nombre de tentative

	if ((nombre < 1) || (nombre > 100) || isNaN(nombre)) {	// Vérifie si c'est bien un nombre (type) et bien entre 1 et 100
		console.log("Saisie incorrecte, veuillez entrer un nombre entre 1 et 100");
	}
	else if (nombre < solution) {	// Si nombre inférieur au résultat
		console.log(nombre + " est trop petit");
	}
	else if (nombre > solution) {	// Si nombre supérieur au résultat
		console.log(nombre + " est trop grand");
	}
}
	if ((nombre == solution) && (nombreTentative <= 6)) {	// Si nombre égale au résultat avec 6 essais max
		console.log("Bravo !! La solution est : " + solution);
		console.log("Vous avez trouvé en " + nombreTentative + " essai(s)");
	}
	else {	// Sinon perdu
		console.log("Perdu... La solution était " + solution);
	}