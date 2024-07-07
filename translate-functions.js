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
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  "_": "..--.-",
  '"': ".-..-.",
  "$": "...-..",
  "@": ".--.-.",
};
// console.log(morseCodeLetters);

const reverseMorseCodeLib = {};
for (const key in morseCodeLib) {
  if (morseCodeLib.hasOwnProperty(key)) {
    const val = morseCodeLib[key];
    reverseMorseCodeLib[val] = key;
  }
}

export const translateTextToMorse = (input) => {
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

export const translateMorsetoText = (input) => {
  if (/[a-z\@\$\"\+\=\&\(\)\:\;\,\!\?\_]/gi.test(input)) {
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
