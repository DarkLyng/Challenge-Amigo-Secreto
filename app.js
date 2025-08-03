
let listaNombres = [];
let nombreSorteado = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo === "") {
        asignarTextoElemento('h3','La casilla está vacía, por favor ingrese un nombre.');
    
    } else if (nombreAmigo == parseInt(nombreAmigo)) {
        asignarTextoElemento('h3','Ingrese un nombre, no un número.');
        limpiarcasilla();
    
    } else {
        let nombreMinuscula = nombreAmigo.toLowerCase();
        
        if (listaNombres.includes(nombreMinuscula)){
            asignarTextoElemento('h3','Ese nombre ya se ingreso, por favor ingrese otro nombre.');
            limpiarcasilla();
        } else {
            listaNombres.push(nombreMinuscula);
            document.getElementById('listaAmigos').innerHTML = "";
            asignarTextoElemento('h3','');
            limpiarcasilla();
            visualizarListaAmigo(listaNombres);
            }
    }
    return console.log(listaNombres);
}

function limpiarcasilla() {
    document.getElementById('amigo').value ='';
    return;
}

function visualizarListaAmigo(lista) { 
    for (let i =0; i < listaNombres.length; i++){
            document.getElementById('listaAmigos').innerHTML += `<li>${listaNombres[i]}</li>`;
        }
    return ;
}

function sortearAmigo() {
    let amigosRestantes = [];
    for (let i=0; i < listaNombres.length; i++) {
        if (!nombreSorteado.includes(listaNombres[i])) {
            amigosRestantes.push(listaNombres[i]);
        }
    }

    if (amigosRestantes.length === 0) {
        document.getElementById('resultado').innerHTML = 'Ya se sortearon todos los nombres, por favor reinicie el sorteo.';
        return;
    } 
    if (amigosRestantes.length === 1 && nombreSorteado.length === 0) {
        document.getElementById('resultado').innerHTML = 'No se puede realizar el sorteo, por favor ingrese al menos dos nombres.';
        return;
    }

    let amigoRandom = Math.floor(Math.random()*amigosRestantes.length);
    let nombreElegido = amigosRestantes[amigoRandom];
    nombreSorteado.push(nombreElegido);
    document.getElementById('resultado').innerHTML = `El amigo secreto es ${nombreElegido}`;
    return;
}

function condicionesIniciales() {
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    asignarTextoElemento('h3','');
    limpiarcasilla();
    listaNombres = [];
    nombreSorteado = [];
    document.getElementById('amigo').value = '';
    
}

condicionesIniciales();

//Pasos
//1.Pide un nombre y se ingresa en una lista
//2.Verificar la casilla no esté vacía, si está vacía o sale un número sale mensaje "Ingrese un nombre", si no agrega el nombre a la lista
//3.Verificar que no se repita el nombre, si se repite, dice "Nombre repetido, ingrese otro", si no continua
//4.Guardarlo en una lista
//5.Limpiar la casilla
//6.Agregar una función en donde aparezcan todos los nombres ingresados abajo 
//7.Repetir el proceso hasta que se seleccione 'sortear amigo sercreto'
//8.Seleccionar de forma aleatoria un nombre entre la lista de amigos y mostrarlo
//9.Luego de seleccionarlo repertir todo el proceso
