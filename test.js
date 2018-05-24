const timeToWord = require('./index');

// console.log(timeToWord);

setInterval(()=>{
    let date =  new Date();
    //console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
    if(date.getSeconds() === 59){
        let timeInWord = timeToWord.getTimeInWord(date.getHours(),date.getMinutes());
        if(timeInWord.status){
            console.log(`Hour : ${timeInWord.hour}  Minute : ${timeInWord.minute}  ===>  ${timeInWord.time}`);    
        }else{
            console.log(timeInWord.error);
        }
    }
},1000);
