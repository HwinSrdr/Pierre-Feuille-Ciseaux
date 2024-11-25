// PIERRE FEUILLE CISEAUX
    /*Y aura d'abord un prompt qui va nous demander de faire notre choix, ensuite, l'ordinateur fera son choix. Pour qu'on fasse notre choix, il fautre créer 3 variables, pièrre papier et ciseaux. Ensuite pour que l'ordinateur choisisse son choix, il va falloir faire en sorte avec math.random qui permettra de générer un chiffre, il faudra ensuite assigner un chiffre à un choix. Il faudra indiquer par rapport au choix des 2 cotés qui gagne en comparant le choix de l'utilisateur et l'ordinateur. Et pour finir, il faudra que une alerte/pop up annonce, les choix de chacun et le message du gagnant.*/

    // 5 fonctions au total

    //Fonction 1 prompt (affichage d'une question "Quel est votre choix" et d'un espace de texte pour écrire le choix de l'user)




    //Fonction 2 Math.random (Enoncer un chiffre au hasard entre 1 et 3 qui constituera son choix mais en numérique)



    //Fonction 3 choix de l'user
    
    //Fonction choix de l'ordi



    //Fonction 4 Comprarer les 2 choix des 2 côtés pour générer le résultat (victoire, défaite, égalité)




    //Fonction 5 Afficher les choix de chacun et la victoire en alerte/pop up



/* Corrigé : 

Etapes
FONCTION CHOIX DU JOUEUR
- Joueur choisisse entre pierre, feuille, ciseaux : 
        
        - Donner son choix via un prompt
        - Stocké dans une variable


FONCTION CHOIX ORDI
- Ordinateur choisis entre pierre, feuille, ciseaux
        - Choisis aléatoirement
            -Math.random ou/et Math.ceil: choisit aléatoirement un nombre qu'on associera à un choix


FONCTION COMPARER
- Comparer le choix du joueur et de l'ordinateur 
        - Conditions


FONCTION AFFICHER
-Afficher le choix du joueur et de l'ordinateur


FONCTION JOUER
- Lance le jeu
        - Appelle toutes les fonctions
*/

let cj;
let co;
let cnbo;

function jouer () {
    cj=choixJoueur();
    cnbo=choixNombreOrdi();
    choixOrdi();
    resultat();
    alerte()
}

//Etape 1 : CHOIX DU JOUEUR 

function choixJoueur() {
    return prompt ("Quel est votre choix entre Pierre, Feuille et Ciseaux ?")
}



//Etape 2 : CHOIX ORDI

function choixNombreOrdi () {
    return Math.ceil(Math.random() * 3);
}
// 1 = Feuille
// 2 = Pierre
// 3 = Ciseaux
function choixOrdi () {

if (cnbo===1) {
    co = "Feuille"
}
else if (cnbo===2) {
    co = "Pierre"
}
else if (cnbo===3) {
    co = "Ciseaux"
}
}




// Etape 3 : COMPARER

function resultat () {
if (cj===co){
    res = "Il y a égalité";
}

else if (
    (cj==="Ciseaux" && co==="Feuille") ||
    (cj==="Feuille" && co==="Pierre") ||
    (cj==="Pierre" && co==="Ciseaux") 
) {
 res = "Le joueur Gagne";
}

else {
    res = "L'ordinateur a gagné";
}

}
// Etape 4 : AFFICHER
function alerte () {
alert ("Le Joueur a fait " + cj + " et l'ordinateur a fait " + co + ". Donc: " + res)
}

