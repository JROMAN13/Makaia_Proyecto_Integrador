// Declarar una lista de los productos con los siguientes datos: id, nombre, código, precio
// unitario, tipo de accesorio (anillo, brazalete, collar, aretes, etc.), imágenes, descripción,
// cantidad en stock por color y/o talla.

export const products = [
  {
    id: 1,
    name: "Luxury Gems Necklace",
    price: 168.76,
    type: "Necklaces",
    image: "../assets/img/img_view2/img1.png",
    description: "Lorem Gems",
    stockSize: {
      30: 5,
      32: 10,
      34: 8,
    },
  },
  {
    id: 2,
    name: "Aurora Ring",
    price: 125.28,
    type: "Rings",
    image: "../assets/img/img_view2/img2.png",
    description: "Lorem Ring",
    stockSize: {
      6: 4,
      6.5: 7,
      7: 3,
    },
  },
  {
    id: 3,
    name: "Reflections Necklace",
    price: 620.73,
    type: "Bracelets",
    image: "../assets/img/img_view2/Img3.png",
    description: "Lorem Bracelent",
    stockSize: {
      14: 2,
      15: 7,
      17: 6,
    },
  },
  {
    id: 4,
    name: "Serene Solitaire Earrings",
    price: 125.28,
    type: "Earrings",
    image: "../assets/img/img_view2/img4.png",
    description: "Lorem Earrings",
    stockSize: {
      10: 4,
      12: 3,
      14: 8,
    },
  },
  {
    id: 5,
    name: "Divine Diamonds",
    price: 540.13,
    type: "Earrings",
    image: "../assets/img/img_view2/img5.png",
    description: "Lorem Diamond",
    stockSize: {
      11: 3,
      13: 5,
      15: 7,
    },
  },
];
// Escribir una función que reciba como parámetros un array de productos y el nombre de
// un tipo de producto, que utilice la función de array que permita filtrar la lista por la
// categoría o tipo y devuelva el array resultante. Luego, llamar la función pasándole como
// argumentos la lista de productos declarado en el ítem anterior y cualquier tipo de
// accesorio que exista en la lista y, por último, mostrar el resultado en la consola del
// navegador.

const filterProducts = (array, type) => {
  const filter = array.filter((object) => object.type === type);
  console.log("Resultado de busqueda por tipo de producto", filter);
};

filterProducts(products, "earrings");

// Escribir una función que realice la búsqueda de productos por nombre, reciba como
// parámetro un array de productos y un término de búsqueda (es decir, una cadena de
// caracteres) y retorne un array con todos los productos cuyos nombres contengan los
// caracteres del segundo parámetro. Luego, llamar la función pasándole como argumentos
// datos de prueba y mostrar el resultado en la consola del navegador

const searchByName = (array, string) => {
  const stringMin = string.toLowerCase();

  const search = array.filter((element) => element.name.toLowerCase().includes(stringMin));
  console.log("Resultado de busqueda por cadena ", search);
};

searchByName(products, "lace");

// Crear una función que ordene un array de productos por precios de manera ascendente
// y descendente y retorne el array resultante. Ejecutar la función y mostrar el resultado en
// consola

const sortedProducts = products.toSorted((a, b) => a.price - b.price);
console.log("Productos ordenados de menor a mayor precio ", sortedProducts);

const sortedProducts2 = products.toSorted((a, b) => b.price - a.price);
console.log("Productos ordenados de mayor a menor precio ", sortedProducts2);

// Crear una función que calcule el total a pagar de una compra, reciba como parámetros
// un array de productos donde cada producto, tenga como propiedades la cantidad y
// precio unitario del producto y devuelva el valor que corresponda a la sumatoria de la
// cantidad por el precio de cada producto. Ejecutar la función con datos de prueba y
// mostrar el resultado en la consola del navegador.

const calcularTotalCompraMultiple = (productos) => {
  const totalCompra = productos.reduce((total, producto) => {
    const productoBuscado = products.find((p) => p.name === producto.nombre);

    if (productoBuscado) {
      return total + producto.cantidad * productoBuscado.price;
    } else {
      console.log(`Producto no encontrado: ${producto.nombre}`);
      return total;
    }
  }, 0);

  console.log("El total a pagar es: $" + totalCompra.toFixed(3));
};

// Llamar a la función

calcularTotalCompraMultiple([
  { nombre: "Divine Diamonds", cantidad: 2 },
  { nombre: "Serene Solitaire Earrings", cantidad: 2 },
]);






























