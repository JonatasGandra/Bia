const mudarPg = document.getElementsByTagName('body')[0]
const ola = document.querySelector('.ola')
const clique = document.querySelector('h2')
const foto = document.querySelector('.foto')
const section1 = document.querySelector('.section1')
const section2 = document.querySelector('.section2')
const modal = document.querySelector('#audios')
const closeBtn = document.querySelector('#close img');
const closeBtn2 = document.querySelector('#close2 img');
const modal2 = document.querySelector('#escrita')
const senha = document.querySelector('.senha')
const codigo = document.querySelector('#senha')
const digite = document.querySelector('.senha h1')


senha.classList.add('hidden')
section1.classList.add('hidden')
section2.classList.add('hidden')
foto.classList.add('hidden')

mudarPg.addEventListener('click', function () {

    senha.classList.remove('hidden')
    ola.classList.add('hidden')
    clique.classList.add('hidden')



})
const entrar = document.querySelector('#entrar')

entrar.addEventListener('click', () => {

    if (codigo.value === 'bialinda') {

        codigo.classList.add('hidden')
        entrar.classList.add('hidden')
        digite.classList.add('hidden')
        ola.classList.add('hidden')
        clique.classList.add('hidden')
        foto.classList.remove('hidden')
        section1.classList.remove('hidden')
        section2.classList.remove('hidden')
        mudarPg.classList.add('degrade')

        setTimeout(() => {
            foto.classList.add('show');
            section1.classList.add('show');
            section2.classList.add('show');
        }, 10);
    }else{
        codigo.classList.add('input-error');
        entrar.classList.add('input-error');
        codigo.focus(false)
    }

})

codigo.addEventListener('focus', () => {
    codigo.classList.remove('input-error');
    entrar.classList.remove('input-error');
});

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
