const Hambtn = document.querySelector('.hamBtn')
const home = document.querySelector('ul')

Hambtn.addEventListener('click', ()=>{
    home.classList.toggle('showNav')
    console.log("he");
})


