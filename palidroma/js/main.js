// chiedo all'utente di inserire una parola
let userWord = prompt('inserisci una paraola');
while(!isNaN(userWord) || userWord.includes(' ')){
    userWord = prompt('i dati inseriti non sono corretti, inserisci una sola parola');
}
palindromicWord(userWord);
