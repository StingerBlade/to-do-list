const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

/* CONEXION A BASE DE DATOS MYSQL INICIO */
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'todolist',
  port: 3306
});

connection.connect(error => {
  if (error) {
    console.log('Error conectando con la base de datos', error);
  } else {
    console.log('Conectado a la base de datos');
  }
});
/* CONEXION A BASE DE DATOS MYSQL fin */
/* Middleware */
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Servir archivos estáticos de la carpeta 'public'

/* Rutas de la API */
app.get('/api/tareas', (req, res) => {
  connection.query('SELECT * FROM tareas', (error, results) => {
    if (error) {
      console.log('Error fetching data', error);
      res.status(500).send('Error fetching data');
    } else {
      res.json(results);
    }
  });
});

app.post('/api/tareas', (req, res) => {
  const { descripcion } = req.body;
  connection.query('INSERT INTO tareas (descripcion) VALUES (?)', [descripcion], (error, results) => {
    if (error) {
      console.log('Error inserting data', error);
      res.status(500).send('Error inserting data');
    } else {
      const newTask = { id: results.insertId, descripcion, completado: false };
      res.status(201).json(newTask);
    }
  });
});

app.delete('/api/tareas/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM tareas WHERE id = ?', [id], (error, results) => {
    if (error) {
      console.log('Error deleting data', error);
      res.status(500).send('Error deleting data');
    } else {
      res.status(204).send();
    }
  });
});

/* Ruta para servir el archivo HTML */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/* Iniciar el servidor */
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
