// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];

function asignarTextoElemento(texto, elemento) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return console.log(elementoHTML);
}

function agregarAmigo(lista, texto) {
    let nombreAmigo = document.getElementById('listaAmigos');
    return console.log(nombreAmigo);
}


function validarNombreAmigo(lista) {
    if (nombreAmigo == "") {
        asignarTextoElemento('p','La casilla está vacía, por favor ingrese un nombre');
    } else {

    }
}


function limpiarcasilla() {
    document.querySelector('#amigo').value = '';
}

function visualizarListaAmigo(lista) { 

}

function sortearAmigo(lista) {
    let sorteoRandom = listaNombres
}



//pide un nombre y se ingresa en una lista
//verificar la casilla no esté vacía, si está vacía o sale un número sale mensaje "Ingrese un nombre", si no agrega el nombre a la lista
//verificar que no se repita el nombre, si se repite, dice "Nombre repetido, ingrese otro", si no continua
//guardarlo en una lista
//limpiar la casilla
//agregar una función en donde aparezcan todos los nombres ingresados abajo 
//Repetir el proceso hasta que se seleccione 'sortear amigo sercreto'
//seleccionar de forma aleatoria un nombre entre la lista de amigos y mostrarlo
//Luego de seleccionarlo repertir todo el proceso