const mudarPg = document.getElementsByTagName('body')[0]
const ola = document.querySelector('.ola')
const clique = document.querySelector('h2')
const degrade = document.querySelector('.rectangle-11')
const foto = document.querySelector('.foto')
const section1 = document.querySelector('.section1')
const section2 = document.querySelector('.section2')
const modal = document.querySelector('#audios')
const closeBtn = document.querySelector('#close img');
const closeBtn2 = document.querySelector('#close2 img');
const modal2 = document.querySelector('#escrita')
const senha = document.querySelector('.senha')
const codigo = document.querySelector('#senha')


senha.classList.add('hidden')
section1.classList.add('hidden')
section2.classList.add('hidden')
degrade.classList.add('hidden')
foto.classList.add('hidden')

mudarPg.addEventListener('click', function () {
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

document.querySelector('#homenagens').addEventListener('click', () => {
    modal.showModal()
    document.body.classList.add('dialog-open');
})
closeBtn.addEventListener('click', () => {
    modal.close();
    document.body.classList.remove('dialog-open');
});

document.querySelector('#poesia').addEventListener('click', () => {
    modal2.showModal()
    document.body.classList.add('dialog-open');
})
closeBtn2.addEventListener('click', () => {
    modal2.close();
    document.body.classList.remove('dialog-open');
});
