
## 1. JavaScript: Diferencias entre `&&`, `||` y `??`

**&& (AND lógico):** 
- Este operador evalúa dos valores o expresiones. Si el primer valor es falso, lo devuelve de inmediato. Si el primer valor es verdadero, continúa evaluando el segundo y lo devuelve si ambos son verdaderos. Es útil para comprobar si dos o mas condiciones son ciertas.

**|| (OR lógico):**
- Este operador verifica dos valores o expresiones. Si el primer valor es verdadero, lo devuelve de inmediato. Si no, evalúa el segundo. Lo que hace es buscar el primer valor verdadero y devolverlo, o devolver el último valor si todos son falsos. Sirve para saber si una u otra expresion es verdadera. 

**?? (Operador de coalición nula):**
- Evalúa el valor a la izquierda y si es null o undefined, devuelve el valor de la derecha. Si el valor a la izquierda no es null o undefined, lo devuelve. Es ideal para asignar valores predeterminados cuando no se tiene algo definido.
