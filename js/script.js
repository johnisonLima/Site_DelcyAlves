window.onload = function(){  
    // --------------------------------------------------------
    //  Pegar cada imagem conforme a sua resolução
    // -------------------------------------------------------- 
    let imagem = document.getElementsByClassName("banner_item");

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
    if(screen.width > small && screen.width < large){
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
// --------------------------------------------------------
//  Mudar a cor do header ao descer a página
// -------------------------------------------------------- 
window.addEventListener('scroll', () => {
    "use strict"

    const scroll = window.scrollY
    const nav = document.querySelector('nav')
    const alturaNav = nav.scrollHeight
    
    const menu = document.querySelector('.nav_collapse')

    if(scroll > alturaNav){
        nav.classList.add('scroll-fixed-navbar')
    }
    else{
        nav.classList.remove('scroll-fixed-navbar')
        menu.style.height = "0"
    }
})    

// --------------------------------------------------------
//  Colocar menu para aparecer telas pequenas
// -------------------------------------------------------- 
function toggleMenu(){
    const menu = document.querySelector('.nav_collapse')
    const alturaMenu = menu.scrollHeight
    const nav = document.querySelector('nav')
    
    if(menu.clientHeight > 0){
        menu.style.height = "0"
    } 
    else{
        menu.style.height = alturaMenu + "px"
        nav.classList.add('scroll-fixed-navbar')
    }
} 

// --------------------------------------------------------
//  rolar página para cima
// -------------------------------------------------------- 
let offset = 250;
let duracao = 500;

// Fazer icone desaparecer
$(window).scroll(function(){
    if($(this).scrollTop() > offset){
        $('.to_top').fadeIn(duracao);           
    }
    else{
        $('.to_top').fadeOut(duracao);              
    }
})

$('.to_top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 600)

    return false
})
