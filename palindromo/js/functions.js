function palindromicWord(word){

    // dichiaro la varibile che conterrà le lettere della parola scritta al contrario dentro un array
    let arrayWord = [];

    // - con un ciclo controllo tutte le lettere della parola
    for(let i = word.length - 1; i >= 0; i--){
        let backwards = word[i];
        // inserisco la parola dentro l'array al contrario
        arrayWord.push(backwards);
    }

    // trasformo l'array in una stringa
    arrayWord = arrayWord.join('');

    console.log(word);
    console.log(arrayWord);
    // verifico se la parole è polindroma oppure no
    

    if(word == arrayWord){
        console.log('la parola è palindroma');
    }else{
        console.log('la parola non è palindroma');
    }

} 