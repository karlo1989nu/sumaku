// Programa de bienvenida al sitio web de BoGi, la Catnip lord
/*
Este programa va dará evaluará si:
 1. al esclavo le gustan los gatos
 2. el usuario cuenta con suficiente edad gato para comprar nuestros productos
 3. el usuario tiene uso de razón y se arrepiente de no gustarle los gatos después de negarlo max dos veces
*/

let enteredName = prompt('Enter your name:')
let likeCats = prompt('Do you like cats?: (yes/no)')
let ingreso = false

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
   }


let enteredAge = parseInt(prompt("Enter your slave's age here:"))
console.log(enteredAge);

alert("Welcome to our meownder world, " + enteredName + ". Here you'll find all the Catnip related products you need.");
alert("According to Meowngarian regulations, only Meowngarian Kittizens over 1 cat-years old are allowed to buy and consume catnip therefore, in order to buy in our website, we'll convert your slave's age to cat age.")

newCatage = 0;

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
}

/* II Entrega => A partir de esta línea estaré escribiendo el código perteneciente a la segunda entrega de la comisión #52125. */

