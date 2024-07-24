
/* SCROLLAR TELA PARA BAIXO*/

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

/* SCROLLAR TELA PARA BAIXO*/


/* BARRA DE NAVEGAÇÃO ROLAGEM*/

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem',window.scrollY > 100);
});

/* BARRA DE NAVEGAÇÃO ROLAGEM*/


/*EFEITO DE APARECER CONTEUDO*/

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
  

/*EFEITO DE APARECER CONTEUDO*/