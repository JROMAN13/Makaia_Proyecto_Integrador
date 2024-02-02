const cartIconBtn = document.getElementById('btnShopping');
const cartModal = document.querySelector('.modal-navbar__background');

cartIconBtn.addEventListener('click', ()=>{
    cartModal.classList.remove('display-none');
    cartModal.classList.add('show');  
    
});

const closeModalNavbar = document.querySelector('.modal-navbar__close-icon');
closeModalNavbar.addEventListener('click', ()=>{
    cartModal.classList.toggle('display-none'); 
});

