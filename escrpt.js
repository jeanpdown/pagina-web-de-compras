
var contadorMenu=1;
function mostrarMenu(){
    let menu=document.getElementById("menu-desplegable");
    
    if(contadorMenu==1){
        menu.style.display="block";
        contadorMenu++;
    }else{
        menu.style.display="none";
        contadorMenu=1;
    }
    
}


function cambiarImagenPortada(number,punto){
    let imagen=document.getElementById("imagen-portada");
    let puntos=document.getElementsByClassName("punto");
    for(let i=0;i<puntos.length;i++){
        puntos[i].style.background="white";
    }

    if(number==1){
        imagen.setAttribute("src","imagenes/portada1-cl.png");
        punto.style.background="black";
    }else if(number==2){
        
        imagen.setAttribute("src","imagenes/portada2-cl.jpg");
        punto.style.background="black";
    }else{
        imagen.setAttribute("src","imagenes/portada3-cl.jpg");
        punto.style.background="black";
    }
}