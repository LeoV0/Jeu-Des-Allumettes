let joueurs = [];
let nombreAllumette;
let nombreChoisi;
let indexJoueur = 0;
let nombreDeJoueur;

const allumetteAffichage = document.querySelector("#allumette");

function askNombreJoueur() {
  while (!nombreDeJoueur || isNaN(nombreDeJoueur)) {
    nombreDeJoueur = Number(prompt("Entrez le nombre de joueur :"));
  }
  for (let i = 0; i < nombreDeJoueur; i++) {
    joueurs.push(`Joueur ${i + 1}`);
  }
  console.log(joueurs);
  console.log(nombreDeJoueur);
  gameStart();
}

function askNombreAllumette() {
  while (!nombreAllumette || isNaN(nombreAllumette) || nombreAllumette % 10) {
    nombreAllumette = Number(
      prompt("Entrez un nombre d'allumettes divisible par 10")
    );
  }
  askNombreJoueur();
}

askNombreAllumette();

function askRemoveAllumette() {
  if (nombreAllumette > 0) {
    do {
      nombreChoisi = Number(
        prompt(
          `${joueurs[indexJoueur]} Tu peux retirer entre 1 et 6 Allumettes`
        )
      );
    } while (
      nombreChoisi > 6 ||
      nombreChoisi < 1 ||
      nombreChoisi > nombreAllumette
    );
    nombreAllumette -= nombreChoisi; // Mieux qu'une boucle for
    alert(`Il reste ${nombreAllumette} Allumettes`);
    console.log(nombreAllumette);
  }
  return nombreAllumette;
}

function gameStart() {
  while (nombreAllumette > 0) {
    console.log(`${joueurs[indexJoueur]}, c'est ton tour !`);
    askRemoveAllumette();
    if (nombreAllumette === 0) {
      alert(`${joueurs[indexJoueur]} a gagné !`);
      console.log(`${joueurs[indexJoueur]} a gagné !`);
      break;
    }
    indexJoueur = (indexJoueur + 1) % joueurs.length;
  }
}
