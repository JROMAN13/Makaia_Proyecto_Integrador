console.log("READY");

 // Datos para las imágenes
 const imageSources = ['s1_img1.png', 's1_img2.png', 's1_img3.png'];

 // Datos para el resumen
 const summaryData = [
     { name: 'Luxury Charms Ring', code: '78205', price: '$620.73' },
     { name: 'Luxury Charms Ring', code: '78205', price: '$620.73' },
     { name: 'Luxury Charms Ring', code: '78205', price: '$620.73' }
 ];

 // Generar imágenes dinámicamente
 const imageContainer = document.getElementById('imageContainer');
 imageSources.forEach(src => {
     const img = document.createElement('img');
     img.src = `../assets/img/v4/${src}`;
     img.alt = '';
     img.classList.add('container1__img');
     imageContainer.appendChild(img);
 });

 // Generar resumen dinámicamente
 const summaryContainer = document.getElementById('summaryContainer');
 summaryData.forEach(data => {
     const summaryTexts = document.createElement('div');
     summaryTexts.classList.add('summary__container__texts');

     const textContainer = document.createElement('div');
     textContainer.innerHTML = `
         <div>
             <h3 class="texts">${data.name}</h3>
             <h6 class="texts texts__code">Code: ${data.code}</h6>
             <h3 class="texts">${data.price}</h3>
         </div>
     `;

     const iconContainer = document.createElement('div');
     iconContainer.classList.add('container__icon');
     iconContainer.innerHTML = `
         <img src="../assets/img/v4/trash.svg" alt="" class="summary__icon__trash" />
         <h6 class="texts texts-trash">x1</h6>
     `;

     summaryTexts.appendChild(textContainer);
     summaryTexts.appendChild(iconContainer);
     summaryContainer.appendChild(summaryTexts);
 });
/* ------------------------  ABRIR MODAL CART -------------------------------------- */

const cartIconBtn = document.getElementById("btnShopping");
const cartModal = document.querySelector(".modal-navbar__background");

cartIconBtn.addEventListener("click", () => {
  cartModal.classList.remove("display-none");
  cartModal.classList.add("show");
});

const closeModalNavbar = document.querySelector(".modal-navbar__close-icon");
closeModalNavbar.addEventListener("click", () => {
  cartModal.classList.toggle("display-none");
});
