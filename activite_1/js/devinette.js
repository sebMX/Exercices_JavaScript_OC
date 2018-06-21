// Exercice : devinette

// Message de bienvenue
console.log("Bienvenue dans ce jeu de devinette !");

// Génère un nombre entre 1 et 100 en nombre entier
var resultat = Math.floor(Math.random() * 100) + 1;

// Initialise des variables
var nombre = 0, nombreTentative = 0; 

while ((nombre !== resultat) && (nombreTentative <= 6)) {
		nombre = Number(prompt("Entrez un nombre entre 1 et 100 :"));	// Saisie du nombre par l'utilisateur (6 essais max)
		nombreTentative++;		// Incrémente le nombre de tentative

	if ((nombre < 1) || (nombre > 100) || isNaN(nombre)) {	// Vérifie si c'est bien un nombre (type) et bien entre 1 et 100
		console.log("Saisie incorrecte, veuillez entrer un nombre entre 1 et 100");
	}
	else if (nombre < resultat) {	// Si nombre inférieur au résultat
		console.log(nombre + " est trop petit");
	}
	else if (nombre > resultat) {	// Si nombre supérieur au résultat
		console.log(nombre + " est trop grand");
	}
}
	if ((nombre == resultat) && (nombreTentative <= 6)) {	// Si nombre égale au résultat avec 6 essais max
		console.log("Bravo !! La solution est : " + resultat);
		console.log("Vous avez trouvé en " + nombreTentative + " essai(s)");
	}
	else {	// Sinon perdu
		console.log("Perdu... La solution était " + resultat);
	}