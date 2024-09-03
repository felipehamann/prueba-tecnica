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
