 let Imagem = document.querySelectorAll("#banner img"),
    imagem_do_momento = 0, 
    max = Imagem.length,
    tempo = 3000;
    
    
function troca_de_imagem(){
    Imagem[imagem_do_momento].classList.remove('selecionada')
    
    imagem_do_momento++
    
    
    if (imagem_do_momento >= max)
    { imagem_do_momento= 0}
    Imagem[imagem_do_momento].classList.add('selecionada')
}

function loop() {
    setInterval(() =>{troca_de_imagem()},tempo)
}


window.addEventListener('load',loop)