function validarTexto(){

    nombre = document.getElementById("txtNombre").value;
    nombreS = nombre.replace(/ /g, "");

    if (isNaN(nombre) && (nombre != nombreS)) {
        document.getElementById('txtNombre').style.color = "black";
        console.log("Con espacios")
    }else{
        document.getElementById('txtNombre').style.color = "red";
        console.log("Sin espacios")
    }
}

function validarTelefono(){
    
}
/*function val_numero(string) {
    var out = '';
    var filtro = '1234567890';

    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            out += string.charAt(i);

    return out;
}

function val_letra(string) {
    var out = '';
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ';
    nombre = document.getElementById("txtNombre").value;

    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            out += string.charAt(i);

    return out;
}*/

function validar(){
    
    cedula = document.getElementById("txtCedula").value;
    nombre = document.getElementById("txtNombre").value;
    apellido = document.getElementById("txtApellido").value;
    direccion = document.getElementById("txtDireccion").value;
    fecha = document.getElementById("txtFecha").value;
    correo = document.getElementById("txtCorreo").value;
    contra = document.getElementById("txtContra").value;

    if (cedula.length < 1) {
        alert("Campo Cedula vacio");
    }
    if (nombre.length < 1) {
        alert("Campo Nombres vacio");
    }
    if (apellido.length < 1) {
        alert("Campo Apellidos vacio");
    }
    if (direccion.length < 1) {
        alert("Campo Direccion vacio");
    }
    if (fecha.length < 1) {
        alert("Campo Fecha vacio");
    }
    if (correo.length < 1) {
        alert("Campo Correo vacio");
    }
    if (contra.length < 1) {
        alert("Campo Contraseña vacio");
    }    
}