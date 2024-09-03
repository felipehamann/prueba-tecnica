// 1. JavaScript: Diferencia entre &&, || y ??
console.log("&&: Evalúa ambas expresiones y retorna el primer valor falso o el último verdadero.");
console.log("||: Evalúa ambas expresiones y retorna el primer valor verdadero que encuentre.");
console.log("??: Retorna el operando de la derecha si el de la izquierda es null o undefined.");

// 2. JavaScript: Función que toma un array de strings y retorna el string más largo
function findLongestString(strings) {
    return strings.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}

// Ejemplo de uso
let strings = ["apple", "banana", "cherry", "date"];
let longest = findLongestString(strings);
console.log(`El string más largo es: ${longest}`); // "banana"
