# Practica03-Javascript
Introduccion a JavaScript

```
CONSEJO ACADÉMICO Aprobación: 2016 / 04 / 06
Formato: Guía de Práctica de Laboratorio / Talleres / Centros de Simulación
```
## PRÁCTICA DE LABORATORIO

# CARRERA: COMPUTACION ASIGNATURA: PROGRAMACIÓN HIPERMEDIAL

NRO. PRÁCTICA: 3 TÍTULO PRÁCTICA: Validaciones y manipulación de información usando JavaScript

OBJETIVO ALCANZADO:

- Entender y organizar de una mejor manera los sitios de web en Internet
- Diseñar adecuadamente elementos gráficos en sitios web en Internet.
- Crear sitios web aplicando estándares actuales.

```
ACTIVIDADES DESARROLLADAS
```
# 1. Crear un repositorio en GitHub con el nombre “ Practica03 – Javascript”

# 2. Crear una carpeta para la solución de cada ejercicio antes mencionado.

# 3. Realizar un commit y push por cada requerimiento de los puntos antes descritos.

# 4. Luego, se debe crear el archivo README del repositorio de GitHub.

5. Generar informe de los resultados en el formato de prácticas. Debe incluir:

```
a) El desarrollo de cada uno de los requerimientos antes descritos.
b) La evidencia del correcto diseño de las páginas HTML usando CSS. Para lo cual, se puede generar
fotografías instantáneas (pantallazos).
c) La evidencia del correcto funcionamiento de cada una de las funciones de JavaScript
d) El informe debe incluir conclusiones apropiadas.
e) En el informe se debe incluir la información de GitHub (usuario y URL del repositorio de la
práctica)
f) En el informe se debe incluir la firma digital del estudiante.
```
# 6. En el archivo README del repositorio debe constar la misma información del informe de resultados de

la práctica que se indica en el punto anterior.

A partir de los siguientes problemas se pide implementar soluciones basadas en el lenguaje de programación de
JavaScript usando funciones y eventos.

1. Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres,
apellidos, dirección, teléfono, fecha de nacimiento, correo electrónico y contraseña. Luego, usando funciones de
JavaScript se pide validar que todos los campos han sido ingresados, además; que los valores ingresados en cada
campo del formulario sean correctos teniendo en cuenta las siguientes condiciones:

```
a) Se debe validar qué, en el campo de la cedula, se ingrese sólo números y que la misma sea correcta, en
base, al último dígito verificador.
b) Se debe validar qué, en el campo de nombres, ingrese exclusivamente dos nombres y que permita ingresar
sólo letras, por ejemplo: “Gabriel Alejandro”, es válido; “Gabriel”, no es válido.
c) Se debe validar qué, en el campo de apellidos, ingrese exclusivamente dos apellidos y que permita ingresar
sólo letras, por ejemplo: “León Paredes”, es válido; “León”, no es válido.
d) Se debe validar qué, en el campo del teléfono, permita ingresar sólo números y un máximo de 10 caracteres
numéricos.
e) Se debe validar que la fecha de nacimiento ingrese en el formato dd/mm/yyyy.
f) Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un
correo válido, cuando comienza por tres o más valores alfanuméricos, luego un @, seguido por la extensión
“ups.edu.ec” o “est.ups.edu.ec”.
g) Se debe validar que la contraseña ingresada tenga mínimo 8 caracteres, además, debe incluir al menos:
una letra mayúscula, una letra minúscula y un carácter especial (@, _, $)
```
Indicaciones:

- Todas las validaciones antes descritas se deben realizar en tiempo real, es decir, a medida que el usuario escribe en
    el campo.
- Si no cumple las validaciones, se mostrará un mensaje debajo de cada campo con el error y se pintará el campo con
    un borde rojo que representará que el campo tiene un error.
- _Todos los campos de entrada dentro del formulario deben de ser de tipo “text”._ Excepto el campo de tipo password.
- Todos los campos deben ser ingresados de manera obligatoria y esto se _verificará al momento de “enviar” (submit) la_
    información del formulario hacia una página php. Si se cumple las validaciones, se enviará a una página php, en donde
    se mostrará únicamente un mensaje que diga _“Bienvenido, ¡pasaste las validaciones!”._
