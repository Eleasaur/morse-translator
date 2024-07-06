//there is a space between each character in morse code, for a space between words, "/" is commonly used

const morseCodeLib = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "0": "-----",
  "?": "..--..",
  "!": "-.-.--",
  ".": ".-.-.-",
  ",": "--..--",
  ";": "-.-.-.",
  ":": "---...",
};
// console.log(morseCodeLetters);

const reverseMorseCodeLib = {};
for (const key in morseCodeLib) {
  if (morseCodeLib.hasOwnProperty(key)) {
    const val = morseCodeLib[key];
    reverseMorseCodeLib[val] = key;
  }
}

// console.log(reverseMorseCodeLib);

const translateTextToMorse = (input) => {
  const words = input.split(" ");
  const translatedWords = words.map((word) => {
    const chars = word.toUpperCase().split("");
    const morseChars = chars.map((char) => {
      return morseCodeLib[char] || [char];
    });
    return morseChars.join(" ");
  });
  return translatedWords.join("/");
};

// console.log(translateTextToMorse("hello there Obiwan"));

const translateMorsetoText = (input) => {
  const morseWords = input.split("/");
  const translatedWords = morseWords.map((morseWord) => {
    const morseChars = morseWord.split(" ");
    const chars = morseChars.map((morseChar) => {
      return reverseMorseCodeLib[morseChar] || morseChar;
    });
    return chars.join("");
  });
  return translatedWords.join(" ").toLowerCase();
};

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

  const nothingPara = document.querySelector("#nothingPara");
  if (nothingPara) {
    morseOutput.removeChild(nothingPara);
  }
});

morseInputForm.addEventListener("submit", (e) => {});
