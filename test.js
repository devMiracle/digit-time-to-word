const timeToWord = require('./index');

// console.log(timeToWord);
let timeInWord = timeToWord.getTimeInWord(2,24);
if(timeInWord.status){
    //if timeInWord.status === true
    console.log(`Hour : ${timeInWord.hour}  Minute : ${timeInWord.minute}  ===>  ${timeInWord.time}`);    
}else{
    //if timeInWord.status === false
    console.log(timeInWord.error);
}
