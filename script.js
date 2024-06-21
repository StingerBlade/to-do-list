  // Obtener todos los elementos <li> en el documento
  var myNodelist = document.getElementsByTagName("LI");
  var i;
  // Iterar sobre todos los elementos <li>
  for (i = 0; i < myNodelist.length; i++) {
    // Crear un elemento <span> para el botón de cierre
    var span = document.createElement("SPAN");
    // Crear el texto "×" para el botón de cierre
    var txt = document.createTextNode("\u00D7");
    // Asignar la clase "close" al <span> recién creado
    span.className = "close";
    // Añadir el texto "×" al <span>
    span.appendChild(txt);
    // Añadir el <span> al elemento <li> actual
    myNodelist[i].appendChild(span);
  }

  // Obtener todos los elementos con la clase "close"
  var close = document.getElementsByClassName("close");
  var i;
  // Iterar sobre todos los botones de cierre
  for (i = 0; i < close.length; i++) {
    // Asignar una función al evento onclick de cada botón de cierre
    close[i].onclick = function() {
      // Obtener el elemento padre del botón de cierre (el <li>)
      var div = this.parentElement;
      // Ocultar el elemento <li> configurando su estilo display a "none"
      div.style.display = "none";
    }
  }

  // Obtener el elemento <ul> y añadir un evento click listener
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    // Si el objetivo del evento es un <li>
    if (ev.target.tagName === 'LI') {
      // Alternar la clase "checked" del <li>
      ev.target.classList.toggle('checked');
    }
  }, false);

  // Función para crear un nuevo elemento <li> al hacer clic en el botón "Add"
  function newElement() {
    // Crear un nuevo elemento <li>
    var li = document.createElement("li");
    // Obtener el valor del input con id="myInput"
    var inputValue = document.getElementById("myInput").value;
    // Crear un nodo de texto con el valor del input
    var t = document.createTextNode(inputValue);
    // Añadir el nodo de texto al <li>
    li.appendChild(t);
    // Si el input está vacío, mostrar una alerta
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      // De lo contrario, añadir el <li> a la lista <ul> con id="myUL"
      document.getElementById("myUL").appendChild(li);
    }
    // Limpiar el valor del input
    document.getElementById("myInput").value = "";

    // Crear un elemento <span> para el botón de cierre
    var span = document.createElement("SPAN");
    // Crear el texto "×" para el botón de cierre
    var txt = document.createTextNode("\u00D7");
    // Asignar la clase "close" al <span>
    span.className = "close";
    // Añadir el texto "×" al <span>
    span.appendChild(txt);
    // Añadir el <span> al nuevo <li>
    li.appendChild(span);

    // Asignar la función de cierre a todos los nuevos botones de cierre
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        // Obtener el elemento padre del botón de cierre (el <li>)
        var div = this.parentElement;
        // Ocultar el elemento <li> configurando su estilo display a "none"
        div.style.display = "none";
      }
    }
  }