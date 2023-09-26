function abrirMenuResponsive() {

    let element =  document.getElementById("div-header-responsive");
    let main =  document.getElementById("main-content");
    let sound = document.getElementById("article-sound");
    let icono = document.getElementById("icono-menu");
    let style = getComputedStyle(element);
    

    if(style.display === "none") {
        element.style.display = "flex";
        main.style.display = "none";
        sound.style.display = "none";
        icono.src = "cruz.png";

    } else{
        element.style.display = "none";
        main.style.display = "block";
        sound.style.display = "flex";
        icono.src = "icono-menu.png";
    }
    
    
}
