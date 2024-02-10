import { products } from "../index.js";

/* --------------- GENERAR DINAMICAMENTE LAS TARJETAS ------------   */
let containerCards = document.querySelector(".container__cards");
console.log(containerCards);
const insertarProductos = (contenedor, listaProductos) => {
  contenedor.innerHTML = "";
  listaProductos.forEach((producto) => {
    contenedor.innerHTML += `
        <article class="card" name=${producto.id}>
            <figure>
                <img src=${producto.image} alt=${producto.nombre}>
            </figure>  
            <div>
              <h3 class="card__h3">${producto.name}</h3>
              <span class="card__price">$ ${producto.price.toLocaleString()}</span>            
            </div>          
            
        </article>
        `;
  });
};

insertarProductos(containerCards, products);

let cardList = document.querySelectorAll(".card");
cardList = [...cardList];


/* ---------------  FILTRAR POR EL TIPO SELECCIONADO ------------   */

const filterNav = document.querySelector(".filter__nav");
filterNav.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("nav__li__a")) {
    // Remover la clase nav__li__a-active de todos los enlaces
    const navLinks = filterNav.querySelectorAll(".nav__li__a");
    navLinks.forEach((link) => link.classList.remove("nav__li__a-active"));

    // Agregar la clase nav__li__a-active al enlace seleccionado
    event.target.classList.add("nav__li__a-active");

    const productType = event.target.textContent;
    let filteredProducts = [];

    if (productType === "All") {
      // Si se selecciona "All", mostrara todos los productos
      insertarProductos(containerCards, products);
    } else {
      // Filtrar el array de productos según el tipo del enlace clickeado
      filteredProducts = products.filter((product) => product.type === productType);
      insertarProductos(containerCards, filteredProducts);
    }
  }
});

/* ---------------  BUSCANDO CON EL INPUT ------------   */

const inputSearch = document.querySelector(".buscador__text");

inputSearch.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();

  cardList.forEach((card) => {
    const cardText = card.textContent.toLowerCase();

    card.style.display = cardText.includes(searchTerm) ? "block" : "none";
  });
});

/* ---------------  ORDENAR POR PRECIO ------------   */

document.getElementById("sortByPrice").addEventListener("change", () => {
  let sortBy = document.getElementById("sortByPrice").value;

  let parentContainer = document.querySelector(".container__cards");

  cardList.sort((a, b) => {
    let priceA = parseFloat(a.querySelector(".card__price").textContent.replace("$", "").trim());
    let priceB = parseFloat(b.querySelector(".card__price").textContent.replace("$", "").trim());

    return sortBy === "lower" ? priceA - priceB : priceB - priceA;
  });

  parentContainer.innerHTML = "";
  cardList.forEach((card) => parentContainer.appendChild(card));
});

/* --------------REDIRECCIONAR AL DAR CLIC EN UNA IMAGEN A DETAILS ------------   */

const goToDetailsProduct = () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      console.log("Click card");
      const idProduct = card.getAttribute("name");
      localStorage.setItem("idProduct", JSON.stringify(idProduct));
      location.href = "./details.html";
    });
  });
};

goToDetailsProduct();
