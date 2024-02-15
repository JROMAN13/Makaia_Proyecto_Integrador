//  import { products } from "../index.js";

console.log("READY");
const idProduct = JSON.parse(localStorage.getItem("idProduct"));
const URL_BASE = "https://makaia-proyecto-integrador-backend-dev-mdfc.3.us-1.fl0.io/";

const getProduct = async (url, id) => {
  try {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const printDetailsProduct = (product) => {
  const figureImg = document.querySelector(".image-52");
  const nameProduct = document.querySelector(".luxury-charms-ring");
  const priceProduct = document.querySelector(".price");
  const textProduct = document.querySelector(".luxury-charms");

  // Actualiza los datos por los del array
  figureImg.src = product.image;
  figureImg.alt = product.nombre;

  textProduct.textContent = product.name;
  nameProduct.textContent = product.name;
  priceProduct.textContent = product.price;
};

let cartModal = document.querySelector(".modal-navbar__background");
let productContainer = document.querySelector(".modal-navbar");
let lastValue = 0;

const drawProductInModal = (product) => {
  // console.log(localStorage.getItem("idProduct"));
  // console.log(localStorage.getItem("formData"));
  console.log(JSON.parse(localStorage.getItem("formData")));
  console.log("drawProductInModal called");

  if (!productContainer) {
    console.error("productContainer is null or undefined");
    return;
  }
  console.log("productContainer:", productContainer);

  const { image, name, price } = product;

  cartModal.innerHTML += `
  
    <nav class="modal-navbar" aria-label="">
      
      <div class="section2__container1">
          <div class="container1__imgs">            
              <img src="../assets/img/v4/s1_img1.png" class="container1__img" alt="" />            
          </div>
  
          <div class="container__summary">
              <div class="summary__container__texts">
                  <div>
                      <h3 class="texts">${name}</h3>
                      <h6 class="texts texts__code">Code: 78205</h6>
                      <h3 class="texts">$620.73</h3>
                  </div>
              
                  <div class="container__icon">
                      <img src="../assets/img/v4/trash.svg" alt="" class="summary__icon__trash" />
                      <h6 class="texts texts-trash">x1</h6>
                  </div>
              </div>
          </div>
      </div>
      <div class="contain__total">
          <div class="summary__items summary__items-total">
              <h6 class="texts texts__code">Total</h6>
              <h4 class="texts texts__items texts__items-total">$1058.72</h4>
          </div>
          <button class="payment__btn texts">Continue to checkout</button>
      </div>        
    </nav>
    
  `;
  const closeModalNavbar = document.querySelector(".modal-navbar__close-icon");
  if (closeModalNavbar) {
    closeModalNavbar.addEventListener("click", () => {
      cartModal.classList.add("display-none");
    });
  } else {
    console.error("closeModalNavbar is null or undefined");
  }
};

const cartIconBtn = document.querySelector("#btnShopping");

const handleCartIconClick = (selectedProduct) => {
  const cartModal = document.querySelector(".modal-navbar__background");
  const cartNotification = document.querySelector(".header__cart--notification");
  lastValue = parseInt(cartNotification.innerText);

  console.log("lastValue:", lastValue);

  cartModal.classList.remove("display-none");
  cartModal.classList.add("show");

  productContainer.classList.remove("display-none");
  productContainer.classList.add("show");

  // Validar si lastValue es 0 antes de dibujar el producto en el modal
  if (lastValue === 0) {
    productContainer.innerHTML =
      '<img class="modal-navbar__close-icon" src="../assets/img/icon-close.svg" alt="" style="width: 2vw; height: 2vh; margin-left: 1.5vw; margin-top: 1.5vw;">  <p class="cart-empty">Your cart is empty</p>';
  } else {
    // drawProductInModal(selectedProduct);
  }
};

let userInput;
const handleNumberButtons = () => {
  const ovals = document.querySelectorAll(".oval");
  ovals.forEach((oval) => {
    oval.addEventListener("click", function () {
      const selectedValue = oval.getAttribute("data-value");
      ovals.forEach(function (oval) {
        oval.classList.remove("oval-active");
      });

      oval.classList.add("oval-active");
      console.log(selectedValue);
    });
  });

  const paginationButtons = document.querySelectorAll(".pagination_button");

  const handlePaginationButtonClick = (event) => {
    const clickedButton = event.target;
    const selectedValue = clickedButton.textContent;
    paginationButtons.forEach((button) => button.classList.remove("pagination_button-active"));
    clickedButton.classList.add("pagination_button-active");
    console.log(selectedValue);
  };

  paginationButtons.forEach((button) => button.addEventListener("click", handlePaginationButtonClick));

  const minusBtn = document.querySelector(".btn__txt.input__minus");
  const plusBtn = document.querySelector(".btn__txt.input__plus");
  userInput = document.querySelector(".btn__txt.input__number");

  let userInputNumber = 0;

  plusBtn.addEventListener("click", () => {
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
  });

  minusBtn.addEventListener("click", () => {
    userInputNumber--;
    if (userInputNumber <= 0) {
      userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
  });

  const addToCartBtn = document.querySelector("#details__button");
  const cartNotification = document.querySelector(".header__cart--notification");

  addToCartBtn.addEventListener("click", (selectedProduct) => {
    lastValue += userInputNumber;
    cartNotification.innerText = lastValue;
    drawProductInModal(selectedProduct);
  });
};

const validateInputs = () => {
  const userInputValue = parseInt(userInput.value);
  const selectedPaginationButton = document.querySelector(".pagination_button-active");
  const selectedOval = document.querySelector(".oval-active");

  // Verificar si algún campo está incompleto
  if (userInputValue <= 0 || !selectedPaginationButton || !selectedOval) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You must fill out all fields!",
    });
    return false;
  }

  // Todos los campos están completos
  return true;
};

document.addEventListener("DOMContentLoaded", async () => {
  const url = `${URL_BASE}products`;
  const selectedProduct = await getProduct(url, idProduct);
  printDetailsProduct(selectedProduct);

  const modalNavbarContainer = document.createElement("div");
  modalNavbarContainer.classList.add("modal-navbar");
  document.body.appendChild(modalNavbarContainer);

  productContainer = document.querySelector(".modal-navbar");
  cartIconBtn.addEventListener("click", handleCartIconClick);
  handleNumberButtons();

  const submitButton = document.getElementById("details__button");
  submitButton.addEventListener("click", () => {
    if (validateInputs()) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "The order has been added to the cart",
        showConfirmButton: false,
        timer: 1500,
      });
      // Obtener los datos necesarios para almacenar en localStorage
      const userInputValue = parseInt(userInput.value);
      const selectedPaginationButton = document.querySelector(".pagination_button-active").textContent;
      const selectedOval = document.querySelector(".oval-active").getAttribute("data-value");

      // Crear un objeto con los datos
      const data = {
        userInputValue: userInputValue,
        selectedPaginationButton: selectedPaginationButton,
        selectedOval: selectedOval,
      };

      // // Almacenar el objeto en localStorage
      // if(!localStorage.getItem("formData")){
      //   localStorage.setItem("formData", []);
      // }
      // localStorage.getItem("formData").push(JSON.parse(data));
      localStorage.setItem("formData", JSON.stringify(data));
      console.log(data);
    }
  });
});
