var num = 1;

function siguiente(){
    num++;
    if (num>5) {
        num=5;
    }
    console.log(num);
    imagen = document.getElementById("galeria");
    imagen.src = "../images/Galeria/imagen" + num + ".jpg";
    
}

function anterior(){
    num--;
    if (num<1) {
        num=1;
    }
    console.log(num);
    imagen = document.getElementById("galeria");
    imagen.src = "../images/Galeria/imagen" + num + ".jpg";
    
}