/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

console.log("Bienvenue dans le gestionnaire des contacts");

// Prototype contact
var Contact = {
	// Initialise contact
	initContact: function (nom, prenom) {
		this.nom = nom;
		this.prenom = prenom;
	},
	// Description contact
	decrire: function () {
		var description = "Nom : " + this.nom + ", prénom : " + this.prenom;
		return description;
	}
};

// Création de 2 contacts
var contact1 = Object.create(Contact);
contact1.initContact("Lévisse", "Carole");
var contact2 = Object.create(Contact);
contact2.initContact("Nelsonne", "Mélodie");

// Création futurs contacts
var ajoutContact = Object.create(Contact);

// Création du tableau
var contacts = [contact1, contact2];

while (true) {
	// Affiche les propositions
	console.log("\n1 : Lister les contacts" + 
				"\n2 : Ajouter un contact" + 
				"\n0 : Quitter");

    // Saisie utilisateur
    var saisie = Number(prompt("Choisissez une option"));

    if (saisie === 0) {	// Quitter
    	break;

    } else if (saisie === 1) {	// Affiche liste contacts
    	console.log("\nVoici la liste de tous vos contacts :");
    	contacts.forEach (function (contact) {
    	console.log(contact.decrire());
    	});

    } else if (saisie === 2) {	// Ajout contact
    	var nom = prompt("Entrez le nom du nouveau contact :");
    	var prenom = prompt("Entrez le prénom du nouveau contact :");

    	ajoutContact.initContact(nom, prenom);	// Initialise nouveau contact : ligne 30
    	contacts.push(ajoutContact);			// Ajout nouveau contact au tableau : ligne 33

    	console.log("\nLe contact a été ajouté !");

    } else {
    	console.log("\nSaisie incorrect !");	// Si mauvaise valeur saisie
    }
}
console.log("\nAu revoir !");