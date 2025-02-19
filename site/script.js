const mudarPg = document.getElementsByTagName('body')[0]
const ola = document.querySelector('.ola')
const clique = document.querySelector('h2')
const degrade = document.querySelector('.rectangle-11')
const foto = document.querySelector('.foto')
const section1 = document.querySelector('.section1')
const section2 = document.querySelector('.section2')

section1.classList.add('hidden')
section2.classList.add('hidden')
degrade.classList.add('hidden')
foto.classList.add('hidden')

mudarPg.addEventListener('click', function() {
    ola.classList.add('hidden')
    clique.classList.add('hidden')
    degrade.classList.remove('hidden')
    foto.classList.remove('hidden')
    section1.classList.remove('hidden')
    section2.classList.remove('hidden')

    setTimeout(() => {
        degrade.classList.add('show');
        foto.classList.add('show');
        section1.classList.add('show');
        section2.classList.add('show');
    }, 10);
})