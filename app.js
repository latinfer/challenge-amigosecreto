// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = []; // Se declara el arrelgo "listaAmigos" sin elementos.
const amigoInput = document.getElementById("amigo"); // Se declara la variable "amigoInput" que obtiene el elemento con el id "amigo".
const listaAmigosUL = document.getElementById("listaAmigos"); // Se declara la variable "listaAmigosUL" que obtiene el elemento con el id "listaAmigos".
const resultadoUL = document.getElementById("resultado"); // Se declara la variable "resultadoUL" que obtiene el elemento con el id "resultado".
const agregarAmigoBtn = document.getElementById("agregarAmigoBtn"); // Se declara la variable "agregarAmigoBtn" que obtiene el elemento con el id "agregarAmigoBtn".

function agregarAmigo() {
  const nuevoAmigo = amigoInput.value.trim(); // Eliminar espacios en blanco al inicio y final

  if (nuevoAmigo !== "") { // Se establece que Si el input no está vacío
    listaAmigos.push(nuevoAmigo); // Se agrega el nuevo amigo al arreglo "listaAmigos"
    amigoInput.value = ""; // Limpiar el input
    mostrarListaAmigos(); // Se llama a la función "mostrarListaAmigos" que se encarga de mostrar la lista de amigos o el amigo ingresado por el usuario en el navegador.
  }
}

function mostrarListaAmigos() { // Se declara la función "mostrarListaAmigos"
  listaAmigosUL.innerHTML = ""; // Limpiar la lista antes de actualizarla

  listaAmigos.forEach(amigo => { // Se recorre el arreglo "listaAmigos" y se obtiene el amigo
    const nuevoLi = document.createElement("li"); // Se crea un nuevo elemento "li"
    nuevoLi.textContent = amigo; // Se establece el texto del elemento "li" con el amigo obtenido
    listaAmigosUL.appendChild(nuevoLi); // Se agrega el elemento "li" a la lista de amigos
  });
}

function sortearAmigo() { // Se declara la función "sortearAmigo"
  if (listaAmigos.length === 0) { // Se establece que Si la lista de amigos está vacía debe emitir un mensaje de alerta
    alert("Debes agregar amigos antes de sortear."); // mensaje de alerta si la lista de amigos está vacía
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); // Se declara la variable "indiceAleatorio" que obtiene un número aleatorio entre 0 y la longitud de la lista de amigos
  const amigoSeleccionado = listaAmigos[indiceAleatorio]; // Se declara la variable "amigoSeleccionado" que obtiene el amigo seleccionado aleatoriamente

  resultadoUL.innerHTML = ""; // Limpiar resultados anteriores
  const resultadoLi = document.createElement("li"); // Crear un nuevo elemento "li"
  resultadoLi.textContent = amigoSeleccionado; // Establecer el texto del elemento "li" con el amigo seleccionado aleatoriamente
  resultadoUL.appendChild(resultadoLi); // Agregar el elemento "li" a la lista de resultados

  // Opcional: Eliminar el amigo sorteado de la lista para evitar repeticiones en sorteos futuros
  // listaAmigos.splice(indiceAleatorio, 1); 
  // mostrarListaAmigos(); // Actualizar la lista visualmente
}
