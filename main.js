 if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(function (position) {
    document.getElementById('data').innerHTML = "latitud" + position.coords.latitude 
    + "<br>longitud: " + position.coords.longitude ;
    
});


 }








 //variables
var input = document.getElementById('input1');
 var botonBuscar = document.getElementById('boton1');
 var contenedorPokemon = document.getElementById('contenedor');





    //alert("peticion");
function buscamePokemon(pokemon) {
   

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(Response => Response.json())
    .then(data =>{
    console.log(data);
        agregarPokemon(data);
    
    });

}
   
    
       function agregarPokemon(pokemon){
          
    var img = document.createElement('img');
    img.src = pokemon.sprites.front_default;
    img.classList.add('imagen-imagen');
    
    var h3 = document.createElement('h3');
    h3.textContent = pokemon.name;
    
    var h4 = document.createElement('h4');
    h4.innerHTML = pokemon.abilities[0].ability.name;
    var h5  = document.createElement('h5');
    h5.innerHTML = pokemon.moves[0].move.name;

    contenedorPokemon.appendChild(img);
    contenedorPokemon.appendChild(h3);
    contenedorPokemon.appendChild(h4);
    contenedorPokemon.appendChild(h5);
    
       };

    botonBuscar.addEventListener('click', (e) =>{
      buscamePokemon(input.value);
      });