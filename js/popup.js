//Time
var timeNow = new Date();
var dayNow = timeNow.getDay();
var hourNow = timeNow.getHours();
var minutesNow = timeNow.getMinutes();
var secondsNow = timeNow.getSeconds();

//Arrays for class times to be stored in milliseconds
var monday = new Array()


//Preselect today in dropdown menu
function setToday(days) {
    for ( var i = 0; i < days.options.length; i++ ) {
        if ( days.options[i].value == dayNow ) {
            days.options[i].selected = true;
            return;
        }
    }
}

setToday(document.getElementById('theDay'));



var mondaySched = [
    { class1_end: 'TEST' ,
      hour: 11,
      minutes: 59,
      ampm: 'PM'
    },
    { class1_start: 'STA 3155',
      hour: 10,
      minutes: 45,
      ampm: "AM"
    },
    { class1_end: 'STA 3155' ,
      hour: 12,
      minutes: 00,
      ampm: 'PM'
    },
    { class2_start: 'CIS 3400',
      hour: 4,
      minutes: 10,
      ampm: 'PM'
    },
    {
      class2_end: 'CIS 3400',
      hour: 5,
      minutes: 25,
      ampm: 'PM'
    },
    { class3_start: 'POL 3362',
      hour: 5,
      minutes: 50,
      ampm: 'PM'
    },
    { class3_end: 'POL 3362',
      hour: 7,
      minutes: 05,
      ampm: 'PM'
    }
];







function milliMaker(daySched) {
    for (var i = 0; i < daySched.length; i++) {
        if (daySched[i].ampm == "AM") {
            if (daySched[i].hour == 12) {
                monday.push(daySched[i].minutes * 60000)
            } else {
                monday.push(((daySched[i].hour * 60) + daySched[i].minutes) * 60000 ) ;
            }
        } else {
            if (daySched[i].hour == 12) {
                monday.push((720 + daySched[i].minutes) * 60000)
            } else {
                monday.push((660 + (daySched[i].hour * 60) + daySched[i].minutes) * 60000 ) ; 
            }
        }
    }
}


milliMaker(mondaySched)

console.log(monday)





console.log(hourNow, minutesNow, secondsNow)