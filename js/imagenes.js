var num = 0;
var cont = 325;
var cont1 = 325;
var cont2 = 325;
var cont3 = 325;
var cont4 = 325;
var aleatorio;
var aleatorio1;
var aleatorio2;
var aleatorio3;
var aleatorio4;


function siguiente(){
    num++;
    contI = 325;
    
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    img = document.getElementById("galeria");
    boton = document.getElementById("adelante");
    boton1 = document.getElementById("atras");
    if (num > 5) {
        num = 5;
        boton.disabled = true;
    }else{
        boton1.disabled = false;
        myvar = setInterval(function imagenSiguiente(){
        contI--;
        if (contI >=0 ) {
            img.src = "../images/Galeria/imagen"+ num + ".jpg";
            ctx.drawImage(img, contI, 10);
        }else{
            contI = 0;
            clearInterval(myvar);
        }  
    }, 05);}
}

function anterior(){
    num--;
    contI = 325;
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    img = document.getElementById("galeria");
    boton = document.getElementById("atras");
    boton1 = document.getElementById("adelante");
    if (num < 2) {
        num = 1;
        boton.disabled = true;
    }
        boton1.disabled = false;
        myvar = setInterval(function imagenSiguiente(){
            contI--;
            if (contI >=0 ) {
                img.src = "../images/Galeria/imagen"+ num + ".jpg";
                ctx.drawImage(img, contI, 10);
            }else{
                contI = 0;
                clearInterval(myvar);
            }  
    }, 05); 
    
}

function presentacion(){
    aleatorio = Math.round(Math.random()*10);
    aleatorio1 = Math.round(Math.random()*10);
    aleatorio2 = Math.round(Math.random()*10);
    aleatorio3 = Math.round(Math.random()*10);
    aleatorio4 = Math.round(Math.random()*10);
    
    setInterval(function (){
        c = document.getElementById("canvas");
        ctx = c.getContext("2d");
        img = document.getElementById("galeria");
        cont--;
        if (cont >=0 ) {
            img.src = "../images/Galeria/imagen"+ aleatorio + ".jpg";
            ctx.drawImage(img, cont, 10);
        }else{
            cont = 0;
            cont1--;
            if (cont1 >=0) {
                img.src = "../images/Galeria/imagen"+ aleatorio1 + ".jpg";
                ctx.drawImage(img, cont1, 10);
            }else{
                cont1 = 0;
                cont2--;
                if (cont2 >=0) {
                    img.src = "../images/Galeria/imagen"+ aleatorio2 + ".jpg";
                    ctx.drawImage(img, cont2, 10);
                }else{
                    cont2 = 0;
                    cont3--;
                    if (cont3 >=0) {
                        img.src = "../images/Galeria/imagen"+ aleatorio3+ ".jpg";
                        ctx.drawImage(img, cont3, 10);
                    }else{
                        cont3 = 0;
                        cont4--;
                        if (cont4 >=0) {
                            img.src = "../images/Galeria/imagen"+ aleatorio4+ ".jpg";
                            ctx.drawImage(img, cont4, 10);
                        }else{
                            cont4 = 0;
                        }
                    }
                }
            }
        }
    }, 10);
    
}