window.onload = function(){
    // --------------------------------------------------------
    //  pegar cada imagem conforme a sua resolução
    // -------------------------------------------------------- 
    var pegaMG = document.getElementsByClassName("carousel-item");
    if(screen.width > 767){
        for (var i=0; i<pegaMG.length; i++) {
                pegaMG[i].lastElementChild.attributes.src.nodeValue = "carousel/header_background_v3_hd"+(i+1)+".jpg";            
        }   
    }
    if(screen.width < 768 && screen.width > 480){
        for (var i=0; i<pegaMG.length; i++) {         
                pegaMG[i].lastElementChild.attributes.src.nodeValue = "carousel/header_background_tablet"+(i+1)+".jpg"
            }   
    }    
    if(screen.width < 481){
        for (var i=0; i<pegaMG.length; i++) {
            console.log(
                pegaMG[i].lastElementChild.attributes.src.nodeValue = "carousel/header_background_phone"+(i+1)+".jpg"
            )

        }   
    }
}