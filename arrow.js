const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = numbers.reduce((a, b) => a + b);
console.log(sum);

let evens = numbers.filter(n => n % 2 === 0);
console.log(evens);

let pod2 = numbers.map(n => n ** 2);
console.log(pod2);