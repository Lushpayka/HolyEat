const modal = document.querySelector('.modal-take');
const linksOpenModal = document.querySelectorAll('.take-spec');
const body = document.querySelector('body');
const close = document.querySelector('.modal-close');
const button = document.querySelector('.form-button');
const modalSay = document.querySelector('.modal-say');
const closeSay = document.querySelector('.close-say');
const linkSay = document.querySelector('.link-say');
const buttonSend = document.querySelector('.send');


linksOpenModal.forEach((link) => {
    link.addEventListener(('click'), openModal);
})

close.addEventListener('click', closeModal);
button.addEventListener('click', sendInfo);

function openModal(event) {
    event.preventDefault();
    modal.classList.add('open');
    body.classList.add('hidden');
}

function closeModal() {
    modal.classList.remove('open');
    body.classList.remove('hidden');
}

function sendInfo() {
    modal.classList.remove('open');
    body.classList.remove('hidden');
    alert('Ваші данні успішно відправлені');
}


function openModalSay(event) {
    event.preventDefault();
    modalSay.classList.add('open');
    body.classList.add('hidden');
}

function closeModalSay() {
    modalSay.classList.remove('open');
    body.classList.remove('hidden');
}

function sendInfoSay() {
    modalSay.classList.remove('open');
    body.classList.remove('hidden');
    alert('Ваші данні успішно відправлені');
}

closeSay.addEventListener('click', closeModalSay);
buttonSend.addEventListener('click', sendInfoSay);
linkSay.addEventListener('click', openModalSay );