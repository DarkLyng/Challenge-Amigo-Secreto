Inicialmente, se agregan dos listas, una que almacene los nombres dados por el usuario y otra que almacene los nombres que ya se han sorteados, estas se llaman ```listaNombres = []``` y ```nombreSorteado = []```.

Luego, se agrega una función para poder agregar un texto pequeño en la página cuando no se cumplan algunas de las condiciones necesarias del nombre dado.

Seguidamente, se crea la función ```agregarAmigo()```, junto con la variable ```nombreAmigo()``` utilizando el id de ```'amigo'```. Se crean tres condiciones necesarias para poder agregar un elemento a la lista, los cuales son los siguientes: 
-Si la casilla está vacía devolverá el mensaje de ```'La casilla está vacía, por favor ingrese un nombre'```.
-Si se inserta un nombre repetido devolverá el mensaje de ```'Ese nombre ya se ingreso, por favor ingrese otro nombre'```. Para esto se utilizó ```toLowerCase()``` para que fuera posible dejar pasar si el mismo nombre se escribía con mayúsculas o minúsculas.
-Si se ingresa un número devolverá el mensaje de ```'Ingrese un nombre, no un número'```. Para esto detectaba un número entero por medio de ```parseInt```.

Se creó una función ```limpiarcasilla()``` para que vaciara la casilla donde se escribe el nombre, y se encuentra también dentro de la función ```nombreAmigo()``` para que se limpiara cada vez que se insertara un elemento.

Luego, se creó otra función ```visualizarListaAmigo()``` que por medio de un for lograba agregar todos lo nombres dados en una lista con el id de ```'listaAmigos'```.

Seguidamente, se realizó otra función ```sortearAmigo()``` que elegía de forma aleatoria un amigo de la lista, se creó otra lista la cual iba eliminando los nombres sorteados hasta que no quedara ninguno, esto utilizando el id ```'resultado'```.

-Si no habían elementos en la lista despegaba la siguiente frase ```'Ya se sortearon todos los nombres'```.
-Si habían menos de dos elementos en la lista mostraba la siguiente frase ```'No se puede realizar el sorteo, por favor ingrese al menos dos nombres'```.
-Y si cumplía con las condiciones mostraba el nombre del amigo secreto de esta forma ```'El amigo secreto es ${nombreElegido}'```. La variable ```nombreElegido``` se obtenía con el ```amigoRandom``` y con ```amigosRestantes```. 

Además, se agregó una función llamada ```condicionesiniciales()``` que se esperaba que reiniciara el juego luego de sortear todos los nombres de los amigos, realizando una lista de acciones, como limpiar la casilla donde se inserta el nombre, vaciando todas las listas y eliminando los textos que aparecen por los id ```'amigos'```, ```'listaAmigos'``` y ```'resultado'```. 

Finalmente, es importante añadir que en el futuro se podrían realizar algunas mejoras, ya que en este momento no se cuenta con el conocimiento sufuciente, algunas de estas son:
-Agregar un botón de reinicio y que este vinculado a la función de condiciones iniciales, ya que para este código no se le encuentra mucha utilidad.
-No permitir que se le agreguen más nombres a la ```listaNombres```, una vez selccionado el botón de sortear.
