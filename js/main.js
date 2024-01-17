function palindromicWord(word){
    let arrayWord = []
    for(let i = word.length - 1; i >= 0; i--){
        let backwards = word[i];
        arrayWord.push(backwards)
    }
    arrayWord = arrayWord.join('')

   if(word == arrayWord){
    console.log('la parola è polidroma')
   }else{
    console.log('la parola non è polidroma')
   }

   console.log(word)
   console.log(arrayWord)
} 



let userWord = prompt('inserisci una paraola')

palindromicWord(userWord)