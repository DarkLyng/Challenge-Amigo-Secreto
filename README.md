Inicialmente, se agregan dos listas, una que almacene los nombres dados por el usuario y otra que almacene los nombres que ya se han sorteados, estas se llaman ```listaNombres = []``` y ```nombreSorteado = []```.

![rm1](https://github.com/user-attachments/assets/c478bbc1-43a3-4cf9-acbd-442f5afa5b60)

Luego, se agrega una función para poder agregar un texto pequeño en la página cuando no se cumplan algunas de las condiciones necesarias del nombre dado.

![rm2](https://github.com/user-attachments/assets/2f497f7c-b3f6-4109-8a7f-4ba8a4e60ae5)

Seguidamente, se crea la función ```agregarAmigo()```, junto con la variable ```nombreAmigo()``` utilizando el id de ```'amigo'```. Se crean tres condiciones necesarias para poder agregar un elemento a la lista, los cuales son los siguientes: 
- Si la casilla está vacía devolverá el mensaje de ```'La casilla está vacía, por favor ingrese un nombre'```.
- Si se inserta un nombre repetido devolverá el mensaje de ```'Ese nombre ya se ingreso, por favor ingrese otro nombre'```. Para esto se utilizó ```toLowerCase()``` para que fuera posible dejar pasar si el mismo nombre se escribía con mayúsculas o minúsculas.
- Si se ingresa un número devolverá el mensaje de ```'Ingrese un nombre, no un número'```. Para esto detectaba un número entero por medio de ```parseInt```.

![rm3](https://github.com/user-attachments/assets/49426e87-0572-43e8-9989-6eabe4590301)

Se creó una función ```limpiarcasilla()``` para que vaciara la casilla donde se escribe el nombre, y se encuentra también dentro de la función ```nombreAmigo()``` para que se limpiara cada vez que se insertara un elemento.

![rm4](https://github.com/user-attachments/assets/07627a90-3976-4136-9c43-cc845419fa2d)

Luego, se creó otra función ```visualizarListaAmigo()``` que por medio de un for lograba agregar todos lo nombres dados en una lista con el id de ```'listaAmigos'```.

![rm5](https://github.com/user-attachments/assets/129eb0c2-4c94-49e7-98d3-83d79f464be6)

Seguidamente, se realizó otra función ```sortearAmigo()``` que elegía de forma aleatoria un amigo de la lista, se creó otra lista la cual iba eliminando los nombres sorteados hasta que no quedara ninguno, esto utilizando el id ```'resultado'```.
- Si no habían elementos en la lista despegaba la siguiente frase ```'Ya se sortearon todos los nombres'```.
- Si habían menos de dos elementos en la lista mostraba la siguiente frase ```'No se puede realizar el sorteo, por favor ingrese al menos dos nombres'```.
- Y si cumplía con las condiciones mostraba el nombre del amigo secreto de esta forma ```'El amigo secreto es ${nombreElegido}'```. La variable ```nombreElegido``` se obtenía con el ```amigoRandom``` y con ```amigosRestantes```. 

![rm6](https://github.com/user-attachments/assets/2f041618-4b13-4fae-beb3-5708b05f1970)

Además, se agregó una función llamada ```condicionesiniciales()``` que se esperaba que reiniciara el juego luego de sortear todos los nombres de los amigos, realizando una lista de acciones, como limpiar la casilla donde se inserta el nombre, vaciando todas las listas y eliminando los textos que aparecen por los id ```'amigos'```, ```'listaAmigos'``` y ```'resultado'```. 

![rm7](https://github.com/user-attachments/assets/4b91c53e-f7a4-4049-87dd-06274c8f3f8f)

Finalmente, es importante añadir que en el futuro se podrían realizar algunas mejoras, ya que en este momento no se cuenta con el conocimiento sufuciente, algunas de estas son:
- Agregar un botón de reinicio (luego de realizar los cursos de css) y que este vinculado a la función de condiciones iniciales, ya que para este código no se le encuentra mucha utilidad.
- No permitir que se le agreguen más nombres a la ```listaNombres```, una vez selccionado el botón de sortear.
