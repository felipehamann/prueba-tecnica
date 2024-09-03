# Optimización de la Base de Datos MongoDB

## Estructura de la Base de Datos

### Problemas Observados
- **Redundancia de datos:** Si hay información repetitiva, como datos de clientes, es recomendable normalizar la base de datos.
- **Tamaño del documento:** Si los documentos son muy grandes, dividirlos en subdocumentos o colecciones más pequeñas puede ser beneficioso.

### Propuesta de Mejora
1. **Normalización:** Crear colecciones separadas para datos repetitivos (por ejemplo, `clientes`).
2. **División de documentos:** Si los documentos son grandes, dividir la información en subdocumentos.

## Estrategias de Indexación

### Índices Propuestos
1. **Índices compuestos:** Crear índices compuestos en los campos más consultados juntos, como `clienteId` y `fechaPedido`.
2. **Índice único:** Aplicar índices únicos en campos que deban ser únicos, como el ID de pedido.
3. **Índice TTL:** Implementar un índice TTL si los pedidos tienen una vigencia limitada.

### Casos de Uso
- **Consultas rápidas por cliente y fecha:** El índice compuesto en `clienteId` y `fechaPedido` optimizará las consultas que buscan pedidos por cliente en un rango de fechas.
- **Búsqueda de pedidos específicos:** Un índice en el ID del pedido garantizará consultas rápidas y evitará duplicados.
- **Eliminación automática:** El índice TTL puede gestionar la eliminación automática de documentos que ya no sean necesarios.
