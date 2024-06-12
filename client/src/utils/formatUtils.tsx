export function capitalizeWord(inputWord: string) {
  // Replace underscores and hyphens with spaces
  if (!inputWord) {
    return null;
  }
  let formattedWord = inputWord?.replace(/[_-]/g, " ");

  // Capitalize the first letter
  formattedWord =
    formattedWord.charAt(0).toUpperCase() + formattedWord.slice(1);

  return formattedWord;
}
