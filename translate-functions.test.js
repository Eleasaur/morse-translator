import {
  translateMorsetoText,
  translateTextToMorse,
} from "./translate-functions.js";

describe("given a text string, it will be translated to morse", () => {
  test("given a valid string of text, it will be translated correctly to morse.", () => {
    expect(translateTextToMorse("hello there")).toBe(
      ".... . .-.. .-.. ---/- .... . .-. ."
    );
    expect(
      translateTextToMorse(
        "abcdefghijklmnopqrstuvwxyz1234567890?!.,;:/()&=+-_$@"
      )
    ).toBe(
      ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --.. .---- ..--- ...-- ....- ..... -.... --... ---.. ----. ----- ..--.. -.-.-- .-.-.- --..-- -.-.-. ---... -..-. -.--. -.--.- .-... -...- .-.-. -....- ..--.- ...-.. .--.-."
    );
  });
  test("given no input, ask the user to input some text to translate.", () => {
    expect(translateTextToMorse("")).toBe(
      "Please enter some text to translate."
    );
    expect(translateTextToMorse(" ")).toBe(
      "Please enter some text to translate."
    );
  });
});

describe("given a morse string, it will be translated to text", () => {
  test("given a valid string of morse, it will be translated correctly to text", () => {
    expect(
      translateMorsetoText(".... . .-.. .-.. ---/.-- --- .-. .-.. -..")
    ).toBe("hello world");
    expect(
      translateMorsetoText(
        ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --.. .---- ..--- ...-- ....- ..... -.... --... ---.. ----. ----- ..--.. -.-.-- .-.-.- --..-- -.-.-. ---... -..-. -.--. -.--.- .-... -...- .-.-. -....- ..--.- ...-.. .--.-."
      )
    ).toBe("abcdefghijklmnopqrstuvwxyz1234567890?!.,;:/()&=+-_$@");
  });
  test("given an invalid morse string, it will ask the user to enter valid morse.", () => {
    expect(translateMorsetoText("hello")).toBe(
      "Please enter valid morse to translate."
    );
    expect(translateMorsetoText(".- .-/ab")).toBe(
      "Please enter valid morse to translate."
    );
    expect(translateMorsetoText("hello/.-- . .")).toBe(
      "Please enter valid morse to translate."
    );
  });
  test("given no input, ask the user to input some morse to translate.", () => {
    expect(translateMorsetoText("")).toBe(
      "Please enter some morse to translate."
    );
    expect(translateMorsetoText(" ")).toBe(
      "Please enter some morse to translate."
    );
  });
});