2. Diseñar una interfaz en html que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen.
Luego, desde javascript se debe controlar para al hacer clic sobre uno de los botones realice una acción relacionada
a una galería de imágenes (ver ejemplo, https://gihp4c.blog.ups.edu.ec/)

![Image 0](https://github.com/PedroOrellana98/Practica03-Javascript/blob/master/Imagenes%203%20Hipermedial/captura0.png)

Indicaciones:

- Se debe tener, un arreglo con los nombres de diez imágenes, previamente descargadas y almacenadas en una carpeta
    _llamada “images”._
- La galería de imágenes debe visualizar exclusivamente 5 imágenes.
- Cada vez que se haga clic en el botón iniciar se deben escoger de manera aleatoria cinco imágenes de las diez que
    se mostrarán en la galería de imágenes.
- Al hacer clic en el botón siguiente o anterior se debe cambiar la imagen presentada en la galería.
- El cambio de imágenes debe simular un efecto, para lo cual, se debe usar las propiedades left o rigth.
- Al hacer clic en el botón siguiente y haber llegado a la última imagen disponible, el botón siguiente deberá ser
    deshabilitado (sólo cuando se ha llegado a la última imagen el botón siguiente deberá estar deshabilitado)
- Al hacer clic en el botón anterior y haber llegado a la primera imagen disponible, el botón anterior deberá ser
    deshabilitado (sólo cuando se ha llegado a la última imagen y cuando se inicie la galería de imágenes el botón anterior
    deberá estar deshabilitado)
3. Realizar una calculara en HTML usando botones de javascript y una caja de texto para visualizar el resultado.
Las operaciones que podrá hacer la calculadora son: suma, resta, multiplicación y división. Además, se podrá
limpiar la memoria de la calculadora. Por último, se debe usar la función eval() para realizar las operaciones
aritméticas.

## RESULTADO(S) OBTENIDO(S):

1. Creación de un repositorio de GitHub
![Image 1](https://github.com/PedroOrellana98/Practica03-Javascript/blob/master/Imagenes%203%20Hipermedial/captura1.png)
2. Creación de carpetas para los archivos JavaScript
![Image 2](https://github.com/PedroOrellana98/Practica03-Javascript/blob/master/Imagenes%203%20Hipermedial/captura2.png)
3. Commit y push en el repositorio de GitHub
![Image 3](https://github.com/PedroOrellana98/Practica03-Javascript/blob/master/Imagenes%203%20Hipermedial/captura3.png)
4. Crear un archivo README.md
![Image 4](https://github.com/PedroOrellana98/Practica03-Javascript/blob/master/Imagenes%203%20Hipermedial/captura4.png)
5. Realización de los puntos de practicas

```
a. Comandos que se utilizaron
```
Nota: No todos los comandos se utilizan en los archivos JavaScript.

1. Script Calculadora

```
Obtener un valor: Si se quiere obtener el elemento del documento (HTML) con el id que se especifica, el
comando es document.getElementById(“Identificador”).value.
```
```
Definir variables: Es una instancia de una clase para especificar que el elemento x es una variable se
utiliza el comando var(x).
```
```
Funciones: Es una capacidad del Objeto, para obtener una acción a través de un clic se utiliza la propiedad
x.onclick = function(){}.
```
```
Contenido de un Texto: Hace referencia al argumento de obtener un texto a través de una función, el
comando que se utiliza es text.Content.
```
```
Conversion de argumentos: Sirven para cambiar el tipo de variable a otra como de una cadena de texto
a un entero, decimal, etc.
```
- parseInt() para cambiar a entero
- parseFloat() para valores decimales

2. Script Formulario

```
Longitud: Representa el tamaño de los caracteres de una variable ejemplo: cedula.length.
```
```
Estilos: Para insertar estilos en un script es necesario obtener el elemnto y especificar el estilo que se va
a usar por ejemplo: style.color = "red";.
```
```
Inserción de código: Para ingresar código dentro un archivo html es necesario usar el código innerHTML
y especificar en que etiqueta se va a usar.
```
```
Remplazar carácter: Para cambiar, eliminar, un carácter se necesita definir el comando replace como
ejemplo para que se omita: replace(/ /g, "");.
```
```
Vectores: Es un conjunto de datos que indica cada uno un valor ejemplo: fecha = new Date(array[2],
array[1], array[0]);.
```
3. Script Galería

```
Contador: Es la suma de un elemento n veces ejemplo: cont++ (el cual suma en 1 cada vez que se lo
llama a ejecutarse).
```
```
Intervalos: Un intervalo es una secuencia en la cual la función o elemento se va a ejecutar cada cierto
tiempo que sea llamada, el comando para su ejecuciones es: setInterval(function miFuncion(){}, 200).
```
```
Desactivar un botón: Para deshabilitar un botón y que no se pueda ejecutar se necesita el comando
disable().
```
```
Sobre montar imagen: Es necesario contar con la etiqueta Canvas para montar una imagen una encima
de otra y su comando es getContext("2d");.
```
```
Desplazar una imagen: Para mover una imagen es indispensable tener 3 parámetros:
```
- Posición Horizontal X (x)
- Posición Vertical Y (y)
- Origen de la imagen (imagen)

```
Y el comando de ejecución es ctx.drawImage(“imagen”, x, y);
```
b. Diseño de las paginas HTML

![Image 5](https://github.com/PedroOrellana98/Practica03-Javascript/blob/master/Imagenes%203%20Hipermedial/captura5.png)

Nota: Pagina HTML de la Calculadora

![Image 6](https://github.com/PedroOrellana98/Practica03-Javascript/blob/master/Imagenes%203%20Hipermedial/captura6.png)

Nota: Pagina HTML del Formulario

![Image 7](https://github.com/PedroOrellana98/Practica03-Javascript/blob/master/Imagenes%203%20Hipermedial/captura7.png)

Nota: Pagina HTML de la Galería

```
c. Funcionamiento de cada Script
```
Calculadora: 5 / 6 = ![Image 8](https://github.com/PedroOrellana98/Practica03-Javascript/blob/master/Imagenes%203%20Hipermedial/captura8.png)

Formulario Validaciones: ![Image 9](https://github.com/PedroOrellana98/Practica03-Javascript/blob/master/Imagenes%203%20Hipermedial/captura9.png)

Galería de Imágenes: ![Image 10](https://github.com/PedroOrellana98/Practica03-Javascript/blob/master/Imagenes%203%20Hipermedial/captura10.png)

```
e. Información de GitHub
```
Nombre de la practica: Practica03-Javascript

Url del repositorio: https://github.com/PedroOrellana98/Practica03-Javascript.git

Nombre de perfil: PedroOrellana

CONCLUSIONES:

El uso se scripts ayuda a la interacción del usuario con la página, los scripts pueden definir varias funciones y no
es necesario que se ejecuten todas para su funcionamiento en la página.

## RECOMENDACIONES:

Una de las páginas que más me ayudaron a comprender el uso de JavaScript y ejemplos de ejecuciones de
funciones es https://www.w3schools.com/js/default.asp.

```
Nombre de estudiante: Pedro José Orellana Jaramillo
```

Firma de estudiante: ![Image 11](https://github.com/PedroOrellana98/Practica03-Javascript/blob/master/Imagenes%203%20Hipermedial/captura11.png)


