const persons = ["Rakib", "raafaf", "afdads", "afdadf", "taafa"];

const sortedPersons = persons.sort();
console.log(sortedPersons);
// ascending --> smaller to larger
// descending --. lager to smaller
const numbers = [1, 23, 3, 4, 3, 3, 3, 3, 3, 3];
// const numbers_asc = numbers.sort();//not working
// ascending
const numbers_asc = numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers_asc);

const numbers_dsc = numbers.sort(function(a, b) {
    return b - a;
});
console.log(numbers_dsc);