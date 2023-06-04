// Programa de bienvenida al sitio web de BoGi, la Catnip lord

const cards = document.getElementById("cards");
const items = document.getElementById("items");
const footer = document.getElementById("footer");
const templateCard = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();
const templateFooter = document.getElementById("template-footer").content;
const templateCarrito = document.getElementById("template-carrito").content;

let cart = {};

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
  if (localStorage.getItem("carrito")) {
    cart = JSON.parse(localStorage.getItem("carrito"));
    pintarCarrito();
  }
});

cards.addEventListener("click", (e) => {
  addCarrito(e);
});

items.addEventListener("click", (e) => {
  btnAccion(e);
});

const fetchData = async () => {
  try {
    const res = await fetch("../json/api.json");
    const data = await res.json();
    printCard(data);
  } catch (error) {
    console.log(error);
  }
};

const printCard = (data) => {
  data.forEach((producto) => {
    templateCard.querySelector("h5").textContent = producto.productname;
    templateCard.querySelector("p").textContent = producto.price;
    templateCard.querySelector("img").setAttribute("src", producto.img);
    templateCard.querySelector(".btn").dataset.id = producto.id;

    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};

const addCarrito = (e) => {
  if (e.target.classList.contains("btn")) {
    setCart(e.target.parentElement);
  }
  e.stopPropagation();
};

const setCart = (objeto) => {
  const producto = {
    id: objeto.querySelector(".btn").dataset.id,
    productname: objeto.querySelector("h5").textContent,
    price: objeto.querySelector("p").textContent,
    cantidad: 1,
  };

  if (cart.hasOwnProperty(producto.id)) {
    producto.cantidad = cart[producto.id].cantidad + 1;
  }

  cart[producto.id] = { ...producto };
  pintarCarrito();
};

const pintarCarrito = () => {
  items.innerHTML = "";
  Object.values(cart).forEach((producto) => {
    templateCarrito.querySelector("th").textContent = producto.id;
    templateCarrito.querySelectorAll("td")[0].textContent =
      producto.productname;
    templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad;
    templateCarrito.querySelector(".btn-info").dataset.id = producto.id;
    templateCarrito.querySelector(".btn-danger").dataset.id = producto.id;
    templateCarrito.querySelector("span").textContent =
      producto.cantidad * producto.price;

    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);

  pintarFooter();

  localStorage.setItem("carrito", JSON.stringify(cart));
};

const pintarFooter = () => {
  footer.innerHTML = "";
  if (Object.keys(cart).length === 0) {
    footer.innerHTML = `
      <th scope="row" colspan="5">Empty cart - start buying!</th>
      `;
    return;
  }

  const nCantidad = Object.values(cart).reduce(
    (acc, { cantidad }) => acc + cantidad,
    0
  );
  const nPrecio = Object.values(cart).reduce(
    (acc, { cantidad, price }) => acc + cantidad * price,
    0
  );

  templateFooter.querySelectorAll("td")[0].textContent = nCantidad;
  templateFooter.querySelector("span").textContent = nPrecio;

  const clone = templateFooter.cloneNode(true);
  fragment.appendChild(clone);
  footer.appendChild(fragment);

  const btnVaciar = document.getElementById("vaciar-carrito");
  btnVaciar.addEventListener("click", () => {
    cart = {};
    pintarCarrito();
  });

  const btnComprar = document.getElementById("comprar-carrito");
  btnComprar.addEventListener("click", () => {
    cart = {};
    pintarCarrito();
    confirm('Compra exitosa, vuelve pronto.')
  });

};

const btnAccion = (e) => {
  console.log(e.target);
  if (e.target.classList.contains("btn-info")) {
    cart[e.target.dataset.id];
    const producto = cart[e.target.dataset.id];
    producto.cantidad++;
    cart[e.target.dataset.id] = { ...producto };

    pintarCarrito();
  }

  if (e.target.classList.contains("btn-danger")) {
    const producto = cart[e.target.dataset.id];
    producto.cantidad--;
    if (producto.cantidad === 0) {
      delete cart[e.target.dataset.id];
    }
    pintarCarrito();
  }
  e.stopPropagation();
};