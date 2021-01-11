//  Costanti -------------------------------------------------------------------
var maxExplosiveNumbers = 16;

var minTotalNumbers = 1;

var maxTotalNumbers = 100;
// -----------------------------------------------------------------------------

// Funzioni --------------------------------------------------------------------
function numberRandomizer(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function isValid(input) {
  if (isNaN(input)) {
    return false;
  }

  if (input < 1 || input > 100) {
    return false;
  }

  return true
}
// -----------------------------------------------------------------------------

alert('Ciao! Ora giocheremo a campo minato. Estrarrò ' + maxExplosiveNumbers + ' numeri da ' + minTotalNumbers + ' a ' + maxTotalNumbers + ' e tu dovrai inserire più volte un numero che non sia tra quelli estratti. Alla fine del gioco ti dirò il tuo punteggio.')

// Generazione e validazione dei numeri casuali explosiveNumbers ---------------
var explosiveNumbers = [];

var randomNumber;

while (explosiveNumbers.length < maxExplosiveNumbers) {
  randomNumber = numberRandomizer(minTotalNumbers, maxTotalNumbers);

  if (!explosiveNumbers.includes(randomNumber)) {
    explosiveNumbers.push(randomNumber);
  }
}

console.log(explosiveNumbers);
// -----------------------------------------------------------------------------

var playerNumberInput;

var playerNumberInputChronology = [];

var inputValidationFlag = false;

var points = 0;

var gameEndFlag = false;

do {
  inputValidationFlag = false;

  // Input utente più validazione di quest'ultimo ------------------------------
  while (!inputValidationFlag) {
    playerNumberInput = parseInt(prompt( 'Inserisci un numero. (Punteggio attuale ' + playerNumberInputChronology.length + ')' ));

    if (!isValid(playerNumberInput) || playerNumberInputChronology.includes(playerNumberInput)) {
      alert('Devi inserire un numero compreso tra ' + minTotalNumbers + ' e ' + maxTotalNumbers + ', inoltre non deve essere un numero già inserito. (Numeri inseriti: ' + playerNumberInputChronology + ' .)')
    }else {
      inputValidationFlag = true;

      playerNumberInputChronology.push(playerNumberInput);
    }
  }
  // ---------------------------------------------------------------------------

  // Condizioni di perdita e vittoria ------------------------------------------
  if (explosiveNumbers.includes(playerNumberInput)) {
    alert('Mi dispiace hai perso :( Hai totalizzato ' + playerNumberInputChronology.length + ' punti!');

    gameEndFlag = true;
  }

  if (points === maxTotalNumbers - maxExplosiveNumbers) {
    alert('Hai vinto! Hai totalizzato ' + playerNumberInputChronology.length + ' punti!');

    gameEndFlag = true;
  }
  // ---------------------------------------------------------------------------
} while (!gameEndFlag);
