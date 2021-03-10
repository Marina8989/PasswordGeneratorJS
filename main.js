const form = document.getElementById('passwordGeneratorForm');
const rangeInput = document.getElementById('rangeInput');
const numberInput = document.getElementById('numberInput');
const upperCase = document.getElementById('upperCase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const passwordDisplay = document.querySelector('.passwordDisplay');

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91,96)).concat(arrayFromLowToHigh(123, 126));

rangeInput.addEventListener('input', getValueInput);
numberInput.addEventListener('input', getValueInput);

function getValueInput(e) {
    const value = e.target.value;
    rangeInput.value = value;
    numberInput.value = value;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const characterAmount = numberInput.value;
    const inputUppercase = upperCase.checked;
    const inputNumbers = numbers.checked;
    const inputSymbols = symbols.checked;
    const password = generatePassword(characterAmount, inputUppercase, inputNumbers, inputSymbols);
    passwordDisplay.innerText = password;
})

function generatePassword(characterAmount, inputUppercase, inputNumbers, inputSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES;
    if(inputUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    if(inputNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    if(inputSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);

    const passwordCharacters = [];
    for(let i = 0; i < characterAmount; i++) {
       const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
       passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join('');
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}