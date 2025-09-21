// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let elementoLista = document.getElementById('listaAmigos');



function agregarAmigo(){    
    let amigo = document.getElementById('amigo').value; //Se obtiene el valor que se ingresa en el input.
    if(amigo == ""){
        alert("Por favor, inserte un nombre.");
    }else{
        //Agrega el amigo al arreglo de amigos.
        amigos.push(amigo);
        console.log(amigos);
        limpiarCaja();
        recorreListaAmigos();
    }   
}

//Funcion para actualizar la lista de amigos
function recorreListaAmigos(){
    let nuevoItemDeLista; 
    //Este limpia la lista que se va a mostrar en la pagina html
    elementoLista.innerHTML = "";
    //Este array recorre la lista de amigos
    for(let i = 0; i<=amigos.length-1; i++){
        //Crea un nuevo elemento en la lista
        nuevoItemDeLista = document.createElement('li');
        //Asigna el nombre al nuevo <li>
        nuevoItemDeLista.textContent = amigos[i];
        elementoLista.appendChild(nuevoItemDeLista);
    } 
}


//Funcion que limpia la caja del input donde se ingresa el amigo
function limpiarCaja(){
    let valorInput = document.querySelector('#amigo');
    valorInput.value = "";
}