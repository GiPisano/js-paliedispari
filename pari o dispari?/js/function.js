// funione che genera numero random
function getRandomNumber(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}

// funione che fa la somma di due numeri
function sum(num1, num2){
    const sumNumbers = num1 + num2;
    return sumNumbers;
}

// funzione che ti dice se un numero è pari o dispari
function isEvenOrOdd(num){
    const result = (num % 2 == 0) ? 'è pari' : 'è dispari';
    return result;
}




