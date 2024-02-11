// import { products } from "../index.js";

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


// const selectedProduct = products.find((product) => product.id == idProduct);
// console.log(selectedProduct);


/* ------- SEGUN EL PRODUCTO SELECCIONADO MOSTRAR LA INFORMACION(IMAGEN,NOMBRE,PRECIO) -----*/
const printDetailsProduct = (product) => {
  const figureImg = document.querySelector(".image-52");
  const nameProduct = document.querySelector(".luxury-charms-ring");
  const priceProduct = document.querySelector(".price");

  // Actualiza los datos por los del array 
  figureImg.src = product.image;
  figureImg.alt = product.nombre;

  nameProduct.textContent = product.name;
  priceProduct.textContent = product.price;

};






/* ---------------------  INPUT PARA SUMAR O RESTAR VALORES  ------------------------ */
const minusBtn = document.querySelector(".btn__txt.input__minus");
const plusBtn = document.querySelector(".btn__txt.input__plus");
let userInput = document.querySelector(".btn__txt.input__number");

console.log(userInput, minusBtn, plusBtn);

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




document.addEventListener("DOMContentLoaded", async () => {
  const url = `${URL_BASE}products`;
  const selectedProduct = await getProduct(url, idProduct);
  printDetailsProduct(selectedProduct);
});
