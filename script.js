// tomamos los elementos
var inputTarea = document.getElementById("tarea");
var btn = document.getElementById("agregar");
var listado = document.getElementById("Listado");
var cantidad = document.getElementById("cantidad");

//  variable que lleva ka cantidad de tareas
var total = 0;

//funcion que agrega la tarea al listado
btn.onclick = function () {
  // controlamos si el campo esta vacio
  if (inputTarea.value == "") {

    alert("no puede dejar el campo vacio")
    return;
  }
  // tomamos el valor del campo
  var elemento = inputTarea.value;
  // creo un elemento li
  var li = document.createElement("li");
  li.textContent = elemento;
  li.className = "uk-flex uk-flex-between uk-flex-middle";

  //agrego el li al listado
  listado.appendChild(li);





  //incremento la cantidad de tareas
  total++;
  cantidad.innerHTML = total;


  //agregar check a cada elemento li
  var btncheck = document.createElement("input")
  btncheck.className = "uk-checkbox";
  btncheck.type = "checkbox";
  li.appendChild(btncheck)

  //cuando se haga el check que se tache la tarea
  btncheck.onclick = function () {
    if (btncheck.checked) {
      li.style.textDecoration = 'line-through';
    }
    else {
      li.style.textDecoration = 'none';
    }
  }
  //cuando se desmarque que vuelva a su estado normal
  btncheck.after = function () {

  }

  //agregamos el boton de eliminar a cada elemnto li
  var btneliminar = document.createElement("span");
  btneliminar.textContent = "X";
  btneliminar.className = "uk-text-danger";
  // btnEliminar.className = "uk-text-danger uk-margin-small-left"; 
  // POR X RAZON SI PONGO ESE ESTILO NO APARECE EL BOTON

  li.appendChild(btneliminar);

  //agregamos la funcionalidad que elimina la tarea
  btneliminar.onclick = function () {
    li.remove();
    total--;
    cantidad.innerHTML = total;
  }



  //limpiamos el campo input 
  inputTarea.value = "";

}