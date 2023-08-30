window.onload = function(){  
    // --------------------------------------------------------
    //  Mudar URL de acordo com o tamanho da tela
    // -------------------------------------------------------- 
    let ancora = document.querySelector(".corretor_instagram a")

    let urlInstagram = 'https://www.instagram.com/'

    let xSmall  = 575,
        small   = 767,
        medium  = 997,
        large   = 1199,
        xLarge  = 1399;

    if(screen.width < medium){
        urlInstagram = 'instagram://user?username='
    }
    if(screen.width > small && screen.width < large){
          
    }
    if(screen.width > large){
          
    }        

    ancora.href = urlInstagram
}