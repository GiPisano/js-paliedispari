function palindromicWord(word){

    // dichiaro la varibile che conterrà le lettere della parola scritta al contrario dentro un array
    let arrayWord = '';

    // - con un ciclo controllo tutte le lettere della parola
    for(let i = word.length - 1; i >= 0; i--){
        let backwards = word[i];
        arrayWord += backwards;
    }
    console.log(`la parola inserita è "${word}"`);
    console.log(`la parola inserita ma al contrario è "${arrayWord}"`);
    // verifico se la parole è polindroma oppure no
    

    if(word == arrayWord){
        console.log('la parola è palindroma');
    }else{
        console.log('la parola non è palindroma');
    }

} 