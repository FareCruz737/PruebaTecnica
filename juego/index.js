// Definición de dos arreglos vacíos para almacenar iconos y selecciones
let iconos = []
let selecciones = []

// Función para generar el tablero del juego
function generarTablero() {
  cargarIconos()
  selecciones = []
  // Obtiene el elemento con id "tablero"
  let tablero = document.getElementById("tablero")
  let tarjetas = []
  // Bucle para generar las 24 tarjetas del tablero
  for (let i = 0; i < 24; i++) {
    // Añade el código HTML de una tarjeta al arreglo 'tarjetas'
    tarjetas.push(`
      <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
        <div class="tarjeta" id="tarjeta${i}">
          <div class="cara trasera" id="trasera${i}">
            ${iconos[0]}
          </div>
          <div class="cara superior">
            <i class="far fa-question-circle"></i>
          </div>
        </div>
      </div>
    `)
    // Si el índice es impar, elimina el primer elemento del arreglo 'iconos'
    if (i % 2 == 1) {
      iconos.splice(0, 1)
    }
  }
  // Ordena aleatoriamente las tarjetas en el arreglo 'tarjetas'
  tarjetas.sort(() => Math.random() - 0.5)
  // Actualiza el contenido del elemento con id "tablero" con las tarjetas generadas
  tablero.innerHTML = tarjetas.join(" ")
}

// Función para cargar los iconos en el arreglo 'iconos'
function cargarIconos() {
  iconos = [
    '<i class="fas fa-star"></i>',
    '<i class="far fa-star"></i>',
    '<i class="fas fa-star-of-life"></i>',
    '<i class="fas fa-star-and-crescent"></i>',
    '<i class="fab fa-old-republic"></i>',
    '<i class="fab fa-galactic-republic"></i>',
    '<i class="fas fa-sun"></i>',
    '<i class="fas fa-stroopwafel"></i>',
    '<i class="fas fa-dice"></i>',
    '<i class="fas fa-chess-knight"></i>',
    '<i class="fas fa-chess"></i>',
    '<i class="fas fa-dice-d20"></i>',
  ]
}

// Función para manejar la selección de una tarjeta
function seleccionarTarjeta(i) {
  let tarjeta = document.getElementById("tarjeta" + i)
  // Si la tarjeta no está girada, la gira y agrega su índice al arreglo 'selecciones'
  if (tarjeta.style.transform != "rotateY(180deg)") {
    tarjeta.style.transform = "rotateY(180deg)"
    selecciones.push(i)
  }
  // Si se han seleccionado dos tarjetas, llama a la función 'deseleccionar'
  if (selecciones.length == 2) {
    deseleccionar(selecciones)
    selecciones = []
  }
}

// Función para deseleccionar las tarjetas después de un breve intervalo
function deseleccionar(selecciones) {
  // Espera 1 segundo antes de realizar la deselección
  setTimeout(() => {
    // Obtiene las caras traseras de las tarjetas seleccionadas
    let trasera1 = document.getElementById("trasera" + selecciones[0])
    let trasera2 = document.getElementById("trasera" + selecciones[1])
    // Compara los contenidos de las caras traseras
    if (trasera1.innerHTML != trasera2.innerHTML) {
      // Si no son iguales, gira las tarjetas nuevamente
      let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
      let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
      tarjeta1.style.transform = "rotateY(0deg)"
      tarjeta2.style.transform = "rotateY(0deg)"
    } else {
      // Si son iguales, cambia el fondo de las caras traseras a "plum"
      trasera1.style.background = "plum"
      trasera2.style.background = "plum"
    }
  }, 1000);
}
