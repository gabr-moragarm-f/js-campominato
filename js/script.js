//  Costanti -------------------------------------------------------------------
var maxExplosiveNumbers = 16;

var minTotalNumbers = 1;

var maxTotalNumbers = 100;
// -----------------------------------------------------------------------------

// Funzioni --------------------------------------------------------------------
function numberRandomizer(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
// -----------------------------------------------------------------------------

alert('Ciao! Ora giocheremo a campo minato. Estrarrò ' + maxExplosiveNumbers + ' numeri da ' + minTotalNumbers + ' a ' + maxTotalNumbers + ' e tu dovrai inserire più volte un numero che non sia tra quelli estratti. Alla fine del gioco ti dirò il tuo punteggio.')

var explosiveNumbers = [];

for (var i = 0; i < maxExplosiveNumbers; i++) {
  explosiveNumbers[i] = numberRandomizer(minTotalNumbers, maxTotalNumbers)
}

console.log(explosiveNumbers);

var playerNumberInput;

var points = 0

var gameEndFlag = false;

do {
  playerNumberInput = parseInt(prompt( 'Inserisci un numero. (Punteggio attuale ' + points + ')' ))

  for (var i = 0; i < explosiveNumbers.length; i++) {
    if (explosiveNumbers[i] === playerNumberInput){
      alert('Mi dispiace hai perso :( Hai totalizzato ' + points + ' punti!');

      gameEndFlag = true;
    }
  }

  points++;

  if (points === maxTotalNumbers - maxExplosiveNumbers) {
    alert('Hai vinto! Hai totalizzato ' + points + ' punti!');

    gameEndFlag = true;
  }
} while (!gameEndFlag);
