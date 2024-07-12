# to-do-list
# Tienes que tener una db con el sig script

CREATE DATABASE todolist;
USE todolist;

CREATE TABLE tareas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  descripcion VARCHAR(255) NOT NULL,
  completado BOOLEAN DEFAULT FALSE
);
select * from tareas;

