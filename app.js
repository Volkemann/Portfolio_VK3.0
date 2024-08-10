/* INTERFACE MENU MOBILE COMEÇO*/

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
  menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
});

/* INTERFACE MENU MOBILE FIM*/



/* SCROLLAR TELA PARA BAIXO COMEÇO*/

document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById('botao');
    const sectionSobre = document.querySelector('.sobre');
    if (botao && sectionSobre) {
        botao.addEventListener('click', function() {
            sectionSobre.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

/* SCROLLAR TELA PARA BAIXO FIM*/


/* BARRA DE NAVEGAÇÃO ROLAGEM COMEÇO*/

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem',window.scrollY > 100);
});

window.addEventListener("scroll", function() {
  let header = document.querySelector('#header');
  if (window.innerWidth <= 1020 && window.scrollY > 1) {
      header.classList.add('rolagem');
  }
});

/* BARRA DE NAVEGAÇÃO ROLAGEM FIM*/


/*EFEITO DE APARECER CONTEUDO COMFORME DESCE A PÁG COMEÇO*/

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  const elements = document.querySelectorAll('.hidden');
  
  elements.forEach((element) => myObserver.observe(element));
  

/*EFEITO DE APARECER CONTEUDO FIM*/





