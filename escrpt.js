
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