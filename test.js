const timeToWord = require('./index');

// console.log(timeToWord);
let timeInWord = timeToWord.getTimeInWord(2,"");
if(timeInWord.status){
    console.log(`Hour : ${timeInWord.hour}  Minute : ${timeInWord.minute}  ===>  ${timeInWord.time}`);    
}else{
    console.log(timeInWord.error);
}