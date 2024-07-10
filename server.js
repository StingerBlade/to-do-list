const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Servir archivos estáticos de la carpeta 'public'

// En memoria para almacenar las tareas (en un entorno real se usaría una base de datos)
let tareas = [];

// Ruta para obtener todas las tareas
app.get('/api/tareas', (req, res) => {
  res.json(tareas);
});

// Ruta para agregar una nueva tarea
app.post('/api/tareas', (req, res) => {
  const nuevaTarea = req.body;
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

// Ruta para eliminar una tarea por id
app.delete('/api/tareas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  tareas = tareas.filter(tarea => tarea.id !== id);
  res.status(204).send();
});

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
