const nombres = [
    "Max",
    "Luna",
    "Bella",
    "Charlie",
    "Sadie",
    "Cooper",
    "Ruby",
    "Zeus",
    "Milo",
    "Sophie",
    "Oliver",
    "Chloe",
    "Rocky",
    "Lily",
    "Leo",
    "Mia",
    "Lucy",
    "Daisy",
    "Bailey",
    "Jack"
  ];

  // Array de nombre de los perros
  


const img = 'https://dog.ceo/api/breed/hound/images'; 

// Url de los datos, los cuales llaaman las imagenes de los perros que utilizaremos mas adelante; 
const marcoFirts = document.getElementById('Lista');

// Seleccion de las cajas que vamos a utilizar para mostrar los perros. 

const raza = document.createElement('p'); 
raza.className = 'raza'

// Creamos una constate que nos va a permitir poner el texto de las sub-raza de los perros; 

fetch(img)
.then(resposite => resposite.json())
.then(data => {

  // En esta parte llamamos a la api de dogs y la convertimos en formato json para que sean lejible; 

for(let i =0; i < 12; i++){
const vista = document.createElement('div'); 
vista.className = 'Caja-datos'; 
const dogs = document.createElement('img'); 
dogs.src = data.message[i]; 

dogs.addEventListener('mouseenter', () => {
console.log('Hoola')

raza.textContent = 'Raza inglesa'; 


vista.appendChild(raza)

});


dogs.addEventListener('mouseleave', () => {
  console.log('¡Se fue!');
  vista.removeChild(raza);
});
const name = document.createElement('p'); 
name.textContent = nombres[i]; 


vista.appendChild(dogs);  
vista.appendChild(name); 
marcoFirts.appendChild(vista); 
}

console.log(data); 
})
.catch( alert('Lo lamentamos pero hubo un erros, cuide su conexion'), console.log('Lo lamentomos hubo un error'))

// creamos un ciclo forma para crear div que van a almacenar las img y los nombres de los perros y hacemos que cada imagen tenga un dato, 
// de la api para que se muestren las imagenes de los perros, tambien hacemos un evento para cuando el maus este encima se muestre la sub-raza, 
// de los perrros, y uno para cuando se le quite el maus. 







