
const timeToWordArr = [
    {key:1,value:"One"},{key:2,value:"Two"},
    {key:3,value:"Three"},{key:4,value:"Four"},
    {key:5,value:"Five"},{key:6,value:"Six"},
    {key:7,value:"Seven"},{key:8,value:"Eight"},
    {key:9,value:"Nine"},{key:10,value:"Ten"},
    {key:11,value:"Eleven"},{key:12,value:"Twelve"},
    {key:13,value:"Thirteen"},{key:14,value:"Fourteen"},
    {key:15,value:"Fifteen"},{key:16,value:"Sixteen"},
    {key:17,value:"Seventeen"},{key:18,value:"Eighteen"},
    {key:19,value:"Nineteen"},{key:20,value:"Twenty"},
    {key:21,value:"Twenty One"},{key:22,value:"Twenty Two"},
    {key:23,value:"Twenty Three"},{key:24,value:"Twenty Four"},
    {key:25,value:"Twenty Five"},{key:26,value:"Twenty Six"},
    {key:27,value:"Twenty Seven"},{key:28,value:"Twenty Eight"},{key:29,value:"Twenty Nine"}
];
const object = {
    result: {
        status:false,error:null,hour:null,minute:null,time:null
    },
    getTimeInWord(hour,minute){
        if(hour === undefined && minute === undefined ){
            this.result.error = "Hour and Minute cannot be undefined";
        }
        else if(hour === undefined ){
            this.result.error = "Hour cannot be undefined";
        }
        else if(minute === undefined ){
            this.result.error = "Minute cannot be undefined";
        }
        else if(hour.length === 0 && minute.length === 0 ){
            this.result.error = "Hour and Minute cannot be empty";
        }
        else if(hour.length === 0){
            this.result.error = "Hour cannot be empty";
        }
        else if(minute.length === 0){
            this.result.error = "Minute cannot be empty";
        } 
        else if(hour < 1 || hour > 12){
            this.result.error = "Hour must be between the range of 1 to 12";
        }
        else if(minute > 60){
            // this.minute = 0;
            this.result.error = "minutes must be within the range of 0 to 60";
        }else{
            this.result.status = true;
            this.result.hour = hour;
            this.result.minute = minute;
            this.result.time = this.displayTime(parseInt(hour),parseInt(minute));
        }
        return this.result;
    },

    displayTime(hour,minutes){
        let response;
        if(minutes === 30){
            response = this.halfPast(hour);
        }
        if(minutes > 0 && minutes < 30){
            response = this.minutePast(minutes,hour);
        }
        if(minutes > 30 && minutes < 60){
            response = this.minuteTo(minutes,hour);
        }
        return response;
    },
    halfPast(hour){
        return "Half Past "+ this.numberToWord(hour);
    },

    minutePast(minutes,hour){
        return this.numberToWord(minutes) + " minutes Past "+  this.numberToWord(hour);
    },

    minuteTo(minutes,hour){
        let targetHours = parseInt(hour) + 1;
        return this.numberToWord(this.getRemainingMinute(minutes)) + " Minutes To "+ this.numberToWord(this.actualHour(targetHours));
    },

    getRemainingMinute(minutes){
        return 60 - minutes;
    },

    actualHour(hour){
        var myHour = hour; 
        if(hour > 12){
            myHour = 1;
        }
        return myHour;
    },

    numberToWord(number){
        let wordValue;
        let timeWord  =  timeToWordArr.find(time => time.key === number);
        switch(number){
            case 1 : wordValue = timeWord.value;break;
            case 2 : wordValue = timeWord.value;break;
            case 3 : wordValue = timeWord.value;break;
            case 4 : wordValue = timeWord.value;break;
            case 5 : wordValue = timeWord.value;break;
            case 6 : wordValue = timeWord.value;break;
            case 7 : wordValue = timeWord.value;break;
            case 8 : wordValue = timeWord.value;break;
            case 9 : wordValue = timeWord.value;break;
            case 10 : wordValue = timeWord.value;break;
            case 11 : wordValue = timeWord.value;break;
            case 12 : wordValue = timeWord.value;break;
            case 13 : wordValue = timeWord.value;break;
            case 14 : wordValue = timeWord.value;break;
            case 15 : wordValue = timeWord.value;break;
            case 16 : wordValue = timeWord.value;break;
            case 17 : wordValue = timeWord.value;break;
            case 18 : wordValue = timeWord.value;break;
            case 19 : wordValue = timeWord.value;break;
            case 20 : wordValue = timeWord.value;break;
            case 21 : wordValue = timeWord.value;break;
            case 22 : wordValue = timeWord.value;break;
            case 23 : wordValue = timeWord.value;break;
            case 24 : wordValue = timeWord.value;break;
            case 25 : wordValue = timeWord.value;break;
            case 26 : wordValue = timeWord.value;break;
            case 27 : wordValue = timeWord.value;break;
            case 28 : wordValue = timeWord.value;break;
            case 29 : wordValue = timeWord.value;break;
            default : wordValue = "Invalid Number Entered";break;
        }
        return wordValue;
    }
};

module.exports = object;