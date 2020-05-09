var x = 0;
var y = 0;
var r;

function calcular(){
    /*
    Se obtiene el elemento por id de cada boton y del textfield
    */
    txt = document.getElementById("resultado");
    suma = document.getElementById("botonSuma");
    resta = document.getElementById("botonResta");
    igual = document.getElementById("botonIgual");
    multiplicacion = document.getElementById("botonMultiplicacion");
    division = document.getElementById("botonDivision");
    cero = document.getElementById("boton0");
    uno = document.getElementById("boton1");
    dos = document.getElementById("boton2");
    tres = document.getElementById("boton3");
    cuatro = document.getElementById("boton4");
    cinco = document.getElementById("boton5");
    seis = document.getElementById("boton6");
    siete = document.getElementById("boton7");
    ocho = document.getElementById("boton8");
    nueve = document.getElementById("boton9");
    borrar = document.getElementById("botonBorrar");

    uno.onclick = function(){
        txt.textContent = txt.textContent + "1";
    }
    dos.onclick = function(){
        txt.textContent = txt.textContent + "2";
    }
    tres.onclick = function(){
        txt.textContent = txt.textContent + "3";
    }
    cuatro.onclick = function(){
        txt.textContent = txt.textContent + "4";
    }
    cinco.onclick = function(){
        txt.textContent = txt.textContent + "5";
    }
    seis.onclick = function(){
        txt.textContent = txt.textContent + "6";
    }
    siete.onclick = function(){
        txt.textContent = txt.textContent + "7";
    }
    ocho.onclick = function(){
        txt.textContent = txt.textContent + "8";
    }
    nueve.onclick = function(){
        txt.textContent = txt.textContent + "9";
    }
    cero.onclick = function(){
        txt.textContent = txt.textContent + "0";
    }

    suma.onclick = function(){
        x = parseInt(txt.textContent);
        r = "+";
        limpiar();
    }

    resta.onclick = function(){
        x = parseInt(txt.textContent); 
        r = "-";
        limpiar();
    }

    multiplicacion.onclick = function(){
        x = parseInt(txt.textContent); 
        r = "*";
        limpiar();
    }

    division.onclick = function(){
        x = parseInt(txt.textContent); 
        r = "/";
        limpiar();
    }

    function limpiar(){
        txt.textContent = "";
    }

    igual.onclick = function(){
        y = parseInt(txt.textContent);
        switch (r) {
            case "+":
                txt.textContent = parseFloat(x) + parseFloat(y);
                break;
            case "-":
                txt.textContent = parseFloat(x) - parseFloat(y);
                break;
            case "*":
                txt.textContent = parseFloat(x) * parseFloat(y);
                break;
            case "/":
                txt.textContent = parseFloat(x) / parseFloat(y);
                break;
            default:
                break;
        }

    }

    borrar.onclick = function(){
        txt.textContent = "";
        x = 0;
        y = 0;
        r = "";
    }
}