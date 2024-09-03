// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

const numbers = ["Tom", "Tim", "Tin", "Tik"];
let addNumbers = "";

for (const num of numbers) {
  //   console.log(num);

  addNumbers += num;
}
console.log(addNumbers);
