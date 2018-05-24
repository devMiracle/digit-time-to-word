# digit-time-to-word
A Module that helps You convert time from numbers to word
### Installation

###### **using npm**

```
$ npm i digit-time-to-word --save
```
###### **In Node Js**
```javascript
//load the digit time to word module
const timeToWord = require('digit-time-to-word');

// You can use console.log(timeToWord) to see all result

// You can use date class to test.
let date =  new Date();

let timeInWord = timeToWord.getTimeInWord(date.getHours(),date.getMinutes());
//
console.log(timeInWord);
// if(timeInWord.status){
//    console.log(`Hour : ${timeInWord.hour}  Minute : ${timeInWord.minute}  ===>  ${timeInWord.time}`);    
// }else{
//     console.log(timeInWord.error);
// }
    


```

#### Happy Coding!!!
#### Cheers
