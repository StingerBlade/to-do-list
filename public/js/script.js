// Tomamos los elementos
var inputTarea = document.getElementById("tarea");
var btn = document.getElementById("agregar");
var listado = document.getElementById("Listado");
var cantidad = document.getElementById("cantidad");

// Variable que lleva la cantidad de tareas
var total = 0;

// Función para obtener tareas desde la API
function obtenerTareas() {
  fetch('/api/tareas')
    .then(response => response.json())
    .then(data => {
      listado.innerHTML = '';
      data.forEach(tarea => agregarTareaAlDOM(tarea));
      total = data.length;
      cantidad.innerHTML = total;
    });
}

// Función para agregar nueva tarea a la API
function agregarTarea(tarea) {
  fetch('/api/tareas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tarea)
  })
    .then(response => response.json())
    .then(data => {
      agregarTareaAlDOM(data);
      total++;
      cantidad.innerHTML = total;
    });
}

// Función para eliminar tarea de la API
function eliminarTarea(id) {
  fetch(`/api/tareas/${id}`, {
    method: 'DELETE'
  }).then(() => {
    total--;
    cantidad.innerHTML = total;
  });
}

// Función para agregar tarea al DOM
function agregarTareaAlDOM(tarea) {
  var li = document.createElement("li");
  li.textContent = tarea.descripcion;
  li.className = "uk-flex uk-flex-between uk-flex-middle";

  var btncheck = document.createElement("input");
  btncheck.className = "uk-checkbox";
  btncheck.type = "checkbox";
  li.appendChild(btncheck);

  btncheck.onclick = function () {
    if (btncheck.checked) {
      li.style.textDecoration = 'line-through';
    } else {
      li.style.textDecoration = 'none';
    }
  }

  var btneliminar = document.createElement("span");
  btneliminar.textContent = "X";
  btneliminar.className = "uk-text-danger";

  li.appendChild(btneliminar);

  btneliminar.onclick = function () {
    li.remove();
    eliminarTarea(tarea.id);
  }

  listado.appendChild(li);
}

// Manejar el evento de agregar tarea
btn.onclick = function () {
  if (inputTarea.value == "") {
    alert("No puede dejar el campo vacío");
    return;
  }
  var tarea = {
    descripcion: inputTarea.value
  };
  agregarTarea(tarea);
  inputTarea.value = "";
};

// Cargar tareas al cargar la página
window.onload = obtenerTareas;
