// exampleFunction: Filtra números pares y duplica su valor
function exampleFunction(arr) {
    const isEven = num => num % 2 === 0;
    const double = num => num * 2;
    return arr.filter(isEven).map(double);
}

// Ejemplo de uso
let numbers = [1, 2, 3, 4, 5, 6];
let result = exampleFunction(numbers);
console.log(result); // [4, 8, 12]
