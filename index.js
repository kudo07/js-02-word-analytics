const textareaEl = document.querySelector('.textarea');
const wordsNumbersEl = document.querySelector('.stat__number--words');
const charactersNumbersEl = document.querySelector('.stat__number--characters');
const twitterNumbersEl = document.querySelector('.stat__number--twitter');
const facebookNumbersEl = document.querySelector('.stat__number--facebook');

const inputHandler = () => {
  // example of input validation
  if (textareaEl.value.includes('<script>')) {
    alert("you can't use the <script> tag in your text");
    textareaEl.value = textareaEl.value.replace('<script>', '');
  }
  // determine new numbers we use let as we change the value in the later block
  let numberofWords = textareaEl.value.split(' ').length;
  if (textareaEl.value.length === 0) {
    numberofWords = 0;
    // because we we remove the senteces it shows still one as it count the length of empty array with empty strings
  }
  const numberofCharacters = textareaEl.value.length;
  const twitterCharactersLeft = 280 - numberofCharacters;
  const facebookCharactersLeft = 2200 - numberofCharacters;
  //
  //   add visual indicator if limit is exceeded
  if (twitterCharactersLeft < 0) {
    twitterNumbersEl.classList.add('stat__number--limit');
  } else {
    twitterNumbersEl.classList.remove('stat__number--limit');
  }
  if (facebookCharactersLeft < 0) {
    facebookNumbersEl.classList.add('stat__number--limit');
  } else {
    facebookNumbersEl.classList.remove('stat__number--limit');
  }
  //
  // set new numbers
  wordsNumbersEl.textContent = numberofWords;
  charactersNumbersEl.textContent = numberofCharacters;
  twitterNumbersEl.textContent = twitterCharactersLeft;
  facebookNumbersEl.textContent = facebookCharactersLeft;
};
textareaEl.addEventListener('input', inputHandler);
