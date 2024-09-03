# Implementación de GraphQL en una Arquitectura de Microservicios

## Descripción del Problema
 Estás trabajando sobre una arquitectura de microservicios, donde cada 
servicio posee su propia base de datos y su propia REST API. Se te encarga proveer un 
endpoint para una API unificada usando GraphQL. Describa los pasos que tomaría para 
su implementación, y los cambios a realizar en cada servicio

## Pasos para la Implementación

### 1. Crear un Servidor GraphQL
Desarrollar un servidor central usando un framework como Apollo Server. Este servidor será el punto único de entrada para las consultas GraphQL.

### 2. Definir los Esquemas
Definir los esquemas GraphQL para cada servicio. Estos esquemas deben reflejar las entidades y operaciones que cada microservicio expone.

### 3. Implementar Resolvers
Escribir resolvers que se encarguen de llamar a los microservicios correspondientes. Cada resolver debe manejar una operación específica, como obtener datos de un servicio o realizar una mutación.

### 4. Unificación de Datos
Utilizar herramientas como `DataLoader` para gestionar eficientemente las llamadas a los microservicios y evitar problemas de over-fetching o N+1 queries.

### 5. Seguridad
Implementar mecanismos de autenticación y autorización en el servidor GraphQL. Esto centralizará la seguridad y garantizará que solo usuarios autorizados puedan acceder a ciertas operaciones.

## Cambios Necesarios en Cada Servicio
1. **Exponer Endpoints de Datos:** Asegúrarse de que cada microservicio exponga los datos necesarios a través de su API REST para ser consumidos por GraphQL.
2. **Optimización de Queries:** Revisar y optimizar las queries de cada microservicio para que funcionen eficientemente con las resoluciones de GraphQL.
3. **Implementar Autenticación:** Si no lo tienen, los microservicios deben implementar autenticación para integrarse de manera segura con el servidor GraphQL.

