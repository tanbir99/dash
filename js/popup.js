switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}


function setToday(s, v) {
    for ( var i = 0; i < s.options.length; i++ ) {
        if ( s.options[i].text == v ) {
            s.options[i].selected = true;
            return;
        }
    }
}

var mondaySched = [
    { class1: 'STA 3155',
      hour: 10,
      minutes: 45,
      ampm: "AM"
    },
    { class2: 'CIS 3400',
      hour: 4,
      minutes: 10,
      ampm: "PM"
    },
    { class3: 'POL 3362',
      hour: 5,
      minutes: 50,
      ampm: "PM"
    },
  ];

var monday = new Array()
var currentClass = null




function milliMaker(daySched) {
    for (var i = 0; i < daySched.length; i++) {
        if (daySched[i].ampm == "AM") {
            if (daySched[i].hour == 12) {
                monday.push(daySched[i].minutes * 60000)
            } else {
                monday.push(((daySched[i].hour * 60) + daySched[i].minutes) * 60000 ) ;
            }
        } else {
            if (daySched[i].ampm == 12) {
                monday.push((720 + daySched[i].minutes) * 60000)
            } else {
                monday.push((660 + (daySched[i].hour * 60) + daySched[i].minutes) * 60000 ) ; 
            }
        }
        console.log(monday)
        }
    }


milliMaker(mondaySched)


//setToday(document.getElementById('theDay'), day);