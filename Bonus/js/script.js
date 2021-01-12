// Funzioni --------------------------------------------------------------------
function numberRandomizer(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function isValid(input, minNumber, maxNumber) {
  if (isNaN(input)) {
    return false;
  }

  if (input < minNumber || input > maxNumber) {
    return false;
  }

  return true
}

function rangeValueLabel(rangeObject, rangeLabel) {
  rangeObject.addEventListener('mousemove', function(){
    rangeLabel.innerText = rangeObject.value;
  })
}
// -----------------------------------------------------------------------------

// Funzione che svolge il gioco ------------------------------------------------
function minefieldGame(maxExplosiveNumbers, minTotalNumbers, maxTotalNumbers) {
  alert('Ciao! Ora giocheremo a campo minato. Estrarrò ' + maxExplosiveNumbers + ' numeri da ' + minTotalNumbers + ' a ' + maxTotalNumbers + ' e tu dovrai inserire più volte un numero che non sia tra quelli estratti. Alla fine del gioco ti dirò il tuo punteggio.')

  // Generazione e validazione dei numeri casuali explosiveNumbers -------------
  var explosiveNumbers = [];

  var randomNumber;

  while (explosiveNumbers.length < maxExplosiveNumbers) {
    randomNumber = numberRandomizer(minTotalNumbers, maxTotalNumbers);

    if (!explosiveNumbers.includes(randomNumber)) {
      explosiveNumbers.push(randomNumber);
    }
  }

  console.log(explosiveNumbers);
  // ---------------------------------------------------------------------------

  var playerNumberInput;

  var playerNumberInputChronology = [];

  var inputValidationFlag = false;

  var points = 0;

  var gameEndFlag = false;

  do {
    inputValidationFlag = false;

    // Input utente più validazione di quest'ultimo ----------------------------
    while (!inputValidationFlag) {
      playerNumberInput = parseInt(prompt( 'Inserisci un numero. (Punteggio attuale ' + playerNumberInputChronology.length + ')' ));

      if (!isValid(playerNumberInput, minTotalNumbers, maxTotalNumbers) || playerNumberInputChronology.includes(playerNumberInput)) {
        alert('Devi inserire un numero compreso tra ' + minTotalNumbers + ' e ' + maxTotalNumbers + ', inoltre non deve essere un numero già inserito. (Numeri inseriti: ' + playerNumberInputChronology + ' .)')
      }else {
        inputValidationFlag = true;

        playerNumberInputChronology.push(playerNumberInput);
      }
    }
    // -------------------------------------------------------------------------

    // Condizioni di perdita e vittoria ----------------------------------------
    if (explosiveNumbers.includes(playerNumberInput)) {
      alert('Mi dispiace hai perso :( Hai totalizzato ' + playerNumberInputChronology.length + ' punti!');

      gameEndFlag = true;
    }

    if (playerNumberInputChronology.length === maxTotalNumbers - maxExplosiveNumbers) {
      alert('Hai vinto! Hai totalizzato ' + playerNumberInputChronology.length + ' punti!');

      gameEndFlag = true;
    }
    // -------------------------------------------------------------------------
  } while (!gameEndFlag);
}

//  Costanti -------------------------------------------------------------------
var maxExplosiveNumbers;

var minTotalNumbers = 1;

var maxTotalNumbers;
// -----------------------------------------------------------------------------

// Scelta difficoltà con select ------------------------------------------------
var selectDifficulty = document.getElementsByClassName('select-difficulty')[0];

var playButton = document.getElementsByTagName('button')[0];

playButton.addEventListener('click', function(){
  switch (selectDifficulty.value) {
    case "0":
    maxExplosiveNumbers = 16;

    maxTotalNumbers = 100;

    break;
    case "1":
    maxExplosiveNumbers = 16;

    maxTotalNumbers = 80;

    break;
    case "2":
    maxExplosiveNumbers = 16;

    maxTotalNumbers = 50;

    break;
    default:
    maxExplosiveNumbers = 16;

    minTotalNumbers = 1;

    maxTotalNumbers = 100;
  }

  minefieldGame(maxExplosiveNumbers, minTotalNumbers, maxTotalNumbers)
})
// -----------------------------------------------------------------------------

var advancedSettingsButton = document.getElementsByTagName('button')[1];

var advancedSettingsBox = document.getElementsByClassName('advanced-settings-box')[0];

advancedSettingsButton.addEventListener('click', function(){
  switch (advancedSettingsBox.style.display) {
    case '' || 'none':
    advancedSettingsBox.style.display = 'block';

    break;
    case 'block':
    advancedSettingsBox.style.display = 'none';
  }
})

var rangeMaxTotalNumbers = document.getElementsByTagName('input')[0];

var rangeExplosives = document.getElementsByTagName('input')[1];

var rangeLabelMaxTotalNumbers = document.getElementsByTagName('span')[0]

var rangeLabelExplosives = document.getElementsByTagName('span')[1]

rangeValueLabel(rangeMaxTotalNumbers, rangeLabelMaxTotalNumbers);

rangeMaxTotalNumbers.addEventListener('mousemove', function(){
  rangeExplosives.max = rangeMaxTotalNumbers.value;
})

rangeValueLabel(rangeExplosives, rangeLabelExplosives);

var advancedSettingsPlayButton = document.getElementsByTagName('button')[2];




advancedSettingsPlayButton.addEventListener('click', function(){
  maxTotalNumbers = parseInt(rangeMaxTotalNumbers.value);

  maxExplosiveNumbers = parseInt(rangeExplosives.value);

  minefieldGame(maxExplosiveNumbers, minTotalNumbers, maxTotalNumbers)
})
