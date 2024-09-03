// Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ["red", "blue", "green", "yellow", "orange"];
// reverse for
let result = " ";

for (const col of colors) {
  //   console.log(col);
  let reverseWord = "";

  for (let x = col.length - 1; x >= 0; x--) {
    reverseWord += col[x];
  }
  result += reverseWord + " ";
}
console.log(result.trim());
// for reverse the color value
for (let x = colors.length - 1; x >= 0; x--) {
  console.log(colors[x]);
}
