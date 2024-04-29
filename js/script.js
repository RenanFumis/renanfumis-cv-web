
const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');


function scrollSuave(e){
  e.preventDefault()//Colocamos para previnir a ação nativa de ir pra sessão de forma rápida
  const href = e.currentTarget.getAttribute('href'); //qui estou selecionando especificamente o href que clicamos
  const section = document.querySelector(href);
  const topo = section.offsetTop;

  //aqui conseguimos definir uma rolagem suave (não está acessivel em todos os browsers)
  window.scrollTo({
    top: topo,
    behavior: 'smooth'
  })
  
}



linksInternos.forEach((link)=>{
  link.addEventListener('click', scrollSuave)
})