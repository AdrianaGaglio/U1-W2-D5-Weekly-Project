/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser.
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (i = 0; i < pets.length; i++) {
  const pet = pets[i];
  console.log("Print string '" + pet + "' which is in position " + (i + 1) + " (index " + i + ").");
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log("Sorted pets names", pets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("Reversed pets names", pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"]
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"]
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"]
  }
];

const licensPlates = [];
let randomPlate;
for (i = 0; i < cars.length; i++) {
  const car = cars[i];

  for (j = 0; j <= 21; j++) {
    // EXTRA - Calcola randomicamente la targa
    const allChar = "abcdefghilmnopqrstuvz".split("");
    const randNum1 = Math.floor(Math.random() * 21);
    const randNum2 = Math.floor(Math.random() * 21);
    const randNum3 = Math.floor(Math.random() * 21);
    const randNum4 = Math.floor(Math.random() * 21);
    const randSingleNum1 = Math.floor(Math.random() * 10);
    const randSingleNum2 = Math.floor(Math.random() * 10);
    const randSingleNum3 = Math.floor(Math.random() * 10);
    randomPlate =
      allChar[randNum1].toUpperCase() +
      allChar[randNum2].toUpperCase() +
      " " +
      randSingleNum1.toString() +
      randSingleNum2.toString() +
      randSingleNum3.toString() +
      " " +
      allChar[randNum3].toUpperCase() +
      allChar[randNum4].toUpperCase();
  }

  car.licensePlate = randomPlate;
}

console.log("Added license plate for each car", cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push(structuredClone(cars[cars.length - 1]));
cars[cars.length - 1] = { brand: "Renault", model: "Captur", color: "orange", trims: ["titanium", "style"] };
console.log("Added a new element at the end of cars array", cars);

for (i = 0; i < cars.length; i++) {
  const car = cars[i];
  car.trims.pop();
}

console.log("Updated cars by removing last trim for each one", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (i = 0; i < cars.length; i++) {
  const clonedCars = cars.slice();
  const clonedCar = clonedCars[i];
  justTrims.push(clonedCar.trims.shift());
}

console.log("First trim for each car", justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (i = 0; i < cars.length; i++) {
  const carNameText = "Result for " + cars[i].brand + " " + cars[i].model + " is: ";
  const carColor = cars[i].color.toLowerCase();
  if (carColor.startsWith("b")) {
    console.log(carNameText + "Fizz");
  } else {
    console.log(carNameText + "Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
const indexOf32 = numericArray.indexOf(32);
let counter = 0;

while (counter <= indexOf32) {
  console.log("Value at index " + counter + " --> " + numericArray[counter]);
  counter++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const alphabet = "abcdefghilmnopqrstuvz";
const alphabetCharactersArray = alphabet.split("");
const numbers = [];

for (i = 0; i < charactersArray.length; i++) {
  const char = charactersArray[i];
  for (j = 0; j < 21; j++) {
    switch (true) {
      case alphabetCharactersArray[j].includes(char):
        numbers.push(alphabetCharactersArray.indexOf(char) + 1);
        break;
    }
  }
}

console.log(numbers);
