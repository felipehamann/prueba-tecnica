// fetchData.js: Corrige la función fetchData para manejar correctamente la promesa
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

// Ejemplo de uso
fetchData();
