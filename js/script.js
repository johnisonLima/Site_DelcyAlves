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

    // --------------------------------------------------------
    // Slider Show
    // -------------------------------------------------------- 
    let carousel = document.querySelector('.carousel-track');
    let slides = carousel.querySelectorAll('.carousel-slide');
    
    const carouselTrack = document.getElementById("carouselTrack");
    

    let position = 0;

    function slide() {
        position -= slides[nextIndex].clientWidth
        slides[nextIndex].style.transform = `translateX(${position}px)`;

        // Executa a função novamente após um intervalo de tempo
        setTimeout(slide, 3000); // Tempo em milissegundos entre cada slide (3 segundos neste caso)
    }

    // Definir o slide ativo inicial
    slides[0].classList.add('active');
    
    // Criar um temporizador que será acionado a cada 3 segundos
    let timer = setInterval(function() {
        // Obter o índice do slide ativo atual
        let activeIndex = Array.from(slides).findIndex(function(slide) {
            return slide.classList.contains('active');
        });
    
        // Remover a classe ativa do slide atual
        slides[activeIndex].classList.remove('active');
        position = 0
        slides[activeIndex].style.transform = `translateX(${position}px)`;
    
        // Calcular o índice do próximo slide
        let nextIndex = (activeIndex + 1) % slides.length;
    
        // Definir o próximo slide como ativo
        slides[nextIndex].classList.add('active');

        position -= slides[nextIndex].clientWidth
        slides[nextIndex].style.transform = `translateX(${position}px)`;
    }, 5000);  
      
    
    // --------------------------------------------------------
    //  Mudar a cor do header ao descer a página
    // -------------------------------------------------------- 
    window.addEventListener('scroll', () => {
        "use strict"

        const scroll = window.scrollY
        const nav = document.querySelector('nav')
        const alturaNav = nav.scrollHeight
        
        const menu = document.querySelector('.nav_collapse')
        const alturaMenu = menu.scrollHeight

        if(scroll > alturaNav){
            nav.classList.add('scroll-fixed-navbar')
        }
        else{
            nav.classList.remove('scroll-fixed-navbar')
            menu.style.height = "0"
        }
    })    
}

    // --------------------------------------------------------
    //  Colocar menu para aparecer telas pequenas
    // -------------------------------------------------------- 
    function toggleMenu(){
        const menu = document.querySelector('.nav_collapse')
        const alturaMenu = menu.scrollHeight
        const nav = document.querySelector('nav')
        
        if(menu.clientHeight > 0){
            menu.style.height = "0"
            nav.classList.remove('scroll-fixed-navbar')
        } 
        else{
            menu.style.height = alturaMenu + "px"
            nav.classList.add('scroll-fixed-navbar')
        }
    }  
