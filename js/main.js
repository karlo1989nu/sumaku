// Programa de bienvenida al sitio web de BoGi, la Catnip lord
/*
Este programa va dará evaluará si:
 1. al usuario le gustan los gatos
 2. el usuario cuenta con suficiente edad gato para comprar nuestros productos
 3. el usuario tiene uso de razón y se arrepiente de no gustarle los gatos después de negarlo max dos veces
 
*/

let likeCats = prompt('Do you like cats?: (yes/no)')
let enteredName = prompt('Enter your name:')
let enteredAge = prompt('Enter your age:')
console.log(likeCats)
console.log(enteredName);
console.log(enteredAge);

if (likeCats === 'yes' || likeCats === 'Yes') {
   prompt("Welcome to our meownder world, " + enteredName + ". Here you'll find all the Catnip related products you need.");
} else if (likeCats === 'no' || likeCats === 'No') {
   for (let i = 0; i < 3; i++) {
      let likeCats1 =  prompt("Are you sure that 'No/no' is your final answer, " + enteredName + "? Please try one more time:")
      console.log(likeCats1);
      if (likeCats1 === 'yes' || likeCats1 === 'Yes') {
         likeCats1 = prompt('Please try one more time. Do you like cats?: (yes/no)')
         if (likeCats1 === 'no' || likeCats1 === 'No') {
            prompt("You don't deserve to live " + enteredName + ", please die soon!")
            break
         } else if (likeCats1 === 'yes' || likeCats1 === 'Yes') {
            prompt("Welcome to our meownder world, " + enteredName + ". Here you'll find all the Catnip related products you need.");
            break
         }
      } else if (likeCats1 === 'no' || likeCats1 === 'No') {
         likeCats1 = prompt('Please try one more time, do you like cats:')
      } else {
         break
      }
   }
} 


