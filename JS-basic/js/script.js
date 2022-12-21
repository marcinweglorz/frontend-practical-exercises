//zadanie nr 1

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);

// zadanie nr 2

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//zadanie nr 3

function addNumbers(x, y, z) {
  console.log(x + y * z);
}

addNumbers(1, 2, 3);

//zadanie 4

if (numbers.length > 5) {
  console.log(`true`);
} else {
  console.log(`false`);
}

//zadanie 5

console.log(`Tablica z cyframi ma ${numbers.length} elementów.`);
