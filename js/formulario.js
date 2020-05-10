function validarNombre(){

    nombre = document.getElementById("txtNombre").value;
    nombreS = nombre.replace(/ /g, "");

    if (isNaN(nombre) && (nombre != nombreS)) {
        document.getElementById('txtNombre').style.color = "black";
        return true;
    }else{
        document.getElementById('txtNombre').style.color = "red";
        return false;
    }
}

function validarApellido(){

    apellido = document.getElementById("txtApellido").value;
    apellidoS = apellido.replace(/ /g, "");

    if (isNaN(apellido) && (apellido != apellidoS)) {
        document.getElementById('txtApellido').style.color = "black";
        return true;
    }else{
        document.getElementById('txtApellido').style.color = "red";
        return false;
    }
}

function validarTelefono(){

    telefono = document.getElementById("txtTelefono").value;

    if (isNaN(telefono) || telefono.length > 10) {
        document.getElementById('txtTelefono').style.color = "red";
        return false;
    }else{
        document.getElementById('txtTelefono').style.color = "black";
        return true;
    }
}

function validarFecha(){

    var array = document.getElementById('txtFecha').value.split('/');
    var fecha = new Date(array[2], array[1], array[0]);
    if (array.length == 3 && fecha && array[0] == fecha.getDate() && array[1] == fecha.getMonth() && array[2] == fecha.getFullYear()) {
        document.getElementById('txtFecha').style.color = "black";
        return false;
    } else {
        document.getElementById('txtFecha').style.color = "red";
        return true;
    }
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