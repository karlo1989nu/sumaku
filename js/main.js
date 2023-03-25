// Programa de bienvenida al sitio web de BoGi, la Catnip lord
/*
Este programa va dará evaluará si:
 1. al usuario le gustan los gatos
 2. el usuario cuenta con suficiente edad gato para comprar nuestros productos
 3. el usuario tiene uso de razón y se arrepiente de no gustarle los gatos
*/

let likeCats = prompt('Do you like cats?: (yes/no)')
let nombreingresado = prompt('Enter your name:')
console.log(likeCats)
console.log(nombreingresado);

if (likeCats === 'yes' || likeCats === 'Yes') {
   prompt("Welcome to our meownder world, " + nombreingresado +". Here you'll find all the Catnip related products you need.");
} else {
   prompt("You don't deserve to live " + nombreingresado + ", die soon!");
}

