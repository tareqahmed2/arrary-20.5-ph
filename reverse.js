const numbers = [1, 2, 3, 5, 6, 6, 7, 7];
// numbers.reverse();
// console.log(numbers);
// const reversed = numbers.reverse();
// console.log(reversed);

const rev_numbers = [];
for (const num of numbers) {
  console.log(num);
  //   rev_numbers.push(num);
  rev_numbers.unshift(num);
}
console.log(rev_numbers);
