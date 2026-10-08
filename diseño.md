# Diseño

## 1. Modelo de datos

Entidad: Tarea
- id            (número, autogenerado)
- titulo        (texto, obligatorio)
- descripcion   (texto, opcional)
- responsable   (número, id de un integrante existente, obligatorio)
- estado        (texto: "pendiente" | "en progreso" | "hecha", obligatorio)
- fechaLimite   (texto con fecha, opcional)

Entidad: Integrante
- id            (número, autogenerado)
- nombre        (texto, obligatorio)
- correo        (texto, obligatorio)

## 2. Rutas de la API

| Método | Ruta                    | Qué hace                         |
|        |                         |                                  |
| GET    | /tareas                 | Lista todas las tareas           |
| GET    | /tareas/:id             | Consulta una tarea por id        |
| POST   | /tareas                 | Crea una tarea nueva             |
| PUT    | /tareas/:id             | Edita una tarea existente (incluye asignarla a un integrante y cambiar su estado)                                                               |
| DELETE | /tareas/:id             | Elimina una tarea                |
| GET    | /tareas?estado=pendiente| Filtra las tareas por estado     |
| GET    | /tareas?responsable=1   | Filtra las tareas por responsable|
| GET    | /integrantes            | Lista todos los integrantes      |
| POST   | /integrantes            | Registra un integrante nuevo     |

## 3. Estructura de carpetas del proyecto

/proyecto
  /src
    /routes       → define las rutas y qué función atiende cada una
    /controllers  → la lógica de cada acción (crear, listar, editar...)
    /data         → donde se guarda la información (arreglo o archivo JSON)
  index.js        → arranca el servidor Express
  package.json
  requisitos.md
  README.md