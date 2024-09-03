const statement = "I am a hard working person";

const words = statement.split(" ");
// console.log(words);
const reversedWords = words.reverse();
// console.log(reversedWords);
const reverseStatement = reversedWords.join("... ");
console.log(reverseStatement);
