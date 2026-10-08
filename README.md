# Product Backlog

**HU1 (RF1).** 
- Como integrante del equipo, quiero crear una tarea con título, descripción, responsable, estado y fecha límite, para que quede guardada y disponible para consultarla después.
- Criterio de aceptación: al enviar POST /tareas con los datos requeridos, la API responde 201 y la tarea aparece luego en GET /tareas.

**HU2 (RF2).** 
- Como integrante del equipo, quiero listar todas las tareas, para saber qué hay pendiente.
- Criterio de aceptación: GET /tareas devuelve la lista de tareas en JSON.

**HU3 (RF3).** 
- Como integrante del equipo, quiero editar los datos de una tarea, para mantenerla actualizada.
- Criterio de aceptación: al enviar PUT /tareas/:id con nuevos datos, los cambios se ven luego en GET /tareas.

**HU4 (RF4).** 
- Como integrante del equipo, quiero eliminar una tarea, para quitar las que ya no sirven.
- Criterio de aceptación: al enviar DELETE /tareas/:id, la tarea deja de aparecer en GET /tareas.

**HU5 (RF5).** 
- Como integrante del equipo, quiero asignar una tarea a un integrante existente, para saber quién es responsable.
- Criterio de aceptación: una tarea solo se puede asignar a un integrante que exista.

**HU6 (RF6).** 
- Como integrante del equipo, quiero cambiar el estado de una tarea, para reflejar su avance.
- Criterio de aceptación: el estado solo acepta pendiente, en progreso o hecha.

**HU7 (RF7).** 
- Como integrante del equipo, quiero filtrar las tareas por estado, para ver solo las que me interesan.
- Criterio de aceptación: GET /tareas?estado=pendiente devuelve solo las tareas con ese estado.

**HU8 (RF8).** 
- Como integrante del equipo, quiero filtrar las tareas por responsable, para ver lo que le toca a cada persona.
- Criterio de aceptación: GET /tareas?responsable=ID devuelve solo las tareas de ese integrante.

**HU9 (RF9).** 
- Como integrante del equipo, quiero registrar integrantes con nombre y correo, para poder asignarles tareas.
- Criterio de aceptación: al enviar POST /integrantes con nombre y correo, la API responde 201 y el integrante aparece en GET /integrantes.



---

# División en sprints para las historias de usuario

## Sprint 1 (Semana 2): funcionalidades base
- HU1: Crear tarea
- HU2: Listar tareas
- HU9: Registrar integrantes

## Sprint 2 (Semana 3): funcionalidades restantes
- HU3: Editar tarea
- HU4: Eliminar tarea
- HU5: Asignar tarea a un integrante
- HU6: Cambiar estado de una tarea

## Sprint 3 (Semana 4): ajustes, pruebas y despliegue
- HU7: Filtrar tareas por estado
- HU8: Filtrar tareas por responsable
- Pruebas y despliegue


# Tablero Kanban

| Por hacer                     | En progreso | Hecho |
|                               |             |       |
| HU1: Crear tarea              |             |       |
| HU2: Listar tareas            |             |       |
| HU3: Editar tarea             |             |       |
| HU4: Eliminar tarea           |             |       |
| HU5: Asignar tarea            |             |       |
| HU6: Cambiar estado           |             |       |
| HU7: Filtrar por estado       |             |       |
| HU8: Filtrar por responsable  |             |       |
| HU9: Registrar integrantes    |             |       |