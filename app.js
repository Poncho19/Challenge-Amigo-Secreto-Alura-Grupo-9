// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
//Funcion que habilita el sorteo de los amigos
let indiceAleatorio;
let nombreSeleccionado;
let elementoLista = document.getElementById('listaAmigos');
let resulatoAmigo = document.getElementById('resultado');


//Funcion que hace funcionar el boton añadir
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



function sortearAmigo(){
    
    if(amigos.length != 0){
        //Genera el indice aleatorio para indicar que amigo sale sorteado
        indiceAleatorio = parseInt(Math.floor(Math.random()*(amigos.length)));
        console.log(indiceAleatorio);
        //Se selecciona el nombre y se crea un mensaje
        nombreSeleccionado = document.createElement('li');
        nombreSeleccionado.textContent = `El amigo secreto sorteado es: ${amigos[indiceAleatorio]}`;
        //Limpia la lista de amigos
        elementoLista.innerHTML = "";
        //Se muestra el mensaje del amigo sorteado
        resulatoAmigo.appendChild(nombreSeleccionado);
    }else{
        alert("Debes ingresar al menos a una persona en el campo 'Escribe un nombre'");
    }
    
}

//Funcion que limpia la caja del input donde se ingresa el amigo
function limpiarCaja(){
    let valorInput = document.querySelector('#amigo');
    valorInput.value = "";
}