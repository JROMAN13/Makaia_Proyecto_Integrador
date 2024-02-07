let cardList = document.querySelectorAll(".card");
cardList = [...cardList];
console.log(cardList);

let elementsFilters = document.querySelectorAll(".nav__li__a");
elementsFilters = [...elementsFilters];

let values = elementsFilters.map((element) => element.textContent);
console.log(values);

let cardsh3 = document.querySelectorAll(".card__h3");
cardsh3 = [...cardsh3];
const valuesh3 = cardsh3.map((element) => element.textContent);
console.log(valuesh3);

elementsFilters.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    let selectedValue = values[index].toLowerCase();

    // Añadir la clase nav__li__a-active al elemento clicado y quitarla de los demás
    elementsFilters.forEach((otherElement, otherIndex) => {
      if (index === otherIndex) {
        element.classList.add("nav__li__a-active");
      } else {
        otherElement.classList.remove("nav__li__a-active");
      }
    });

    console.log(selectedValue);

    /* ---------------  FILTRAR POR EL TIPO SELECCIONADO ------------   */

    const filterProducts = (array, selectedValue) => {
      array.forEach((card) => {
        const h3Text = card.querySelector(".card__h3").textContent.toLowerCase();

        // Función para manejar variaciones plurales
        const handlePlurals = (word) => (word.endsWith("s") ? [word, word.slice(0, -1)] : [word]);

        const selectedWords = handlePlurals(selectedValue).map((word) => word.toLowerCase());

        // Mostrar la tarjeta si alguna palabra de selectedValue está contenida en h3Text
        const matches = selectedWords.some((word) => h3Text.includes(word));

        if (selectedValue === "all" || matches) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    };

    filterProducts(cardList, selectedValue);
  });
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
      // const idProduct = card.getAttribute("name");
      // localStorage.setItem("idProduct", JSON.stringify(idProduct));
      location.href = "./details.html";
    });
  });
};

goToDetailsProduct();
