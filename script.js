import {
  translateMorsetoText,
  translateTextToMorse,
} from "./translate-functions.js";
//there is a space between each character in morse code, for a space between words, "/" is commonly used

// console.log(reverseMorseCodeLib);

// console.log(translateTextToMorse("hello there Obiwan"));

// console.log(translateMorsetoText(".... . .-.. .-.. ---/- .... . .-. ./"));

const textInputForm = document.querySelector(
  ".translator_container_form--text"
);

const morseInputForm = document.querySelector(
  ".translator_container_form--morse"
);

textInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("#inputText");
  const inputValue = translateTextToMorse(input.value.trim());

  input.value = "";

  const morseOutput = document.querySelector(
    ".translator_container_results-morse"
  );

  morseOutput.innerHTML = inputValue;

  const nothingPara = document.querySelector("#nothingParaMorse");
  if (nothingPara) {
    morseOutput.removeChild(nothingPara);
  }
});

morseInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("#inputMorse");
  const inputValue = translateMorsetoText(input.value.trim());

  input.value = "";

  const textOutput = document.querySelector(
    ".translator_container_results-text"
  );

  textOutput.innerHTML = inputValue;

  const nothingPara = document.querySelector("#nothingParaText");
  if (nothingPara) {
    morseOutput.removeChild(nothingPara);
  }
});
