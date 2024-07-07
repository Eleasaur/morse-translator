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
  "/": "_.._.",
  "(": "_.__.",
  ")": "_.__._",
  "&": "._...",
  "=": "_..._",
  "+": "._._.",
  "-": "_...._",
  "_": "..__._",
  '"': "._.._.",
  "$": "..._.._",
  "@": ".__._.",
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
  if (input === "") {
    return "Please enter some text to translate.";
  }
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
  if (/[a-z\@\$\"\+\=\&\(\)\:\;\,\!\?\-]/gi.test(input)) {
    return "Please enter valid morse to translate.";
  }
  if (input === "") {
    return "Please enter some morse to translate.";
  }
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
