window.onload = function(){
    // --------------------------------------------------------
    //  pegar cada imagem conforme a sua resolução
    // -------------------------------------------------------- 
    let imagem = document.getElementsByClassName("carousel-item");

    let xSmall  = 575,
        small   = 767,
        medium  = 997,
        large   = 1199,
        xLarge  = 1399;

    if(screen.width < medium){
        for(let i=0; i<imagem.length; i++){            
                imagem[i].lastElementChild.attributes.src.nodeValue = `carousel/xSmall/header_background_${i+1}.jpg`
        }   
    }
    if(screen.width > medium && screen.width < large){
        for(let i=0; i<imagem.length; i++){            
                imagem[i].lastElementChild.attributes.src.nodeValue = `carousel/medium/header_background_${i+1}.jpg`
        }   
    }
    if(screen.width > large){
        for(let i=0; i<imagem.length; i++){            
                imagem[i].lastElementChild.attributes.src.nodeValue = `carousel/large/header_background_${i+1}.jpg`
        }   
    }    
}