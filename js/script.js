window.onload = function(){  
    // --------------------------------------------------------
    //  Pegar cada imagem conforme a sua resolução
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
    
    // --------------------------------------------------------
    //  Mudar header ao descer a página
    // -------------------------------------------------------- 
    // $(window).scroll(function(){
    window.addEventListener('scroll', () => {
        "use strict"

        let scroll = $(window).scrollTop()
        let navbar = document.querySelector('nav')

        if(scroll > 60){
            navbar.classList.add('scroll-fixed-navbar')
        }
        else{
            navbar.classList.remove('scroll-fixed-navbar')
        }
    })
}

// --------------------------------------------------------
//  Colocar menu para aparecer telas pequenas
// -------------------------------------------------------- 
function toggleMenu(){
    const menu = document.querySelector('.nav_collapse')
    const alturaMenu = menu.scrollHeight
    let navbar = document.querySelector('nav')

    // if(menu.style.display == 'block'){
    //     menu.style.display = 'none'
    //     navbar.classList.remove('scroll-fixed-navbar')
    // }
    // else{
    //     menu.style.display = 'block'
    //     navbar.classList.add('scroll-fixed-navbar')
    // }    
    
    if(menu.clientHeight > 0){
        menu.style.height = "0"
        navbar.classList.remove('scroll-fixed-navbar')
    } 
    else{
        menu.style.height = alturaMenu + "px"
        navbar.classList.add('scroll-fixed-navbar')
    }
}  