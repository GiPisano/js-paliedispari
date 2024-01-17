// chiedo all'utente di scegliere tra pari o dispari
const userChoice = prompt('pari o dispari?');
console.log(`hai sccelto ${userChoice}`);

// chiedo all'utente di scegliere un numero da 1 a 5
const numberUser = parseInt(prompt('scegli un numero da 1 a 5'));
console.log(`il tuo numero è ${numberUser}`);

// genero un numero per il computer
const numberComputer = getRandomNumber(1, 5);
console.log(`il computer ha scelto il numero ${numberComputer}`);

// sommo il numero dell'utente con il numero del computer
const sumNumbers = sum(numberUser, numberComputer);
console.log(`la somma dei due numeri fa ${sumNumbers}`)

// controllo che il risultato della somma dei due numeri sia pari o dispari
const evenOrOdd = isEvenOrOdd(sumNumbers);
console.log(`il numero ${evenOrOdd}`)

// determino chi ha vinto
if(userChoice == 'pari' && evenOrOdd == 'è pari' ||
userChoice == 'dispari' && evenOrOdd == 'é dispari'){
    console.log('hai vinto')
}else{
    console.log('il computer ha vinto')
}
