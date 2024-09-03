# Prueba Técnica Backend

Este repositorio contiene las soluciones a la prueba técnica solicitada. A continuación, se detalla cada uno de los puntos requeridos, junto con la explicación del código y las mejoras propuestas.

## Estructura del Proyecto

- `index.js`: Contiene las soluciones de JavaScript.
- `exampleFunction.js`: Función documentada y mejorada.
- `exampleFunction2.ts`: Implementación en TypeScript de la función exampleFunction2.
- `fetchData.js`: Solución al problema de la función `fetchData`.
- `mongoOptimization.md`: Documento con la propuesta de optimización para la base de datos MongoDB.
- `graphqlImplementation.md`: Documento con los pasos para implementar GraphQL en una arquitectura de microservicios.

## Soluciones

### 1. JavaScript: Diferencias entre `&&`, `||` y `??`
Explicación de las diferencias entre los operadores lógicos `&&`, `||`, y el operador de coalición nula `??`.

### 2. JavaScript: Función para encontrar el string más largo en un array
Función en JavaScript que toma un array de strings y retorna el string más largo. La función se encuentra en el archivo `index.js`.

### 3. JavaScript: Análisis y mejora de `exampleFunction`
- **Documentación:** La función `exampleFunction` filtra los números pares de un array y luego duplica su valor.
- **Complejidad:** La complejidad es O(n), siendo n el tamaño del array.
- **Mejora:** Se mejora la legibilidad del código. La función y su mejora se encuentran en `exampleFunction.js`.

### 4. JavaScript/TypeScript: Análisis y mejora de `exampleFunction2`
- **Documentación:** La función `exampleFunction2` busca todas las ocurrencias de un valor objetivo en un array y retorna los índices donde se encuentran.
- **Mejora:** Uso de `reduce` para mejorar la legibilidad.
- **Implementación en TypeScript:** Se agregó tipado para mayor robustez en `exampleFunction2.ts`.

### 5. JavaScript: Solución al problema de `fetchData`
Explicación de por qué la función `fetchData` fallará y su corrección. El código corregido se encuentra en `fetchData.js`.

### 6. MongoDB: Optimización de la estructura y estrategias de indexación
Documento `mongoOptimization.md` que propone mejoras para la estructura de la base de datos y estrategias de indexación para optimizar las consultas en MongoDB.

### 7. GraphQL: Implementación en una arquitectura de microservicios
Documento `graphqlImplementation.md` que describe los pasos para implementar un endpoint unificado con GraphQL en una arquitectura de microservicios.

## Instrucciones para Ejecutar el Código

1. Clona este repositorio en tu máquina local.
   ```bash
   git clone https://github.com/tu-usuario/prueba-tecnica.git
