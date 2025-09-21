// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo(){    
    let amigo = document.getElementById('amigo').value; //Se obtiene el valor que se ingresa en el input.
    if(amigo == ""){
        alert("Por favor, inserte un nombre.");
    }else{
        //Agrega el amigo al arreglo de amigos.
        amigos.push(amigo);
        console.log(amigos);
        limpiarCaja();
    }   
}


//Funcion que limpia la caja del input donde se ingresa el amigo
function limpiarCaja(){
    let valorInput = document.querySelector('#amigo');
    valorInput.value = "";
}