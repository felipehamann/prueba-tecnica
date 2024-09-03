// exampleFunction2.ts: Busca todas las ocurrencias de target en un array y devuelve los índices
function exampleFunction2(arr: Array<number | string>, target: number | string): number[] {
    return arr.reduce((result: number[], item, index) => {
        if (item === target) result.push(index);
        return result;
    }, []);
}

// Ejemplo de uso
let array = ["apple", "banana", "cherry", "apple"];
let indices = exampleFunction2(array, "apple");
console.log(indices); // [0, 3]
