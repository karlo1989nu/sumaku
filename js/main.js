// Programa de bienvenida al sitio web de BoGi, la Catnip lord
/*
Este programa va dará evaluará si:
 1. al esclavo le gustan los gatos
 2. el usuario cuenta con suficiente edad gato para comprar nuestros productos
 3. el usuario tiene uso de razón y se arrepiente de no gustarle los gatos después de negarlo max dos veces
*/

/*let enteredName = prompt('Enter your name:')
let likeCats = prompt('Do you like cats?: (yes/no)')
let ingreso = false

const productsServices = [
   { id: 101, stock: 112, productname: "Meowloha", price: 500, img: "img1.jpg", description: " Buy it now and taste heaven" },
   { id: 102, stock: 123, productname: "Meowabonga", price: 1000, img: "img2.jpg", description: " Try this to know the glory" },
   { id: 103, stock: 134, productname: "Meowrale", price: 1500, img: "img3.jpg", description: "This is a sentence to paradise with tequila" },
   { id: 104, stock: 145, productname: "Meowla Pirola", price: 2000, img: "img4.jpg", description: "Don't forget your mate with this" },
   { id: 105, stock: 156, productname: "Meownda la osa", price: 2500, img: "img5.jpg", description: "Available at Moe's" },
   { id: 106, stock: 167, productname: "Meow", price: 3000, img: "img6.jpg", description: "Meow" },
   { id: 107, stock: 178, productname: "Meowlala", price: 3500, img: "img7.jpg", description: "Bring your own bagette" },
   { id: 108, stock: 189, productname: "Meowmamia", price: 4000, img: "img8.jpg", description: "Bring your pizza" },
   { id: 109, stock: 190, productname: "Meowbye", price: 4500, img: "img9.jpg", description: "Hahahahahahahaha" },
   { id: 110, stock: 200, productname: "Meowboy", price: 5000, img: "img10.jpg", description: "Meowidy meow" },
]

console.log(likeCats)
console.log(enteredName);

if (likeCats === 'yes' || likeCats === 'Yes') {
   ingreso = true;

} else if (likeCats === 'no' || likeCats === 'No') {
   let likeCats1 = prompt("We can't accept 'No/no' as the answer for this question, " + enteredName + ". Please try one more time. Do you like cats?: (yes/no)")
   console.log(likeCats1);
   for (let i = 0; i < 3; i++) {
      if (likeCats1 === 'yes' || likeCats1 === 'Yes') {
         break
      } else if (likeCats1 === 'no' || likeCats1 === 'No') {
         likeCats1 = prompt('Please try one more time, do you like cats:')
      }
   }
} else {
   alert("You can only enter 'Yes', 'yes', 'No', 'no'")
}


let enteredAge = parseInt(prompt("Enter your slave's age here:"))
console.log(enteredAge);

alert("Welcome to our meownder world, " + enteredName + ". Here you'll find all the Catnip related products you need.");
alert("According to Meowngarian regulations, only Meowngarian Kittizens over 1 cat-years old are allowed to buy and consume catnip therefore, in order to buy in our website, we'll convert your slave's age to cat age.")

let newCatage = 0;

function catAge() {

   if (enteredAge < 40) {
      newCatage = ((enteredAge - 1) * 3) / 19;
   } else {
      newCatage = ((enteredAge - 40) / 4) + 6;
   }

}

catAge(enteredAge)

if (ingreso) {

   if (newCatage >= 1) {
      alert("Your slave is " + Math.round(newCatage) + " cat-years old, please proceed to choose your desired products.")
   } else {
      alert("Your useless slave can't buy you catnip because its age is " + Math.round(newCatage) + " cat-years old, we recommend to trash it and find another one that can serve you better")
   }
}*/

/* II Entrega => A partir de esta línea estaré escribiendo el código perteneciente a la segunda entrega de la comisión #52125. */

// Lista de productos de la Catnip tienda (aray)

/*let prodSerNew = []

for (let i in productsServices) {
   i += "_Catnip: " + productsServices[i].productname + " Stock: " + productsServices[i].stock
   prodSerNew.push(i);
}

 alert("This is our list of products: " + prodSerNew)

 let productsearch = prompt("Please type your desired product from the list")

const findProduct = productsServices.find((el) => el.productname == productsearch)

 Test: console.log(findProduct);
 if (findProduct) {
    alert(`Your selected product is ${findProduct.productname} whose price is $${findProduct.price}. ${findProduct.description}. If this information is correct please proceed to pay your purchase.`)   
 } else {
    alert("The product selected isn't available.")  
 }
const totalStock = productsServices.reduce((acc, el) => {
   return acc + el.stock
}, 0)

console.log(totalStock);
console.dir(document.body)
console.dir(document.head)*/

/*III Entrega => En esta entrega construí la página STORE en la que estaré publicando una lista dinámica
de productos y ya no por medio de alert.*/
const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content

let cart  = {}

document.addEventListener('DOMContentLoaded', () => {
   fetchData()
})

cards.addEventListener('click', e => {
   addCarrito(e)
})

const fetchData = async () => {
   try {
      const res = await fetch('../json/api.json')
      const data = await res.json()
      //console.log(data);
      printCard(data)
   } catch (error) {
      console.log(error);
   }
}

const printCard = data => {
   data.forEach( producto => {
      templateCard.querySelector('h5').textContent = producto.productname
      templateCard.querySelector('p').textContent = producto.price
      templateCard.querySelector('img').setAttribute("src", producto.img)
      templateCard.querySelector('.btn').dataset.id = producto.id

      const clone = templateCard.cloneNode(true)
      fragment.appendChild(clone)
   });
   cards.appendChild(fragment)
}

const addCarrito = e => {
   // console.log(e.target);
   // console.log(e.target.classList.contains('btn'));
   if (e.target.classList.contains('btn')) {
      setCart(e.target.parentElement)
   }
   e.stopPropagation()
}

const setCart = objeto => {
   //console.log(objeto);
   const producto = {
      id: objeto.querySelector('.btn').dataset.id,
      productname: objeto.querySelector('h5').textContent,
      price: objeto.querySelector('p').textContent,
      cantidad: 1
   }

   if (cart.hasOwnProperty(producto.id)) {
      producto.cantidad = cart[producto.id].cantidad + 1
   }

   cart[producto.id] = {...producto}
   pintarCarrito()
}

const pintarCarrito = () => {
   console.log(cart)
   Object.values(cart).forEach(producto => {
      templateCarrito.querySelector('th').textContent = producto.id
      templateCarrito.querySelectorAll('td')[0].textContent = producto.productname
      templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
      templateCarrito.querySelector('.btn-info').dataset.id = producto.id
      templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
      templateCarrito.querySelector('span').textContent = producto.cantidad * producto.price

      const clone = templateCarrito.cloneNode(true)
      fragment.appendChild(clone)
   })
   items.appendChild(fragment)
}