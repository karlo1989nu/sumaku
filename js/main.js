// Programa de bienvenida al sitio web de BoGi, la Catnip lord
/*
Este programa va dará evaluará si:
 1. al usuario le gustan los gatos
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
   for (let i = 0; i < 3; i++) {
      let likeCats1 = prompt("Are you sure that 'No/no' is your final answer, " + enteredName + "? Please try one more time:")
      console.log(likeCats1);
      if (likeCats1 === 'yes' || likeCats1 === 'Yes') {
         likeCats1 = prompt('Please try one more time. Do you like cats?: (yes/no)')
         if (likeCats1 === 'no' || likeCats1 === 'No') {
            alert("You don't deserve to live " + enteredName + ", please die soon!")
         } else if (likeCats1 === 'yes' || likeCats1 === 'Yes') {
            !ingreso
            break
         }
      } else if (likeCats1 === 'no' || likeCats1 === 'No') {
         likeCats1 = prompt('Please try one more time, do you like cats:')
         if (likeCats1 === 'yes' || likeCats1 === 'Yes') {
            !ingreso
            break
         }
      } else {
         break
      }
   }
}

let enteredAge = prompt("Enter your slave's age here:")
console.log(enteredAge);

alert("Welcome to our meownder world, " + enteredName + ". Here you'll find all the Catnip related products you need.");
console.log(alert("According to Meowngarian regulations, only Meowngarian Kittizens over 1 cat-years old are allowed to buy and consume catnip therefore, in order to buy in our website, we'll convert your slave's age to cat age."));

if (ingreso) {
   
   newCatage = 0;

   if (enteredAge < 40) {
      newCatage = ((enteredAge - 1) * 3) / 19;
   } else {
      newCatage = ((enteredAge - 40) / 4) + 6;
   }
   
   if (newCatage >= 1) {
      alert("Your slave is " + newCatage + " cat-years old, please proceed to choose your desired products.")
   } else {
      alert("Your useless slave can't buy you catnip because its age is " + newCatage + " cat-years old, we recommend to trash it and find another one that can serve you better")
   }
}


